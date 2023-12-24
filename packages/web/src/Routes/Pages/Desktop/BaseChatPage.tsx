import React from 'react';
import {Outlet} from 'react-router-dom';

import {selectIsLoggedIn} from '@infomat/core/src/Redux/User/Selectors/selectIsLoggedIn';
import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';

import MenuContainer from 'src/Components/Menu/MenuContainer';
import Information from 'src/Components/Information/Information';

function BaseChatPage() {
	const isLoggedIn = useStoreSelector(selectIsLoggedIn);

	return (
		<>
			{isLoggedIn && <Information />}
			<div className="content-container">
				{/* <AppRouter router={RouterDesktop} /> */}

				<MenuContainer />
				<Outlet />
			</div>
		</>
	);
}

export default BaseChatPage;
