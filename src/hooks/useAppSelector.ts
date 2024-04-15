import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

// Использовать во всем приложении вместо обычного `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
