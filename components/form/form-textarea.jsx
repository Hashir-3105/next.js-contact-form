import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { InputGroup, InputGroupTextarea } from "../ui/input-group";

export default function FormTextarea({ name, label }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name} required>
            {label}
          </FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              {...field}
              id={name}
              rows={6}
              className="min-h-24 resize-none"
              aria-invalid={fieldState.invalid}
            />
          </InputGroup>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
