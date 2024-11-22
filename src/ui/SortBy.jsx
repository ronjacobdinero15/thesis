import Select from './Select'
import { useURL } from '../hooks/useURL'

function SortBy({ options }) {
  const { updateURL, searchParams } = useURL()
  const sortBy = searchParams.get('sortBy') || ''

  const handleChange = e => {
    updateURL('sortBy', e.target.value)
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  )
}

export default SortBy
