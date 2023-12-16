import React from 'react';
import {useParams} from 'react-router';

import ServiceContainer from 'src/Components/Service/ServiceContainer';

const ServicePage = () => {
	const {id} = useParams() as {id: string};

	return <ServiceContainer id={id === 'new' ? undefined : Number(id)} />;
};

export default ServicePage;
