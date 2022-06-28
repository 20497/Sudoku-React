import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, SubmitButton } from "../styles/UserForm.styles";
import { GameContext } from "../context/GameContext";
import { appRoutes } from "../appRoutes";
import Input from "./Input";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const { gameDispatch } = React.useContext(GameContext);

  const addUserToGame = ({ playerName }) => {
    console.log(playerName);
    gameDispatch({ type: "ADD_PLAYER", playerName: playerName });
    navigate(appRoutes.GAME);
  };

  return (
    <Form onSubmit={handleSubmit(addUserToGame)}>
      <Input
        label="Name"
        register={register("playerName", { required: true })}
        errors={errors.playerName}
      />
      <SubmitButton type="submit" value="Start Sudoku" />
    </Form>
  );
}
