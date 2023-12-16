import {EnumInfoType} from '@infomat/core/src/BusinessLogic/EnumInfoType';
import React from 'react';
import _ from 'lodash';

import GeneralInformationContainer from 'src/Components/GeneralInformation/GeneralInformationContainer';
import GeneralInformationElementContainer from 'src/Components/GeneralInformation/GeneralInformationElementContainer';

const GeneralInformationPage = ({type}: {type?: EnumInfoType}) => {
	if (_.isUndefined(type)) {
		return <GeneralInformationContainer />;
	}

	return <GeneralInformationElementContainer type={type} />;
};

export default GeneralInformationPage;
