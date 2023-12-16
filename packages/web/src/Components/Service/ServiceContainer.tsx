import React from 'react';
import {isUndefined} from 'lodash';

import {selectServiceData} from '@infomat/core/src/Redux/Service/Selectors/selectServiceData';
import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import Page from '@infomat/uikit/src/Page/Page';
import {selectServiceIsLoading} from '@infomat/core/src/Redux/Service/Selectors/selectServiceIsLoading';
import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';

import useRouterLinkForMui from 'src/Utils/Navigation/useRouterLinkForMui';
import {Routes} from 'src/Routes/Routes';

import TouristObject from './Service';

const TouristObjectContainer = ({id}: TTouristObjectContainerProps) => {
	const serviceObjectVM = useStoreSelector(selectServiceData);
	const isLoading = useStoreSelector(selectServiceIsLoading);
	const onDelete = useActionDispatcher(serviceClientToServerActions.deleteCategory);
	const onUpdate = useActionDispatcher(serviceClientToServerActions.updateCategory);
	const onCreate = useActionDispatcher(serviceClientToServerActions.createCategory);
	const ServiceLink = useRouterLinkForMui(Routes.services);

	const dataVM = isUndefined(id) ? undefined : serviceObjectVM;

	return (
		<Page
			isLoading={isLoading || (isUndefined(dataVM) && !isUndefined(id))}
			backLink={ServiceLink}
			label={isUndefined(id) ? 'Создание услуги' : 'Редактирование услуги'}
		>
			<TouristObject
				id={id}
				serviceObjectVM={dataVM}
				onSubmit={isUndefined(id) ? onCreate : onUpdate}
				onDelete={onDelete}
			/>
		</Page>
	);
};

type TTouristObjectContainerProps = {
	id?: number;
};

export default TouristObjectContainer;
