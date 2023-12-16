import React from 'react';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import {TStop} from '@infomat/core/src/Redux/AudioGuide/entityAdapter';

import RoutesOnMap from './RoutesOnMap';

const ItemRoutesMapContainer = ({label, setValue, value}: TItemRoutesMapContainerProps) => {
	return <RoutesOnMap label={label} value={value} setValue={setValue} />;
};

type TItemRoutesMapContainerProps = {
	label?: string;
	setValue: PropertyHandler<TStop[]>;
	value?: TStop[];
};

export default ItemRoutesMapContainer;
