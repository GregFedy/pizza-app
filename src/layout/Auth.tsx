import { Outlet } from 'react-router-dom';

const Auth = () => {
	return (
		<div className="flex min-h-screen">
			<div className="flex flex-1 items-center justify-center">
				<img src="/logo.png" alt="Logo" />
			</div>
			<div className="flex flex-1 items-center justify-center border-l border-l-[#D4D6E0]">
				<Outlet />
			</div>
		</div>
	);
};
export default Auth;
