import React from 'react';
import {isUndefined} from 'lodash';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import Page from '@infomat/uikit/src/Page/Page';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {selectPlacesData} from '@infomat/core/src/Redux/Places/Selectors/selectPlacesData';
import {selectPlacesIsLoading} from '@infomat/core/src/Redux/Places/Selectors/selectPlacesIsLoading';
import {placesClientToServerActions} from '@infomat/core/src/Redux/Places/Actions/placesClientToServerActions';

import useRouterLinkForMui from 'src/Utils/Navigation/useRouterLinkForMui';
import {Routes} from 'src/Routes/Routes';

import Attraction from './Attraction';

const EventObjectContainer = ({id}: TEventObjectContainerProps) => {
	const placesObjectVM = useStoreSelector(selectPlacesData);
	const isLoading = useStoreSelector(selectPlacesIsLoading);
	const onDelete = useActionDispatcher(placesClientToServerActions.deleteCategory);
	const onUpdate = useActionDispatcher(placesClientToServerActions.updateCategory);
	const onCreate = useActionDispatcher(placesClientToServerActions.createCategory);
	const PlacesLink = useRouterLinkForMui(Routes.attractions);

	const dataVM = isUndefined(id) ? undefined : placesObjectVM;

	return (
		<Page
			isLoading={isLoading || (isUndefined(dataVM) && !isUndefined(id))}
			backLink={PlacesLink}
			label={isUndefined(id) ? 'Создание объекта' : 'Редактирование объекта'}
		>
			<Attraction
				id={id}
				placesObjectVM={dataVM}
				onSubmit={isUndefined(id) ? onCreate : onUpdate}
				onDelete={onDelete}
			/>
		</Page>
	);
};

type TEventObjectContainerProps = {
	id?: number;
};

export default EventObjectContainer;
