import {
  Wrapper,
  Label,
  Textfield,
  ValidationMessage,
} from "../styles/Input.styles";

export default function Input({ label, register, errors }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Textfield {...register} />
      {errors && <ValidationMessage>Pole Wymagane</ValidationMessage>}
    </Wrapper>
  );
}
