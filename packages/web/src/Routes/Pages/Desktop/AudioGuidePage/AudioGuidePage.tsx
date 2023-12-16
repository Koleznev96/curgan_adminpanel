import React from 'react';
import {useParams} from 'react-router';

import AudioGuideContainer from 'src/Components/AudioGuide/AudioGuideContainer';

const AudioGuidePage = () => {
	const {id} = useParams() as {id: string};
	return <AudioGuideContainer id={id === 'new' ? undefined : Number(id)} />;
};

export default AudioGuidePage;
