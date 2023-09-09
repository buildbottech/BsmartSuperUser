import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/signup";
import Signin from "./pages/signin/signin";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import Layout from "./pages/Layout";
import TenantForm from "./components/TenantForm";
import TechnicianForm from "./components/TechnicianForm ";
import TenantTable from "./components/TenantTable";
import TechnicianTable from "./components/TechnicianTable ";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="tenant-form" element={<TenantForm />} />
					<Route path="tenant-table" element={<TenantTable />} />
					<Route path="technician-form" element={<TechnicianForm />} />
					<Route path="technician-table" element={<TechnicianTable />} />
				</Route>
				<Route path="/Signup" element={<Signup />} />
				<Route path="/Signin" element={<Signin />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
