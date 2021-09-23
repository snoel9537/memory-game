import { TypedUseSelectorHook, useDispatch as useLibDispatch, useSelector as useLibSelector } from 'react-redux';
import type { RootState, AppDispatch } from '.';

export const useDispatch = () => useLibDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useLibSelector;
