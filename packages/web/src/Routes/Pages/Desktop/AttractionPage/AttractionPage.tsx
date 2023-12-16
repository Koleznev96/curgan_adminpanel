import React from 'react';
import {useParams} from 'react-router';

import AttractionContainer from 'src/Components/Attraction/AttractionContainer';

const AttractionPage = () => {
	const {id} = useParams() as {id: string};
	return <AttractionContainer id={id === 'new' ? undefined : Number(id)} />;
};

export default AttractionPage;
