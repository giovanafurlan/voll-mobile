import { FormControl, ITextProps, Input } from "native-base";
import React from "react";

interface EntradaTextoProps extends ITextProps {
  label: string;
  placeholder: string;
}

export function EntradaTexto({ label, placeholder }: EntradaTextoProps) {
  return (
    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
      />
    </FormControl>
  );
}
