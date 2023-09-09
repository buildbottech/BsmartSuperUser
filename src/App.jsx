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
import AuthGuard from "./routeGuards/authGuard";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/Signup" element={<AuthGuard requireAuth={false} module_access={true}><Signup /></AuthGuard>} />
				<Route path="/Signin" element={<AuthGuard requireAuth={false} module_access={true}><Signin /></AuthGuard>} />
				<Route path="/forgot-password" element={<AuthGuard requireAuth={false} module_access={true}><ForgotPassword /></AuthGuard>} />
				<Route path="/" element={<AuthGuard requireAuth={true} module_access={true}><Layout /></AuthGuard>}>
					<Route path="tenant-form" element={<TenantForm />} />
					<Route path="tenant-table" element={<TenantTable />} />
					<Route path="technician-form" element={<TechnicianForm />} />
					<Route path="technician-table" element={<TechnicianTable />} />
				</Route>
				
			</Routes>
		</BrowserRouter>
	);
}

export default App;
