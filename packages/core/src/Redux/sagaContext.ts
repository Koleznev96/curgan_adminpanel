import {getContext} from 'typed-redux-saga';

export enum EnumSagaContext {
	ROUTER = 'router',
}

export type TNavigateOptions = {replace?: boolean};

export type TSagaContext = {
	[EnumSagaContext.ROUTER]: {
		goEvent: (id: number, options?: TNavigateOptions) => void;
		goAttraction: (id: number, options?: TNavigateOptions) => void;
		goService: (id: number, options?: TNavigateOptions) => void;
		goCategoryServices: (id: number, options?: TNavigateOptions) => void;
		goAudioGuide: (id: number, options?: TNavigateOptions) => void;
		goMuseumGuide: (id: number, options?: TNavigateOptions) => void;

		goInformation: (options?: TNavigateOptions) => void;
		goMuseumGuides: (options?: TNavigateOptions) => void;
		goAudioGuides: (options?: TNavigateOptions) => void;
		goSategoriesServices: (options?: TNavigateOptions) => void;
		goServices: (options?: TNavigateOptions) => void;
		goCategorysServices: (options?: TNavigateOptions) => void;
		goAttractions: (options?: TNavigateOptions) => void;
		goEvents: (options?: TNavigateOptions) => void;
		goFeedback: (options?: TNavigateOptions) => void;
		goHelp: (options?: TNavigateOptions) => void;
		goAbout: (options?: TNavigateOptions) => void;
		goPrivacyPolicy: (options?: TNavigateOptions) => void;
		goRulesUser: (options?: TNavigateOptions) => void;
		goRulesTraveler: (options?: TNavigateOptions) => void;
		goHome: (options?: TNavigateOptions) => void;
	};
};

export const getNavigationContext = function* () {
	return yield* getContext<TSagaContext[EnumSagaContext.ROUTER]>(EnumSagaContext.ROUTER);
};
