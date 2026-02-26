import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export default function FormInput({ name, label, type = "text", ...props }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel required>{label}</FieldLabel>
          <Input
            type={type}
            {...field}
            {...props}
            aria-invalid={fieldState.invalid}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
