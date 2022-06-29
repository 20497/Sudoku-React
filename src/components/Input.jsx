import {
  Wrapper,
  Label,
  Textfield,
  ValidationInputMessage,
} from "../styles/Input.styles";

export default function Input({ label, register, errors }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Textfield {...register} />
      {errors && <ValidationInputMessage>Pole Wymagane</ValidationInputMessage>}
    </Wrapper>
  );
}
