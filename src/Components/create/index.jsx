import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createWidgetThunk,
  getWidgetThunk,
} from "../../Store/modules/widgets/thunk";
import { Inputs } from "../inputs";
import { Box, Container, FormControl, Stack, TextField } from "@mui/material";

export const Create = () =>{

    const dispatch = useDispatch();

    const formSchema = yup.object().shape({
      name: yup.string().required("Um nome é obrigatório"),
      teste: yup.string().notRequired(),
      teste2: yup.string().notRequired(),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) });
  
    const onSubmitFunction = (data) => {
      console.log(formSchema._nodes);
      dispatch(createWidgetThunk(data));
    };
    return (<>
            {/* <Stack spacing={2}>
        <Container sx={{display:"flex"}} >
          <p>Name</p>
          <button><FaEllipsisV/></button>

        </Container>
      </Stack> */}
      {/* <form onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          label="name"
          variant="outlined"
          fullWidth
          autoComplete="off"
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
          error={!!errors.name?.message}
          {...register("name")}
        />
        <TextField
          label="name"
          variant="outlined"
          fullWidth
          autoComplete="off"
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
          error={!!errors.name?.message}
          {...register("name")}
        />
        <TextField
          label="name"
          variant="outlined"
          fullWidth
          autoComplete="off"
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
          error={!!errors.name?.message}
          {...register("name")}
        />
        <TextField
          label="name"
          variant="outlined"
          fullWidth
          autoComplete="off"
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
          error={!!errors.name?.message}
          {...register("name")}
        />
       <input type="text" placeholder="Nome" {...register("name")} /> 

        <input
          type="text"
          name="teste"
          placeholder="teste"
          {...register("teste")}
        />
        <input
          type="text"
          name="teste"
          placeholder="teste"
          {...register("teste2")}
        />
        <button type="submit">TESTANDO</button>
      </form> */}</>)
}