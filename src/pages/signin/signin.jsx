import { Button, Checkbox, Form, Input } from "antd";
import "./signin.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
	const navigate = useNavigate();

	const onFinish = async (values) => {
		console.log("Success:", values);
		const { email, password } = values;

		try {
			const auth = getAuth();

			const response = await signInWithEmailAndPassword(auth, email, password);

			navigate("/");
		} catch (err) {
			console.log("signin err", err);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="signup-bg">
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off">
				<h1>Signin</h1>
				<Form.Item
					label="Email"
					name="email"
					rules={[{ required: true, message: "Please input your email!" }]}>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name="remember"
					valuePropName="checked"
					wrapperCol={{ offset: 8, span: 16 }}>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Signin;
