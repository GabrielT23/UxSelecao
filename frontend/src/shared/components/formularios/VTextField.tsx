import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "@unform/core";
import { useEffect, useState } from "react";

type VTextFieldProps = TextFieldProps & {
  name: string;
  mask?: "cpf" | "telefone" | "cep";
};

export const VTextField: React.FC<VTextFieldProps> = ({ name, mask, ...rest }) => {
  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);
  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  const applyMask = (inputValue: string, selectedMask: "cpf" | "telefone" | "cep" | "none") => {
    switch (selectedMask) {
      case "cpf":
        // Máscara de CPF: XXX.XXX.XXX-XX
        return inputValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
      case "telefone":
        // Máscara de telefone: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
        return inputValue.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      case "cep":
        // Máscara de CEP: XXXXX-XXX
        return inputValue.replace(/^(\d{5})(\d{3})$/, '$1-$2');
      default:
        return inputValue;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const maskedValue = applyMask(inputValue, mask || "none");
    setValue(maskedValue);
  };

  return (
    <TextField
      {...rest}
      value={value}
      error={!!error}
      helperText={error}
      onKeyDown={() => (error ? clearError() : undefined)}
      onChange={handleChange}
    />
  );
};