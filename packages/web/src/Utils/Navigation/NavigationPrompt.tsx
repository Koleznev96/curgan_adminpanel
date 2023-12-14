import React, {useCallback} from 'react';
import {unstable_useBlocker as useBlocker} from 'react-router-dom';
import {BlockerFunction} from '@remix-run/router';

import {Routes} from 'src/Routes/Routes';

type TNavigationPromptProps = {
	isNavigationBlocked: boolean;
	title: string;
	body: string;
	closeButton: string;
	agreeButton: string;
	align?: any;
	isModalsNavigationDisallowed?: boolean;
	onContinueNavigation?: () => void;
};

const NavigationPrompt = ({
	isNavigationBlocked,
	align,
	title,
	body,
	closeButton,
	agreeButton,
	isModalsNavigationDisallowed,
	onContinueNavigation,
}: TNavigationPromptProps) => {
	const blocker = useBlocker(
		useCallback<BlockerFunction>(
			({currentLocation, nextLocation}) => {
				return (
					isNavigationBlocked &&
					!nextLocation.state?.bypassNavigationPrompt &&
					(isModalsNavigationDisallowed ||
						(!Routes.isModal(nextLocation.pathname) && !Routes.isModal(currentLocation.pathname)))
				);
			},
			[isNavigationBlocked, isModalsNavigationDisallowed],
		),
	);

	if (blocker.state === 'blocked') {
		const onClose = () => {
			blocker.reset?.();
		};

		return null;
	}

	return null;
};

export default NavigationPrompt;
