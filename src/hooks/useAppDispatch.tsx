import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/api/Store';

export const useAppDispatch = () => useDispatch<AppDispatch>();