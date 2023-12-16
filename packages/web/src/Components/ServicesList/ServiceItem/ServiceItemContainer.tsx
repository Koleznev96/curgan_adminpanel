import React from 'react';
import _ from 'lodash';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import {selectServiceVMById} from '@infomat/core/src/Redux/Service/Selectors/defaultSelectors';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';

import ServiceItem from './ServiceItem';

const ServiceItemContainer = ({id}: TServiceItemContainerProps) => {
	const objectVM = useStoreSelector(selectServiceVMById, id);
	const onDelete = useActionDispatcher(serviceClientToServerActions.deleteCategory);

	if (_.isUndefined(objectVM)) {
		return null;
	}

	return <ServiceItem id={id} objectVM={objectVM} onDelete={onDelete} />;
};

type TServiceItemContainerProps = {
	id: number;
};

export default ServiceItemContainer;
