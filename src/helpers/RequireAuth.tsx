import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';

const RequireAuth = ({ children }: { children: ReactNode }) => {
	const jwt = useAppSelector((state) => state.users.jwt);

	if (!jwt) {
		return <Navigate to="/auth/login" replace />;
	}
	return children;
};

export default RequireAuth;
