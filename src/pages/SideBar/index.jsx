import { Menu, Switch } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const DeviceIcon = () => (
	<svg
		className="svg"
		xmlns="http://www.w3.org/2000/svg"
		width="17"
		height="17"
		viewBox="0 0 23.255 19.742">
		<path
			id="Icon_material-devices-other"
			data-name="Icon material-devices-other"
			d="M3.614,8.468H22.641V6H3.614A2.318,2.318,0,0,0,1.5,8.468V23.275a2.318,2.318,0,0,0,2.114,2.468H7.842V23.275H3.614Zm10.571,7.4H9.957v2.2a4.078,4.078,0,0,0,0,5.479v2.2h4.228v-2.2a4.078,4.078,0,0,0,0-5.479Zm-2.114,6.786a1.731,1.731,0,0,1-1.586-1.851,1.731,1.731,0,0,1,1.586-1.851,1.731,1.731,0,0,1,1.586,1.851A1.731,1.731,0,0,1,12.071,22.658ZM23.7,10.936H17.356A1.244,1.244,0,0,0,16.3,12.169V24.508a1.244,1.244,0,0,0,1.057,1.234H23.7a1.244,1.244,0,0,0,1.057-1.234V12.169A1.244,1.244,0,0,0,23.7,10.936ZM22.641,23.275H18.413V13.4h4.228Z"
			transform="translate(-1.5 -6)"
			fill="#fff"
		/>
	</svg>
);

const UserIcon = () => (
	<svg
		className="svg"
		xmlns="http://www.w3.org/2000/svg"
		width="17"
		height="17"
		viewBox="0 0 24.558 24.558">
		<path
			id="Icon_awesome-user-alt"
			data-name="Icon awesome-user-alt"
			d="M12.279,13.814A6.907,6.907,0,1,0,5.372,6.907,6.909,6.909,0,0,0,12.279,13.814Zm6.14,1.535H15.776a8.35,8.35,0,0,1-6.993,0H6.14A6.139,6.139,0,0,0,0,21.489v.767a2.3,2.3,0,0,0,2.3,2.3H22.256a2.3,2.3,0,0,0,2.3-2.3v-.767A6.139,6.139,0,0,0,18.419,15.349Z"
			fill="#fff"
		/>
	</svg>
);

const StayLink = () => (
	<svg
		className="svg"
		xmlns="http://www.w3.org/2000/svg"
		width="17"
		height="17"
		viewBox="0 0 27.09 31.628">
		<path
			id="Icon_awesome-staylinked"
			data-name="Icon awesome-staylinked"
			d="M23.572,18.017l.166.166L13.267,7.878a.66.66,0,0,0-.85-.031L8.888,10.533a.489.489,0,0,0-.068.751l4.195,3.961a.678.678,0,0,0,.862.031l.006-.006a.678.678,0,0,1,.862.031l5.174,5.008a.488.488,0,0,1-.055.751l-5.741,4.558a.687.687,0,0,1-.875-.025L3.893,16.507a.668.668,0,0,0-.856-.031L.215,18.626a.49.49,0,0,0-.074.751L13,31.456a.811.811,0,0,0,1.066-.049l12.2-10.1a.487.487,0,0,0,.043-.751Zm3.357-5.137L13.963.154a.767.767,0,0,0-1,.068L.222,10.206a.486.486,0,0,0-.074.751l2.605,2.568L13.329,23.7a.7.7,0,0,0,.881.025L17.3,21.33l-.018-.018.474-.37a.48.48,0,0,0,.055-.751L14.3,16.84a.7.7,0,0,0-.875-.031l-.006.006a.7.7,0,0,1-.875-.025L6.714,11.136a.485.485,0,0,1,.068-.751l5.679-4.4a.669.669,0,0,1,.856.031l9.88,9.794a.687.687,0,0,0,.868.031l2.821-2.205a.483.483,0,0,0,.043-.751Z"
			transform="translate(0.002 -0.001)"
			fill="#fff"
		/>
	</svg>
);

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}
const items = [
	getItem("Tenant Management", "sub1", <UserIcon />, [
		getItem("Tenant Form", "1"),
		getItem("Tenant Table", "2"),
	]),
	getItem("Technician Management", "sub2", <UserIcon />, [
		getItem("Technician Form", "3"),
		getItem("Technician Table", "4"),
	]),
	// getItem("User Management", "sub3", <UserIcon />),
	// getItem("Integrations", "sub4", <StayLink />),
];
const SideBar = (props) => {
	console.log("side bar props", props);
	const { closeDrawer } = props;
	console.log(closeDrawer);
	const [current, setCurrent] = useState(null);
	const navigate = useNavigate();
	const onClick = (e) => {
		console.log("click ", e.key);
		setCurrent(e.key);
		switch (e.key) {
			case "1":
				navigate("/tenant-form");
				break;
			case "2":
				navigate("/tenant-table");
				break;
			case "3":
				navigate("/technician-form");
				break;
			case "4":
				navigate("/technician-table");
				break;
		}
		closeDrawer !== undefined ? closeDrawer() : null;
	};
	return (
		<div className="side-bg">
			<Menu
				className="custom-side-bar"
				theme={"dark"}
				onClick={onClick}
				style={{
					width: 256,
					backgroundColor: "#333333",
				}}
				// defaultOpenKeys={["sub1"]}
				selectedKeys={[current]}
				mode="inline"
				items={items}
			/>
		</div>
	);
};
export default SideBar;
