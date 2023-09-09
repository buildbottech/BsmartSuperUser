import React from "react";
import { Form, Input, Button, Row, Col, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Link } from "react-router-dom";
// import axios from "axios";
import { message } from "antd";
import "./index.css";

const { Option } = Select;

const TenantForm = () => {
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
					<Form.Item
						label="Name"
						name="tenantName"
						labelAlign="left"
						labelCol={{ span: 10 }}
						rules={[{ required: true }]}>
						<Input />
					</Form.Item>

					<Form.Item
						label="Total Technicians"
						name="totalTechnicians"
						labelAlign="left"
						labelCol={{ span: 10 }}
						rules={[{ required: true }]}>
						<Input type="number" />
					</Form.Item>

					<Form.Item
						label="Last Invoice Date"
						name="lastInvoiceDate"
						labelAlign="left"
						labelCol={{ span: 10 }}
						rules={[{ required: true }]}>
						<Input type="date" />
					</Form.Item>

					<Form.Item
						label="Last Paid Date"
						name="lastPaidDate"
						labelAlign="left"
						labelCol={{ span: 10 }}
						rules={[{ validator: validateMobileNumber }]}>
						<Input type="date" />
					</Form.Item>

					<Form.Item
						label="Unpaid Invoices Count"
						name="unpaidInvoicesCount"
						labelAlign="left"
						labelCol={{ span: 10 }}
						rules={[{ validator: validateMobileNumber }]}>
						<Input type="number" />
					</Form.Item>

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

export default TenantForm;
