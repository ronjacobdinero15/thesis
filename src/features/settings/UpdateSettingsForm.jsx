import Form from '../../ui/Form'
import Input from '../../ui/Input'
import FormRow from '../../ui/FormRow'
import Spinner from '../../ui/Spinner'
import { useSettings } from './useSettings'
import { useUpdateSetting } from './useUpdateSetting'

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings()

  const { isUpdating, updateSetting } = useUpdateSetting()

  if (isLoading) return <Spinner />

  function handleUpdate(e) {
    const { id, value, defaultValue } = e.target

    if (!id || !value || defaultValue === value) return

    // In this part we did [id] so the input id would be assign as the key or the column in supabase
    // But if we have id: value then the name of the key is literally id
    updateSetting({ [id]: value })
    // Assign as the new defaultValue
    e.target.defaultValue = value
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={handleUpdate}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={handleUpdate}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={handleUpdate}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={handleUpdate}
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
