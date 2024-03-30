import { NavLink, Outlet } from 'react-router-dom';
import Button from '../components/ui/Button';

const Layout = () => {
	return (
		<div className="flex">
			<div className="flex min-h-screen flex-col border-[#D4D6E0] border-r p-8">
				<div className="mb-12">
					<img
						className="mb-5 drop-shadow-[0_8px_40px_rgba(255,197,41,0.25)]"
						src="/avatar.png"
						alt="User avatar"
					/>
					<div className="font-bold text-xl">Григорий Федоренко</div>
					<div className="text-[#9EA1B1] text-sm">gregory@gmail.com</div>
				</div>
				<div className="flex flex-col gap-8">
					<NavLink
						className={({ isActive }) =>
							`flex items-center gap-4 ${isActive ? 'text-orange' : ''}`
						}
						to="/"
					>
						<img src="/menu-icon.svg" alt="Menu icon" />
						Меню
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`flex items-center gap-4 ${isActive ? 'text-orange' : ''}`
						}
						to="/cart"
					>
						<img src="/cart-icon.svg" alt="Cart icon" />
						Корзина
					</NavLink>
				</div>
				<Button
					size="small"
					className="mt-auto flex h-[43px] w-[117px] items-center justify-center gap-[9px] rounded-[28px] bg-orange font-normal text-[15px] text-white leading-4 hover:bg-orange-dark"
				>
					<img src="/exit-icon.svg" alt="Exit button" />
					<span className="pt-[13px] pr-[14px] pb-[14px]">Выйти</span>
				</Button>
			</div>
			<div className="w-full px-16 py-10">
				<Outlet />
			</div>
		</div>
	);
};
export default Layout;
