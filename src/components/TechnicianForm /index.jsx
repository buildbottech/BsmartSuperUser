import React from "react";
import { Form, Input, Button, Row, Col, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Link } from "react-router-dom";
// import axios from "axios";
import { message } from "antd";
import "./index.css";

const { Option } = Select;

const TechnicianForm = () => {
	let local_form_array = [];
	let dummy_arr = localStorage.getItem("local_form_array");
	if (dummy_arr !== null) {
		local_form_array = JSON.parse(dummy_arr);
	}
	const [form] = Form.useForm();
	const onFinish = (values) => {
		local_form_array.push(values);
		localStorage.setItem("local_form_array", JSON.stringify(local_form_array));
		// axios
		// 	.post("http://localhost:3001/api/data", { name: "John Doe" })
		// 	.then((response) => {
		// 		// Handle the response data
		// 		console.log(response.data);
		// 	})
		// 	.catch((error) => {
		// 		// Handle any errors
		// 		console.error(error);
		// 	});

		form.resetFields();
		message.success("Added successfully!");
	};

	const validateMobileNumber = (_, value) => {
		const numberPattern = /^\d+$/;

		if (!numberPattern.test(value)) {
			return Promise.reject("Please enter only numbers");
		}

		if (value.length !== 10) {
			return Promise.reject("Please enter a 10-digit mobile number");
		}

		return Promise.resolve();
	};

	return (
		<div className="form-main-bg">
			<div
				className="form-bg"
				style={{ background: "#333333", padding: "0px" }}>
				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<Link to="/">
						<Button
							type="text"
							shape="circle"
							style={{ color: "#fff", fontSize: "12px" }}>
							X
						</Button>
					</Link>
				</div>

				<Form
					onFinish={onFinish}
					form={form}
					style={{ background: "#fff", padding: "20px" }}>
					<Row gutter={[16, 32]}>
						<Col span={12}>
							<div style={{ marginBottom: "8px" }}>Smart Watch</div>
							<Form.Item name="smartwatch" rules={[{ required: true }]}>
								<Select>
									<Option value="Samsung Galaxy">Samsung Galaxy</Option>
									<Option value="Apple Watch">Apple Watch</Option>
									<Option value="Fitbit Versa">Fitbit Versa</Option>
								</Select>
							</Form.Item>

							<div style={{ marginBottom: "8px" }}>Version</div>
							<Form.Item name="version" rules={[{ required: true }]}>
								<Select>
									<Option value="1.2.1">1.2.1</Option>
									<Option value="1.2.2">1.2.2</Option>
									<Option value="1.2.3">1.2.3</Option>
								</Select>
							</Form.Item>

							<div style={{ marginBottom: "8px" }}>Location / Region</div>
							<Form.Item name="location" rules={[{ required: true }]}>
								<Input />
							</Form.Item>

							<div style={{ marginBottom: "8px" }}>Mobile Number</div>
							<Form.Item
								name="mobilenumber"
								rules={[{ validator: validateMobileNumber }]}>
								<Input type="number" />
							</Form.Item>
						</Col>

						<Col span={12}>
							<div style={{ marginBottom: "8px" }}>Status</div>
							<Form.Item name="status" rules={[{ required: true }]}>
								<Select>
									<Option value="active">Active</Option>
									<Option value="deactive">Deactive</Option>
								</Select>
							</Form.Item>

							<div style={{ marginBottom: "8px" }}>Assigned To</div>
							<Form.Item name="assignedto" rules={[{ required: true }]}>
								<Input />
							</Form.Item>

							<div style={{ marginBottom: "8px" }}>Assigned By</div>
							<Form.Item name="asignedby" rules={[{ required: true }]}>
								<Input />
							</Form.Item>

							<div style={{ marginBottom: "8px" }}>Model</div>
							<Form.Item name="model" rules={[{ required: true }]}>
								{/* <Button style={{ width: "100%" }} disabled>
									Esmart
								</Button> */}
								<Input />
							</Form.Item>
						</Col>
					</Row>

					<Row justify="center">
						<Col>
							<Button type="primary" htmlType="submit">
								Save
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</div>
	);
};

export default TechnicianForm;
