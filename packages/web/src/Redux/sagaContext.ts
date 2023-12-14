import {matchPath} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';
import _ from 'lodash';
import {RelativeRoutingType} from '@remix-run/router';

import {EnumSagaContext, TNavigateOptions, TSagaContext} from '@infomat/core/src/Redux/sagaContext';

import {Routes} from 'src/Routes/Routes';
import {getCloseModalRoute} from 'src/Utils/Navigation/getCloseModalRoute';

export const createSagaContext = (router: ReturnType<typeof createBrowserRouter>): TSagaContext => {
	const navigate = (path: string, options?: TNavigateOptions & {relative?: RelativeRoutingType}) => {
		router.navigate(path, _.assign({state: {bypassNavigationPrompt: true}}, options));
	};

	return {
		[EnumSagaContext.ROUTER]: {
			goHome(options) {
				navigate(Routes.home, options);
			},

			goRulesTraveler(options) {
				navigate(Routes.rulesTraveler, options);
			},

			goRulesUser(options) {
				navigate(Routes.rulesUser, options);
			},

			goPrivacyPolicy(options) {
				navigate(Routes.privacyPolicy, options);
			},

			goInformation(options) {
				navigate(Routes.information, options);
			},

			goAbout(options) {
				navigate(Routes.about, options);
			},

			goHelp(options) {
				navigate(Routes.help, options);
			},

			goFeedback(options) {
				navigate(Routes.feedback, options);
			},

			goEvents(options) {
				navigate(Routes.events, options);
			},

			goEvent(id, options) {
				navigate(Routes.event(id), options);
			},

			goAttractions(options) {
				navigate(Routes.attractions, options);
			},

			goAttraction(id, options) {
				navigate(Routes.attraction(id), options);
			},

			goServices(options) {
				navigate(Routes.services, options);
			},

			goService(id, options) {
				navigate(Routes.service(id), options);
			},

			goSategoriesServices(options) {
				navigate(Routes.categoriesServices, options);
			},

			goCategoryServices(id, options) {
				navigate(Routes.categoryServices(id), options);
			},

			goAudioGuides(options) {
				navigate(Routes.audioGuides, options);
			},

			goAudioGuide(id, options) {
				navigate(Routes.audioGuide(id), options);
			},

			goMuseumGuides(options) {
				navigate(Routes.museumGuides, options);
			},

			goMuseumGuide(id, options) {
				navigate(Routes.museumGuide(id), options);
			},
		},
	};
};
