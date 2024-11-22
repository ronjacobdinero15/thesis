import { useSearchParams } from 'react-router-dom'

export function useURL() {
  const [searchParams, setSearchParams] = useSearchParams()

  const updateURL = (key, value) => {
    searchParams.set(key, value)
    setSearchParams(searchParams)
  }

  return { updateURL, searchParams }
}
