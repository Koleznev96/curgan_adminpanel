import {put, select} from 'typed-redux-saga';
import _ from 'lodash';

import {EnumInfoType} from '@infomat/core/src/BusinessLogic/EnumInfoType';
import {selectIsLoggedIn} from '@infomat/core/src/Redux/User/Selectors/selectIsLoggedIn';
import {routingClientOnlyActions} from '@infomat/core/src/Redux/Routing/Actions/routingClientOnlyActions';
import {informationClientToServerActions} from '@infomat/core/src/Redux/Information/Actions/informationClientToServerActions';
import {categoryObjectClientToServerActions} from '@infomat/core/src/Redux/CategoryObject/Actions/categoryObjectClientToServerActions';
import {serviceClientToServerActions} from '@infomat/core/src/Redux/Service/Actions/serviceClientToServerActions';
import {placesClientToServerActions} from '@infomat/core/src/Redux/Places/Actions/placesClientToServerActions';
import {audioGuideClientToServerActions} from '@infomat/core/src/Redux/AudioGuide/Actions/audioGuideClientToServerActions';
import {eventsClientToServerActions} from '@infomat/core/src/Redux/Events/Actions/eventsClientToServerActions';
import {museumGuideClientToServerActions} from '@infomat/core/src/Redux/MuseumGuide/Actions/museumGuideClientToServerActions';

import {EnumRouteSlugs} from 'src/Routes/EnumRouteSlugs';

export const updateStateOnChatNavigationSaga = function* ({
	payload: {path, params},
}: ReturnType<typeof routingClientOnlyActions.updateStateAfterNavigation>) {
	try {
		const {id} = params as {id: string};
		const isLoggedIn = yield* select(selectIsLoggedIn);

		if (!isLoggedIn) {
			return;
		}

		if (path === EnumRouteSlugs.INFORMATION) {
			yield* put(informationClientToServerActions.getDeatails());
		}

		if (path === EnumRouteSlugs.RULES_TRAVELER) {
			yield* put(informationClientToServerActions.getInfo(EnumInfoType.RULE_OF_TRAVELLER));
		}

		if (path === EnumRouteSlugs.RULES_USER) {
			yield* put(informationClientToServerActions.getInfo(EnumInfoType.USER_AGREEMENT));
		}

		if (path === EnumRouteSlugs.PRIVACY_POLICY) {
			yield* put(informationClientToServerActions.getInfo(EnumInfoType.PRIVACY_POLICY));
		}

		if (path === EnumRouteSlugs.ABOUT) {
			yield* put(informationClientToServerActions.getInfo(EnumInfoType.ABOUT));
		}

		if (path === EnumRouteSlugs.HELP) {
			yield* put(informationClientToServerActions.getInfo(EnumInfoType.HELP));
		}

		if (path === EnumRouteSlugs.FEEDBACK) {
			yield* put(informationClientToServerActions.getInfo(EnumInfoType.FEEDBACK));
		}

		if (path === EnumRouteSlugs.ATTRACTIONS) {
			yield* put(placesClientToServerActions.getList({}));
		}

		if (path === EnumRouteSlugs.CATEGORIES_SERVICES) {
			yield* put(categoryObjectClientToServerActions.getList({}));
		}

		if (path === EnumRouteSlugs.AUDIO_GUIDES) {
			yield* put(audioGuideClientToServerActions.getList({}));
		}

		if (path === EnumRouteSlugs.EVENTS) {
			yield* put(eventsClientToServerActions.getList({}));
		}

		if (path === EnumRouteSlugs.MUSEUM_GUIDES) {
			yield* put(museumGuideClientToServerActions.getList({}));
		}

		if (path === EnumRouteSlugs.MUSEUM_GUIDE && id !== 'new') {
			yield* put(museumGuideClientToServerActions.get(Number(id)));
		}

		if (path === EnumRouteSlugs.EVENT && id !== 'new') {
			yield* put(eventsClientToServerActions.get(Number(id)));
		}

		if (path === EnumRouteSlugs.AUDIO_GUIDE && id !== 'new') {
			yield* put(audioGuideClientToServerActions.get(Number(id)));
		}

		if (path === EnumRouteSlugs.CATEGORIE_SERVICES && id !== 'new') {
			yield* put(categoryObjectClientToServerActions.get(Number(id)));
		}

		if (path === EnumRouteSlugs.ATTRACTION && id !== 'new') {
			yield* put(placesClientToServerActions.get(Number(id)));
		}

		if (path === EnumRouteSlugs.SERVICES) {
			yield* put(serviceClientToServerActions.getList({}));
			yield* put(categoryObjectClientToServerActions.getAllList());
		}

		if (path === EnumRouteSlugs.SERVICE) {
			yield* put(categoryObjectClientToServerActions.getAllList());
			if (id !== 'new') {
				yield* put(serviceClientToServerActions.get(Number(id)));
			}
		}
	} catch (error) {}
};
