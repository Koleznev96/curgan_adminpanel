import React, {useCallback} from 'react';
import {isUndefined} from 'lodash';

import useActionDispatcher from '@infomat/core/src/Hooks/useActionDispatcher';
import {informationClientToServerActions} from '@infomat/core/src/Redux/Information/Actions/informationClientToServerActions';
import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import {selectInformationDataElement} from '@infomat/core/src/Redux/Information/Selectors/selectInformationDataElement';
import {selectInformationIsLoading} from '@infomat/core/src/Redux/Information/Selectors/selectInformationIsLoading';
import {selectErrorInformation} from '@infomat/core/src/Redux/Information/Selectors/selectErrorInformation';
import Page from '@infomat/uikit/src/Page/Page';
import {EnumInfoType} from '@infomat/core/src/BusinessLogic/EnumInfoType';

import GeneralInformationElement from './GeneralInformationElement';

const GeneralInformationElementContainer = ({type}: {type: EnumInfoType}) => {
	const data = useStoreSelector(selectInformationDataElement);
	const isLoading = useStoreSelector(selectInformationIsLoading);
	const error = useStoreSelector(selectErrorInformation);
	const onSubmit = useActionDispatcher(informationClientToServerActions.updateInfo);

	const getLabel = useCallback((type: EnumInfoType) => {
		switch (type) {
			case EnumInfoType.RULE_OF_TRAVELLER:
				return 'Правила путешественника';
			case EnumInfoType.USER_AGREEMENT:
				return 'Пользовательское соглашение';
			case EnumInfoType.PRIVACY_POLICY:
				return 'Политика конфиденциальности';
			case EnumInfoType.ABOUT:
				return 'О приложении';
			case EnumInfoType.HELP:
				return 'Экстренная помощь';
			case EnumInfoType.FEEDBACK:
				return 'Обратная связь';
			default:
				return '';
		}
	}, []);

	return (
		<Page label={getLabel(type)} isLoading={isLoading || isUndefined(data)}>
			<GeneralInformationElement data={data} error={error} onSubmit={onSubmit} type={type} />
		</Page>
	);
};

export default GeneralInformationElementContainer;
