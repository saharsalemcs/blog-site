import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: FieldError;
  children: ReactNode;
};

export default function FormField({
  label,
  htmlFor,
  error,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm text-ink">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-700">{error.message}</p>}
    </div>
  );
}
