import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';

// Использовать во всем приложении вместо обычного `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;
