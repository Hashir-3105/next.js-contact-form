import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
  FieldTitle,
} from "../ui/field";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function FormRadio({ name, label, options }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel required>{label}</FieldLabel>
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {options.map((option) => {
              return (
                <FieldLabel key={option.value} htmlFor={option.value}>
                  <Field orientation="horizontal">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <FieldContent>
                      <FieldTitle>{option.label}</FieldTitle>
                    </FieldContent>
                  </Field>
                </FieldLabel>
              );
            })}
          </RadioGroup>

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
