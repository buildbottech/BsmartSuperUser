import "./index.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { Button, Table } from "antd";
import Watch from "../../assets/watch.png";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { CiMenuKebab } from "react-icons/ci";
import { RxDotsVertical } from "react-icons/rx";
import TenantAddForm from "./tenantAddForm";
// import axios from "axios";

const TenantTable = () => {
	const Width = window.innerWidth;
	let array = [];
	let local_form_array = localStorage.getItem("local_form_array");
	if (local_form_array !== null) {
		array = JSON.parse(local_form_array);
	}
	// axios
	// 	.get("https://jsonplaceholder.typicode.com/posts")
	// 	.then((res) => console.log("getting data", res));

	const [grid_view, setGrid_view] = useState(true);
	const [tenantForm, setTenantForm] = useState(false);

	function ToggleButton() {
		const handleClick = () => {
			setGrid_view(!grid_view);
		};

		return (
			<div
				className={`toggle-button-container ${grid_view ? "grid" : "list"}`}
				onClick={handleClick}>
				<Button className={`toggle-button ${grid_view ? "" : "selected"}`}>
					List
				</Button>
				<Button className={`toggle-button ${grid_view ? "selected" : ""}`}>
					Grid
				</Button>
			</div>
		);
	}

	function GridView() {
		return (
			<ul className="items-list">
				{array.map((obj) => {
					const { smartwatch, version, status } = obj;
					return (
						<li key={uuidv4()} className="item-card">
							{status === "active" ? (
								<Button
									className="item-card-btn"
									style={{
										backgroundColor: "#26b8e0",
										color: "white",
										border: "none",
									}}>
									Active
								</Button>
							) : (
								<Button
									className="item-card-btn"
									style={{
										backgroundColor: "#F67463",
										color: "white",
										border: "none",
									}}>
									Deactive
								</Button>
							)}
							<div className="img-div">
								<img className="watch-img" src={Watch} />
							</div>
							<div className="bottom-div">
								<div className="bottom-inner-div">
									<img
										className="profile"
										src="https://res.cloudinary.com/dlvki23cq/image/upload/v1684773691/Personal/Photo_from_sudhakar_ufd5kt.jpg"
									/>
									<div className="desc-cont">
										<h3 className="desc-head">{smartwatch}</h3>
										<p className="desc-para">version {version}</p>
									</div>
								</div>
								<CiMenuKebab />
							</div>
						</li>
					);
				})}
			</ul>
		);
	}

	function ListView() {
		const [currentPage, setCurrentPage] = useState(1);
		const data = array;
		console.log(window.innerWidth);
		const columns = [
			{
				title: "",
				dataIndex: "actions",
				key: "actions",
				align: "right",
				render: (_, record) => {
					return Width > 768 ? (
						<RxDotsVertical />
					) : (
						<div
							className={`status-span ${
								record.status === "active" ? "span-active" : "span-deactive"
							}`}></div>
					);
				},
			},
			{
				title: "Tenant Name",
				dataIndex: "tenantName",
				key: "tenantName",
				align: "left",
			},
			{ title: "Role", dataIndex: "role", key: "role", align: "left" },
			{
				title: "Organisation",
				dataIndex: "organisation",
				key: "organisation",
				align: "left",
			},
			{
				title: "Location",
				dataIndex: "location",
				key: "location",
				align: "left",
			},
			Width > 768
				? {
						title: "",
						dataIndex: "status",
						key: "actions",
						align: "left",
						render: (_, record) => {
							let active = false;
							console.log("record", record);
							if (record.status === "active") {
								active = true;
							}
							let type_text = active ? "active" : "deactive";
							return (
								<Button
									className={`table-button ${type_text}`}
									onClick={() => null}>
									{active ? "Active" : "Deactive"}
								</Button>
							);
						},
				  }
				: {},
			// Add more columns here...
		];

		const rowClassName = (record, index) => {
			if (index % 2 === 0) {
				return "even-row";
			}
			return "odd-row";
		};

		const pageSize = 10;
		const totalRows = data.length;
		const totalPages = Math.ceil(totalRows / pageSize);

		const startRow = (currentPage - 1) * pageSize + 1;
		const endRow = Math.min(currentPage * pageSize, totalRows);
		const showingText = ` ${startRow}-${endRow}`;

		// const handleTableChange = (pagination) => {
		// 	setCurrentPage(pagination.current);
		// };

		const goToPreviousPage = () => {
			setCurrentPage((prevPage) => prevPage - 1);
		};

		const goToNextPage = () => {
			setCurrentPage((prevPage) => prevPage + 1);
		};

		const renderFooter = () => (
			<div style={{ textAlign: "right" }}>
				{"Showing"}
				<button
					onClick={goToPreviousPage}
					disabled={currentPage === 1}
					style={{ marginRight: 8 }}
					className="arrow-btn">
					<CaretLeftFilled />
				</button>
				{showingText}
				<button
					onClick={goToNextPage}
					disabled={currentPage === totalPages}
					style={{ marginLeft: 8 }}
					className="arrow-btn">
					<CaretRightFilled />
				</button>
			</div>
		);

		return (
			<Table
				columns={columns}
				dataSource={data.slice(
					(currentPage - 1) * pageSize,
					currentPage * pageSize
				)}
				pagination={false}
				rowClassName={rowClassName}
				bordered={false}
				showHeader
				footer={renderFooter}
				// onChange={handleTableChange}
				style={{ border: "1px solid #f0f0f0" }}
				className="custom-table"
			/>
		);
	}

	return (
		<div className="discover-bg">
			<div className="head-cont">
				{/* {grid_view ? (
					<h3 className="discover-head">Discovered</h3>
				) : (
					<div></div>
				)}
				<ToggleButton /> */}

				<Button
					style={{
						fontSize: 12,
						backgroundColor: "#26b8e0",
						color: "white",
						marginRight: 10,
					}}
					onClick={() => {
						setTenantForm(true);
					}}>
					Add Tenant
				</Button>
			</div>
			{/* {grid_view ? <GridView /> : <ListView />} */}
			{tenantForm ? (
				<TenantAddForm setTenantForm={setTenantForm} />
			) : (
				<ListView />
			)}
		</div>
	);
};
export default TenantTable;
