import axios, { AxiosError } from 'axios';
import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Heading from '../../components/ui/Heading';
import Input from '../../components/ui/Input';
import { API_PREFIX } from '../../helpers/API';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addJwt } from '../../store/userSlice';
import type { LoginResponse } from '../../types/auth.type';

type LoginForm = {
	email: { value: string };
	password: { value: string };
};

const Login = () => {
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const onSubmitHandler = async (event: FormEvent) => {
		event.preventDefault();
		setError(null);
		const target = event.target as typeof event.target & LoginForm;
		const { email, password } = target;
		await sendLoginData(email.value, password.value);
	};

	const sendLoginData = async (email: string, password: string) => {
		try {
			const { data } = await axios.post<LoginResponse>(
				`${API_PREFIX}/auth/login`,
				{
					email,
					password,
				},
			);
			dispatch(addJwt(data.access_token));
			navigate('/');
		} catch (error) {
			console.log(error);

			if (error instanceof AxiosError) {
				setError(error.response?.data);
			}
		}
	};

	return (
		<div className="flex w-full max-w-lg flex-col gap-[30px] p-5">
			<Heading>Вход</Heading>
			{error && (
				<div className="w-fit border-2 border-gray border-dotted bg-[#ffc529] p-4">
					{error}
				</div>
			)}
			<form className="flex flex-col gap-[30px]" onSubmit={onSubmitHandler}>
				<div className="flex flex-col gap-[5px]">
					<label className="text-[17px] text-gray" htmlFor="email">
						Ваш email
					</label>
					<Input id="email" placeholder="Email" name="email" />
				</div>
				<div className="flex flex-col gap-[5px]">
					<label className="text-[17px] text-gray" htmlFor="password">
						Ваш пароль
					</label>
					<Input
						id="password"
						type="password"
						placeholder="Пароль"
						name="password"
					/>
				</div>
				<div className="mt-[74px] text-center">
					<Button size="big">Вход</Button>
				</div>
			</form>
			<div className="flex flex-col items-center">
				<div className="font-semibold text-sm">Нет аккаунта?</div>
				<Link to="/auth/register" className="font-semibold text-orange">
					Зарегистрироваться
				</Link>
			</div>
		</div>
	);
};
export default Login;
