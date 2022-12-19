import * as yup from "yup";
import { useState } from "react";
import { Button, Container, SwipeableDrawer, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createWidgetThunk } from "../../../Store/modules/widgets/thunk";
import { AddButton } from "../../button/addButton";

export const CreateWidgetModal = () => {
  const [state, setState] = useState(false); //Boolean useState used at toogleDrawer function
  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => { //open or close widget creator box
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Company name is required!"),
    graphName: yup.string().required("Graph name is required!"),
    data: yup
      .string()
      .required("Insert your values separeted by spaces, comma or period.")
      .matches("^[0-9*#+ ,.]+$", "Only numbers"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const stringFormater = (stringValue) =>{ //Format strings to Title Format
    return stringValue.split(" ")
    .map((el) =>
      typeof el[0] !== Number
        ? `${el[0].toUpperCase()}${el.substring(1).toLowerCase()}`
        : el
    )
    .join(" ");
  }
  const onSubmitFunction = (data) => {
    const nameFormated = stringFormater(data.name)
    const graphNameFormated = stringFormater(data.graphName)

    const dataFormater = data.data
      .split(/[^a-zA-Z0-9]+/g)
      .map((el) => Number(el));

    const dataFormated = {
      name: nameFormated,
      graphName: graphNameFormated,
      data: dataFormater,
    };
    dispatch(createWidgetThunk(dataFormated));
  };

  return (
    <>
      <AddButton onClick={toggleDrawer("bottom", true)} />

      <SwipeableDrawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Container
            sx={{ display: "flex", flexDirection: "column", gap: 3, p: 5 }}
          >
            <h2 style={{ fontWeight: 700, fontSize: 32 }}>
              Create your widget:
            </h2>
            <h4>
              If you name an existing company, it will add a new graph at it.
            </h4>
            <TextField
              label="Company name"
              variant="outlined"
              fullWidth
              autoComplete="off"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              error={errors.name?.message}
              helperText={errors.name?.message}
              {...register("name")}
            />
            <TextField
              label="Name your graph"
              variant="outlined"
              fullWidth
              autoComplete="off"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              error={errors.graphName?.message}
              helperText={errors.graphName?.message}
              {...register("graphName")}
            />
            <TextField
              label="Insert your data"
              variant="outlined"
              fullWidth
              autoComplete="off"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              error={errors.data?.message}
              helperText={errors.data?.message}
              {...register("data")}
            />
            <Button type="submit">Create</Button>
          </Container>
        </form>
      </SwipeableDrawer>
    </>
  );
};
