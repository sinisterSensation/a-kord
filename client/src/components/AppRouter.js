import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
	const { user } = useContext(Context);

	return (
		<Routes>
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} exact/>)}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} exact/>
			))}
			<Route element={<Navigate to={SHOP_ROUTE} />} />
		</Routes>
	);
});

export default AppRouter;

