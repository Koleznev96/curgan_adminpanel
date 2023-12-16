import React, {useState, useRef, useEffect} from 'react';
import {Typography, Grid} from '@mui/material';
import {Map} from '@pbe/react-yandex-maps';
import _ from 'lodash';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import {TStop} from '@infomat/core/src/Redux/AudioGuide/entityAdapter';

import style from './RoutesOnMap.module.scss';

const RoutesOnMap = ({label, value, setValue}: TRoutesOnMapProps) => {
	const ymaps = useRef<any>(null);
	const placemarkRef = useRef<any>(null);
	const mapRef = useRef<ymaps.Map | undefined>(undefined);
	const [isReadyYmaps, setIsReadyYmaps] = useState(false);
	const [items, setItems] = useState<TStop[]>(value || []);
	const [isDr, setIsDr] = useState(false);

	const allsteps = useRef(value);

	const checkRemove = (index: number) => {
		let newItems = [...(allsteps.current ? allsteps.current : [])];
		newItems.splice(index, 1);
		setValue(newItems);
		allsteps.current = newItems;
	};

	const createPolyline = (coordsObjects: (number | undefined)[][]) => {
		return new ymaps.current.Polygon(
			[coordsObjects],
			{},
			{
				cursor: 'crosshair',
				fillColor: '#00704A',
				strokeColor: '#0000FF',
				opacity: 0.4,
				strokeWidth: 1.5,
				strokeStyle: 'shortdash',
				strokeOpacit: 0.7,

				editorMenuManager: (data: any, t: any) => {
					if (data.length > 0) {
						const indexFind = _.findIndex(data, (item: any) => item.id === 'removeVertex');
						return [
							{
								...data[indexFind],
								onClick: (...event: any) => {
									data[indexFind].onClick(...event);
									checkRemove(t._index);
								},
							},
						];
					}
					return [];
				},
			},
		);
	};

	const filRecord = (coords: number[][]) => {
		placemarkRef.current = createPolyline(coords);
		mapRef.current?.geoObjects.add(placemarkRef.current);

		placemarkRef.current?.editor.stopEditing();
		placemarkRef.current?.editor.startDrawing();

		placemarkRef.current?.editor.events.add(['drawingstop'], (event: any) => {
			const coords = event.originalEvent.target.geometry.getCoordinates();
			const newcoords = _.map(coords[0], (item) => ({lat: item[0], lon: item[1]}));
			setValue(newcoords);
			allsteps.current = newcoords;
			setIsDr(false);
		});

		placemarkRef.current?.editor.events.add(['vertexadd'], (event: any) => {
			if (isDr) {
				return;
			}
			const coords = event.originalEvent.target.geometry.getCoordinates();
			let newItemsI = [...(allsteps.current ? allsteps.current : [])];
			const index = event.originalEvent.vertexIndex;
			const cord = coords[0][index];
			newItemsI.splice(index, 0, {
				lat: cord[0],
				lon: cord[1],
			});
			setValue(newItemsI);
			allsteps.current = newItemsI;
		});

		placemarkRef.current?.editor.events.add(['vertexdragend'], (event: any) => {
			if (isDr) {
				return;
			}
			const cord = event.originalEvent.vertexModel.geometry._coordinates;
			let newItemsI = [...(allsteps.current ? allsteps.current : [])];
			const index = event.originalEvent.vertexModel._index;
			newItemsI[index] = {
				lat: cord[0],
				lon: cord[1],
			};
			setValue(newItemsI);
			allsteps.current = newItemsI;
		});
	};

	const startDr = (e: any) => {
		if (isReadyYmaps && !isDr) {
			mapRef.current?.geoObjects.removeAll();
			const coords = e.get('coords');
			filRecord([coords]);
			setIsDr(true);
		}
	};

	useEffect(() => {
		if (isReadyYmaps && items && items.length) {
			const newcoords = _.map(items, (item) => [item.lat || 0, item.lon || 0]);
			filRecord(newcoords);
			placemarkRef.current?.editor.stopDrawing();
		}
	}, [isReadyYmaps, items]);

	return (
		<Grid container gap={3}>
			<Grid container item direction="column" xs={12} md={12}>
				{label && <Typography className={style.label}>{label}</Typography>}
				<div className={style.containerMap}>
					<Map
						modules={['geoObject.addon.editor', 'Polygon', 'geoObject.addon.balloon']}
						onLoad={(ympasInstance) => {
							ymaps.current = ympasInstance;
							setIsReadyYmaps(true);
						}}
						instanceRef={mapRef}
						className={style.map}
						defaultState={{center: [54.47, 32.04], zoom: 10}}
						onClick={startDr}
					></Map>
				</div>
			</Grid>
		</Grid>
	);
};

type TRoutesOnMapProps = {
	label?: string;
	setValue: PropertyHandler<TStop[]>;
	value?: TStop[];
};

export default RoutesOnMap;
