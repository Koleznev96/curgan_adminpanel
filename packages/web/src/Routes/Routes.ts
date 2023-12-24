import {generatePath} from 'react-router';
import {isUndefined} from 'lodash';

import {EnumRouteSlugs} from 'src/Routes/EnumRouteSlugs';

export const Routes = {
	isModal: (data: string) => false,

	home: '/',
	statistics: `/${EnumRouteSlugs.STATISTICS}`,
	information: `/${EnumRouteSlugs.INFORMATION}`,
	rulesTraveler: `/${EnumRouteSlugs.RULES_TRAVELER}`,
	rulesUser: `/${EnumRouteSlugs.RULES_USER}`,
	privacyPolicy: `/${EnumRouteSlugs.PRIVACY_POLICY}`,
	about: `/${EnumRouteSlugs.ABOUT}`,
	help: `/${EnumRouteSlugs.HELP}`,
	feedback: `/${EnumRouteSlugs.FEEDBACK}`,

	events: `/${EnumRouteSlugs.EVENTS}`,
	event: (id?: number) => generatePath(`/${EnumRouteSlugs.EVENT}`, {id: isUndefined(id) ? 'new' : String(id)}),

	attractions: `/${EnumRouteSlugs.ATTRACTIONS}`,
	attraction: (id?: number) =>
		generatePath(`/${EnumRouteSlugs.ATTRACTION}`, {id: isUndefined(id) ? 'new' : String(id)}),

	services: `/${EnumRouteSlugs.SERVICES}`,
	service: (id?: number) => generatePath(`/${EnumRouteSlugs.SERVICE}`, {id: isUndefined(id) ? 'new' : String(id)}),

	categoriesServices: `/${EnumRouteSlugs.CATEGORIES_SERVICES}`,
	categoryServices: (id?: number) =>
		generatePath(`/${EnumRouteSlugs.CATEGORIE_SERVICES}`, {id: isUndefined(id) ? 'new' : String(id)}),

	audioGuides: `/${EnumRouteSlugs.AUDIO_GUIDES}`,
	audioGuide: (id?: number) =>
		generatePath(`/${EnumRouteSlugs.AUDIO_GUIDE}`, {id: isUndefined(id) ? 'new' : String(id)}),

	museumGuides: `/${EnumRouteSlugs.MUSEUM_GUIDES}`,
	museumGuide: (id?: number) =>
		generatePath(`/${EnumRouteSlugs.MUSEUM_GUIDE}`, {id: isUndefined(id) ? 'new' : String(id)}),
};
