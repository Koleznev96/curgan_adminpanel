import React from 'react';
import {useParams} from 'react-router';

import MuseumGuideContainer from 'src/Components/MuseumGuide/MuseumGuideContainer';

const MuseumGuidePage = () => {
	const {id} = useParams() as {id: string};
	return <MuseumGuideContainer id={id === 'new' ? undefined : Number(id)} />;
};

export default MuseumGuidePage;
