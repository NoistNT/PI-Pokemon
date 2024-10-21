import type { AppDispatch, RootState } from '@/redux/store'

import { useDispatch, useSelector } from 'react-redux'

export const fetchWithErrorHandling = async (
  url: string,
  options?: RequestInit
) => {
  const res = await fetch(url, options)
  const statusCode = res.status

  if (!res.ok) {
    throw new Error(`Request failed with status code ${statusCode}`)
  }

  return res.json() as Promise<unknown>
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useAppSelector = useSelector.withTypes<RootState>()
