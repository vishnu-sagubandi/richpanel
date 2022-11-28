import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Payment from './components/Payment';
import PlanCard from './components/PlanCard';
import PlanSelection from './components/PlanSelection';

import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
		<ToastContainer />
		<Router>
		<AuthProvider>
			<Routes>
				<Route
					exact
					path='/plans'
					element={<PrivateRoute><PlanSelection /></PrivateRoute>}
				/>
				<Route
					exact
					path='/payment'
					element={<PrivateRoute><Payment /></PrivateRoute>}
				/>
				<Route
					exact
					path='/currentplan'
					element={<PrivateRoute><PlanCard /></PrivateRoute>}
				/>
				<Route
					exact
					path='/register'
					element={<Register />}
				/>
				<Route
					exact
					path='/login'
					element={<Login />}
				/>
				
			</Routes>
		</AuthProvider>
		</Router>
		</>
	);
}

export default App;
