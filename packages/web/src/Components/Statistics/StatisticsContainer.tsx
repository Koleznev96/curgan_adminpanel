import React from 'react';
import {isUndefined} from 'lodash';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import {selectStatistics} from '@infomat/core/src/Redux/User/Selectors/selectStatistics';
import {selectStatisticsIsLoading} from '@infomat/core/src/Redux/User/Selectors/selectStatisticsIsLoading';
import Page from '@infomat/uikit/src/Page/Page';

import Statistics from './Statistics';

const StatisticsContainer = () => {
	const data = useStoreSelector(selectStatistics);
	const isLoading = useStoreSelector(selectStatisticsIsLoading);

	return (
		<Page isMin label="Панель информации" isLoading={isLoading || isUndefined(data)}>
			<Statistics data={data} />
		</Page>
	);
};

export default StatisticsContainer;
