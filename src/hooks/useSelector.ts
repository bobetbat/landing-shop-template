import { TypedUseSelectorHook, useSelector as selector} from 'react-redux'
import type { RootState } from '../store'

// Use throughout your app instead of plain `useSelector`
export const useSelector: TypedUseSelectorHook<RootState> = selector
