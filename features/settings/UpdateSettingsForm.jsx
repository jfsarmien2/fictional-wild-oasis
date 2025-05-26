import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { isLoading, error, settings = {} } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();
  const {
    min_booking_length,
    max_booking_length,
    max_guests_per_booking,
    breakfast_price,
  } = settings;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "min_booking_length")}
          defaultValue={min_booking_length}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "max_booking_length")}
          defaultValue={max_booking_length}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "max_guests_per_booking")}
          defaultValue={max_guests_per_booking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfast_price")}
          defaultValue={breakfast_price}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
