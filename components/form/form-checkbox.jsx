import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError } from "../ui/field";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export default function FormCheckbox({ name, label, ...props }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <Field orientation="horizontal">
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
              {...props}
            />
            <Label htmlFor={name}>{label}</Label>
          </Field>

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
