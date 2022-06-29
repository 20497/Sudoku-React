import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, RadioWrapper, SubmitButton } from "../styles/UserForm.styles";
import { GameContext } from "../context/GameContext";
import { appRoutes } from "../appRoutes";
import Input from "./Input";
import Radio from "./Radio";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const { gameDispatch } = React.useContext(GameContext);

  const addUserToGame = ({ playerName, dificultLevel }) => {
    gameDispatch({
      type: "ADD_GAME_SETTINGS",
      playerName: playerName,
      dificultLevel: dificultLevel,
    });
    navigate(appRoutes.GAME);
  };

  return (
    <Form onSubmit={handleSubmit(addUserToGame)}>
      <Input
        label="Name"
        register={register("playerName", { required: true })}
        errors={errors.playerName}
      />
      <RadioWrapper>
        <Radio
          name="dificultLevel"
          value="easy"
          register={register("dificultLevel", { required: true })}
          errors={errors.dificultLevel}
        />
        <Radio
          name="dificultLevel"
          value="medium"
          register={register("dificultLevel", { required: true })}
          errors={errors.dificultLevel}
        />
        <Radio
          name="dificultLevel"
          value="hard"
          register={register("dificultLevel", { required: true })}
          errors={errors.dificultLevel}
        />
        <Radio
          name="dificultLevel"
          value="random"
          register={register("dificultLevel", { required: true })}
          errors={errors.dificultLevel}
        />
      </RadioWrapper>
      <SubmitButton type="submit" value="Start Sudoku" />
    </Form>
  );
}
