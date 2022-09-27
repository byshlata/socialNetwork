import { useDispatch } from 'react-redux';

import { AppDispatch } from 'state/store';

export const useAppDispatch = (): Function => useDispatch<AppDispatch>();
