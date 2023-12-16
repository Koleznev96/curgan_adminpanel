import React from 'react';
import {isUndefined} from 'lodash';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import Page from '@infomat/uikit/src/Page/Page';
import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {selectMuseumGuideData} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideData';
import {selectMuseumGuideIsLoading} from '@infomat/core/src/Redux/MuseumGuide/Selectors/selectMuseumGuideIsLoading';
import {museumGuideClientToServerActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientToServerActions';

import useRouterLinkForMui from 'src/Utils/Navigation/useRouterLinkForMui';
import {Routes} from 'src/Routes/Routes';

import MuseumGuide from './MuseumGuide';

const MuseumGuideContainer = ({id}: TMuseumGuideContainerProps) => {
	const museumGuideObjectVM = useStoreSelector(selectMuseumGuideData);
	const isLoading = useStoreSelector(selectMuseumGuideIsLoading);
	const onDelete = useActionDispatcher(museumGuideClientToServerActions.deleteCategory);
	const onUpdate = useActionDispatcher(museumGuideClientToServerActions.updateCategory);
	const onCreate = useActionDispatcher(museumGuideClientToServerActions.createCategory);
	const MuseumGuideLink = useRouterLinkForMui(Routes.museumGuides);

	const dataVM = isUndefined(id) ? undefined : museumGuideObjectVM;

	return (
		<Page
			isLoading={isLoading || (isUndefined(dataVM) && !isUndefined(id))}
			backLink={MuseumGuideLink}
			label={isUndefined(id) ? 'Создание музейного гида' : 'Редактирование музейного гида'}
		>
			<MuseumGuide
				id={id}
				museumGuideObjectVM={dataVM}
				onSubmit={isUndefined(id) ? onCreate : onUpdate}
				onDelete={onDelete}
			/>
		</Page>
	);
};

type TMuseumGuideContainerProps = {
	id?: number;
};

export default MuseumGuideContainer;
