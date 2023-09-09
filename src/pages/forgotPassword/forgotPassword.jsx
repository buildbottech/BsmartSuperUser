import { Button, Checkbox, Form, Input, message } from "antd";
import "./forgotPassword.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
	const navigate = useNavigate();

	const onFinish = async (values) => {
		console.log("Success:", values);
		const { email } = values;

		try {
			const response = await sendPasswordResetEmail(auth, email);
			message.success("Password reset email sent. Please check your mail.");
		} catch (err) {
			console.log("forgot password err", err);
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
				<h1>Forgot Password</h1>
				<Form.Item>
					<p>Enter your email to send reset link:</p>
				</Form.Item>
				<Form.Item
					name="email"
					rules={[{ required: true, message: "Please input your email!" }]}>
					<Input type="email" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Send link
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default ForgotPassword;
