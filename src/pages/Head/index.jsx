import { Row, Col, Avatar, Drawer, Button } from "antd";
import { useState } from "react";
import { MenuOutlined, CloseOutlined,LogoutOutlined } from "@ant-design/icons";
import BSmartLogo from "../../assets/BSmartLogo.png";
import SideBar from "../SideBar";
import "./index.css";
import Cookies from "js-cookie";

const HamburgerMenu = () => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const closeDrawer = () => {
		setVisible(false);
	};
	

	return (
		<div className="hamburger-div">
			<Button type="text" onClick={showDrawer}>
				<MenuOutlined style={{ color: "white", fontSize: "20px" }} />
			</Button>
			<Drawer
				placement="right"
				closable={false}
				onClose={closeDrawer}
				visible={visible}
				width="70vw">
				{/* Add your navbar content here */}
				<div className="drawer-head-div">
					<div className="drawer-profile-div">
						<Profile />
						<p className="drawer-profile-name">Sudhakar Pothamsetti</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="7"
							height="7"
							className=""
							viewBox="0 0 15 7.5">
							<path
								id="Icon_material-arrow-drop-down"
								data-name="Icon material-arrow-drop-down"
								d="M10.5,15,18,22.5,25.5,15Z"
								transform="translate(-10.5 -15)"
								fill="#fff"
							/>
						</svg>
					</div>
					<span onClick={closeDrawer} className="drawer-button">
						X
					</span>
				</div>
				
				<SideBar closeDrawer={closeDrawer} />
			</Drawer>
		</div>
	);
};

const Profile = () => (
	<Avatar
		size={{
			xs: 30,
			sm: 30,
			md: 35,
			lg: 40,
			xl: 40,
			xxl: 50,
		}}
		src="https://res.cloudinary.com/dlvki23cq/image/upload/v1684773691/Personal/Photo_from_sudhakar_ufd5kt.jpg"
	/>
);
const Head = () => {
	const handleLogout = () => {
		Cookies.remove("bsmart_jwtToken");
		window.location.reload();
	};
	return (
		<div className="head-card">
			<Row>
				<Col xs={6} md={4}>
					<img className="logo-img" src={BSmartLogo} />
				</Col>

				<Col xs={18} md={20}>
					<div className="head-right-div">
						<div className="avatar-cont">
							<Profile />
						</div>
						<p className="profile-name">Sudhakar Pothamsetti</p>
						<Button type="text" onClick={handleLogout}>
					<LogoutOutlined style={{ color: "white", fontSize: "20px" }} />
				</Button>
					</div>

					<HamburgerMenu />
					
				</Col>
			</Row>
		</div>
	);
};

export default Head;
