import {put, select} from 'typed-redux-saga';
import _ from 'lodash';

import {selectIsLoggedIn} from '@infomat/core/src/Redux/User/Selectors/selectIsLoggedIn';
import {routingClientOnlyActions} from '@infomat/core/src/Redux/Routing/Actions/routingClientOnlyActions';
import {informationClientToServerActions} from '@infomat/core/src/Redux/Information/Actions/informationClientToServerActions';
import {categoryObjectClientToServerActions} from '@infomat/core/src/Redux/CategoryObject/Actions/categoryObjectClientToServerActions';
import {subcategoryObjectClientToServerActions} from '@infomat/core/src/Redux/SubcategoryObject/Actions/subcategoryObjectClientToServerActions';
import {placesClientToServerActions} from '@infomat/core/src/Redux/Places/Actions/placesClientToServerActions';
import {eventsClientToServerActions} from '@infomat/core/src/Redux/Events/Actions/eventsClientToServerActions';
import {routesClientToServerActions} from '@infomat/core/src/Redux/Routes/Actions/routesClientToServerActions';
import {specialPlacesClientToServerActions} from '@infomat/core/src/Redux/SpecialPlace/Actions/specialPlacesClientToServerActions';

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
			yield* put(informationClientToServerActions.getDeatails());
		}

		if (path === EnumRouteSlugs.RULES_USER) {
			yield* put(informationClientToServerActions.getDeatails());
		}

		if (path === EnumRouteSlugs.PRIVACY_POLICY) {
			yield* put(informationClientToServerActions.getDeatails());
		}

		if (path === EnumRouteSlugs.ABOUT) {
			yield* put(informationClientToServerActions.getDeatails());
		}

		if (path === EnumRouteSlugs.HELP) {
			yield* put(informationClientToServerActions.getDeatails());
		}

		if (path === EnumRouteSlugs.FEEDBACK) {
			yield* put(informationClientToServerActions.getDeatails());
		}

		if (path === EnumRouteSlugs.ATTRACTIONS) {
			yield* put(categoryObjectClientToServerActions.getList({}));
		}

		if (path === EnumRouteSlugs.CATEGORIES_SERVICES) {
			yield* put(specialPlacesClientToServerActions.getList({}));
		}

		if (path === EnumRouteSlugs.AUDIO_GUIDES) {
			yield* put(subcategoryObjectClientToServerActions.getList({}));
		}

		// if (path === EnumRouteSlugs.TOURIST_OBJECTS) {
		// 	yield* put(
		// 		placesClientToServerActions.getList({
		// 			recommendedOnly: null,
		// 			page: 0,
		// 			search: '',
		// 			status: null,
		// 			subcategoryId: null,
		// 		}),
		// 	);
		// 	yield* put(subcategoryObjectClientToServerActions.getAllList());
		// }

		if (path === EnumRouteSlugs.EVENTS) {
			yield* put(eventsClientToServerActions.getList({}));
		}

		if (path === EnumRouteSlugs.MUSEUM_GUIDES) {
			yield* put(routesClientToServerActions.getList({}));
		}

		if (path === EnumRouteSlugs.MUSEUM_GUIDE && id !== 'new') {
			yield* put(routesClientToServerActions.get(Number(id)));
		}

		if (path === EnumRouteSlugs.EVENT && id !== 'new') {
			yield* put(eventsClientToServerActions.get(Number(id)));
		}

		if (path === EnumRouteSlugs.AUDIO_GUIDE && id !== 'new') {
			yield* put(categoryObjectClientToServerActions.get(Number(id)));
		}

		if (path === EnumRouteSlugs.CATEGORIE_SERVICES && id !== 'new') {
			yield* put(specialPlacesClientToServerActions.get(Number(id)));
		}

		// if (path === EnumRouteSlugs.SUBCATEGORY_OBJECT) {
		// 	yield* put(categoryObjectClientToServerActions.getAllList());
		// 	if (id !== 'new') {
		// 		yield* put(subcategoryObjectClientToServerActions.get(Number(id)));
		// 	}
		// }

		// if (path === EnumRouteSlugs.TOURIST_OBJECT) {
		// 	yield* put(subcategoryObjectClientToServerActions.getAllList());
		// 	if (id !== 'new') {
		// 		yield* put(placesClientToServerActions.get(Number(id)));
		// 	}
		// }
	} catch (error) {}
};
