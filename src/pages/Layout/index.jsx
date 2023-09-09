import Head from "../Head/index";
import SideBar from "../SideBar";
import "./index.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="main-bg">
			<Head />
			<div className="card">
				<div className="layout-side-bg">
					<SideBar />
				</div>
				<Outlet />
			</div>
		</div>
	);
};
export default Layout;
