import { useDispatch as dispatch } from 'react-redux'
import type { AppDispatch } from '../store'

// Use throughout your app instead of plain `useDispatch`
export const useDispatch: () => AppDispatch = dispatch
