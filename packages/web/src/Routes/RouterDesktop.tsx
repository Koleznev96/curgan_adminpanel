import React, {lazy, Suspense} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

import LoginPage from 'src/Routes/Pages/Desktop/LoginPage';
import ProtectedRoute from 'src/Routes/ProtectedRoute/ProtectedRoute';
import PublicRoute from 'src/Routes/PublicRoute/PublicRoute';
import store from 'src/Redux/store';
import {pageLoader} from 'src/Routes/PageLoaders';
import {EnumRouteSlugs} from 'src/Routes/EnumRouteSlugs';

const BaseChatPage = lazy(() => import('src/Routes/Pages/Desktop/BaseChatPage'));
const GeneralInformationPage = lazy(
	() => import('src/Routes/Pages/Desktop/GeneralInformationPage/GeneralInformationPage'),
);
const EditEventPage = lazy(() => import('src/Routes/Pages/Desktop/EditEventPage/EditEventPage'));
const CategoryObjectPage = lazy(() => import('src/Routes/Pages/Desktop/CategoryObjectPage/CategoryObjectPage'));
const SubcategoryObjectPage = lazy(
	() => import('src/Routes/Pages/Desktop/SubcategoryObjectPage/SubcategoryObjectPage'),
);
const TouristObjectPage = lazy(() => import('src/Routes/Pages/Desktop/TouristObjectPage/TouristObjectPage'));
const TouristObjectsListPage = lazy(
	() => import('src/Routes/Pages/Desktop/TouristObjectsListPage/TouristObjectsListPage'),
);
const CategoryObjectsListPage = lazy(
	() => import('src/Routes/Pages/Desktop/CategoryObjectsListPage/CategoryObjectsListPage'),
);
const SubcategoryObjectsListPage = lazy(
	() => import('src/Routes/Pages/Desktop/SubcategoryObjectsListPage/SubcategoryObjectsListPage'),
);
const TouristRoutPage = lazy(() => import('src/Routes/Pages/Desktop/TouristRoutPage/TouristRoutPage'));
const TouristRoutesListPage = lazy(
	() => import('src/Routes/Pages/Desktop/TouristRoutesListPage/TouristRoutesListPage'),
);
const RecommendListPage = lazy(() => import('src/Routes/Pages/Desktop/RecommendListPage/RecommendListPage'));
const EventsListPage = lazy(() => import('src/Routes/Pages/Desktop/EventsListPage/EventsListPage'));
const SpecialPlacePage = lazy(() => import('src/Routes/Pages/Desktop/SpecialPlacePage/SpecialPlacePage'));
const SpecialPlacesListPage = lazy(
	() => import('src/Routes/Pages/Desktop/SpecialPlacesListPage/SpecialPlacesListPage'),
);
const NotFound = lazy(() => import('src/Routes/Pages/Common/NotFoundPage'));

const RouterDesktop = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route element={<PublicRoute />}>
				<Route index element={<LoginPage />} />
			</Route>
			<Route element={<ProtectedRoute Comp={BaseChatPage} />}>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.INFORMATION, args)(args)}
					path={EnumRouteSlugs.INFORMATION}
					element={
						<Suspense>
							<GeneralInformationPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.RULES_TRAVELER, args)(args)}
					path={EnumRouteSlugs.RULES_TRAVELER}
					element={
						<Suspense>
							<GeneralInformationPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.RULES_USER, args)(args)}
					path={EnumRouteSlugs.RULES_USER}
					element={
						<Suspense>
							<GeneralInformationPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.PRIVACY_POLICY, args)(args)}
					path={EnumRouteSlugs.PRIVACY_POLICY}
					element={
						<Suspense>
							<GeneralInformationPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.ABOUT, args)(args)}
					path={EnumRouteSlugs.ABOUT}
					element={
						<Suspense>
							<GeneralInformationPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.HELP, args)(args)}
					path={EnumRouteSlugs.HELP}
					element={
						<Suspense>
							<GeneralInformationPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.FEEDBACK, args)(args)}
					path={EnumRouteSlugs.FEEDBACK}
					element={
						<Suspense>
							<GeneralInformationPage />
						</Suspense>
					}
				/>

				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.EVENT, args)(args)}
					path={EnumRouteSlugs.EVENT}
					element={
						<Suspense>
							<EditEventPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.EVENTS, args)(args)}
					path={EnumRouteSlugs.EVENTS}
					element={
						<Suspense>
							<EventsListPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.ATTRACTION, args)(args)}
					path={EnumRouteSlugs.ATTRACTION}
					element={
						<Suspense>
							<TouristRoutPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.ATTRACTIONS, args)(args)}
					path={EnumRouteSlugs.ATTRACTIONS}
					element={
						<Suspense>
							<TouristRoutesListPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.SERVICE, args)(args)}
					path={EnumRouteSlugs.SERVICE}
					element={
						<Suspense>
							<SubcategoryObjectPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.SERVICES, args)(args)}
					path={EnumRouteSlugs.SERVICES}
					element={
						<Suspense>
							<SubcategoryObjectsListPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.CATEGORIE_SERVICES, args)(args)}
					path={EnumRouteSlugs.CATEGORIE_SERVICES}
					element={
						<Suspense>
							<CategoryObjectPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.CATEGORIES_SERVICES, args)(args)}
					path={EnumRouteSlugs.CATEGORIES_SERVICES}
					element={
						<Suspense>
							<CategoryObjectsListPage />
						</Suspense>
					}
				/>

				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.AUDIO_GUIDE, args)(args)}
					path={EnumRouteSlugs.AUDIO_GUIDE}
					element={
						<Suspense>
							<TouristObjectPage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.AUDIO_GUIDES, args)(args)}
					path={EnumRouteSlugs.AUDIO_GUIDES}
					element={
						<Suspense>
							<TouristObjectsListPage />
						</Suspense>
					}
				/>

				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.MUSEUM_GUIDE, args)(args)}
					path={EnumRouteSlugs.MUSEUM_GUIDE}
					element={
						<Suspense>
							<SpecialPlacePage />
						</Suspense>
					}
				/>
				<Route
					loader={(args) => pageLoader(store, EnumRouteSlugs.MUSEUM_GUIDES, args)(args)}
					path={EnumRouteSlugs.MUSEUM_GUIDES}
					element={
						<Suspense>
							<SpecialPlacesListPage />
						</Suspense>
					}
				/>
			</Route>

			<Route
				element={
					<Suspense>
						<NotFound />
					</Suspense>
				}
				path="*"
			/>
		</>,
	),
);

export default RouterDesktop;
