import React from 'react';
import {useLocation} from 'react-router-dom';
import {includes} from 'lodash';

import {IconColor, IconType} from '@infomat/uikit/src/Icon';
import MenuItemWithIcon from '@infomat/uikit/src/Menu/MenuItemWithIcon/MenuItemWithIcon';

import {Routes} from 'src/Routes/Routes';

import style from './Menu.module.scss';

const Menu = ({hasLoader}: TMenuProps) => {
	const location = useLocation();

	return (
		<div className={style.container}>
			<MenuItemWithIcon
				to={Routes.attractions}
				label="Достопримечательности"
				iconType={IconType.attractions}
				selected={includes(location.pathname, Routes.attractions)}
			/>
			<MenuItemWithIcon
				to={Routes.events}
				label="События"
				iconType={IconType.events}
				selected={includes(location.pathname, Routes.events)}
			/>
			<MenuItemWithIcon
				to={Routes.services}
				label="Услуги"
				iconType={IconType.services}
				selected={includes(location.pathname, Routes.services)}
			/>
			<div className={style.subContainerItem}>
				<MenuItemWithIcon
					to={Routes.categoriesServices}
					label="Категории услуг"
					selected={includes(location.pathname, Routes.categoriesServices)}
				/>
			</div>
			<MenuItemWithIcon
				to={Routes.audioGuides}
				label="Аудио-гид"
				iconType={IconType.audioGuide}
				selected={includes(location.pathname, Routes.audioGuides)}
			/>
			<MenuItemWithIcon
				to={Routes.museumGuides}
				label="Музейный-гид"
				iconType={IconType.museumGuide}
				selected={includes(location.pathname, Routes.museumGuides)}
			/>
			<MenuItemWithIcon
				to={Routes.information}
				label="Общая информация"
				iconType={IconType.generalInformation}
				selected={includes(location.pathname, Routes.information)}
			/>
			<div className={style.subContainer}>
				<MenuItemWithIcon
					to={Routes.rulesTraveler}
					label="Правила путешественника"
					selected={includes(location.pathname, Routes.rulesTraveler)}
				/>
				<MenuItemWithIcon
					to={Routes.rulesUser}
					label="Пользовательское соглашение"
					selected={includes(location.pathname, Routes.rulesUser)}
				/>
				<MenuItemWithIcon
					to={Routes.privacyPolicy}
					label="Политика конфиденциальности"
					selected={includes(location.pathname, Routes.privacyPolicy)}
				/>
				<MenuItemWithIcon to={Routes.about} label="О приложении" selected={includes(location.pathname, Routes.about)} />
				<MenuItemWithIcon
					to={Routes.help}
					label="Экстренная помощь"
					selected={includes(location.pathname, Routes.help)}
				/>
				<MenuItemWithIcon
					to={Routes.feedback}
					label="Обратная связь"
					selected={includes(location.pathname, Routes.feedback)}
				/>
			</div>
		</div>
	);
};

type TMenuProps = {
	className?: string;
	hasLoader?: boolean;
	chatId?: string;
	format?: string;
};

export default Menu;
