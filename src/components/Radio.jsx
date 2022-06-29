import {
  Wrapper,
  RadioButton,
  Name,
  ValidationRadioMessage,
} from "../styles/Radio.styles";

export default function Radio({ value, name, register, errors }) {
  return (
    <Wrapper>
      <RadioButton type="radio" value={value} name={name} {...register} />
      <Name>{value}</Name>
      {errors && (
        <ValidationRadioMessage>Poziom Wymagany!</ValidationRadioMessage>
      )}
    </Wrapper>
  );
}
