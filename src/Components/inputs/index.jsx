import { TextField } from "@mui/material";

export const Inputs = (name,register,error) => {
  return (
    <>
      <TextField label={name}
        variant="outlined"
        fullWidth
        autoComplete="off"
        inputProps={{ style: { fontSize: 15 } }}
        InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
        // error={error}
      //  {...register}
       />

    </>
  );
};
