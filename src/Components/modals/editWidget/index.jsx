import * as yup from "yup";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  SwipeableDrawer,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  deleteWidgetThunk,
  getWidgetThunk,
  updateWidgetThunk,
} from "../../../Store/modules/widgets/thunk";
import { EditButton } from "../../button/editButton";

export const EditWidgetModal = ({ id }) => {
  const [state, setState] = useState(false); //Boolean useState used at toogleDrawer function
  const [findedGraph, setFindedGraph] = useState(); //It takes the clicked object
  const [selectedGraph, setSelectedGraph] = useState(); //It select the specific graphic name in a widget

  const dispatch = useDispatch();
  const widget = useSelector((state) => state.widgetReducer); //Array of widgets

  useEffect(() => {
    dispatch(getWidgetThunk());
  }, [dispatch]);

  useEffect(() => {
    setFindedGraph(widget.find((el) => el.id === id)); // sets the clicked widget
  }, [widget, id]);

  const toggleDrawer = (anchor, open) => (event) => {
    //open or close widget editor box
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const formSchema = yup.object().shape(
    {
      name: yup.string().notRequired(),
      graphName: yup
        .string()
        .ensure()
        .when("data", {
          is: (data) => data,
          then: yup.string().required("Select a graph"),
        }),
      data: yup
        .string()
        .ensure()
        .when("graphName", {
          is: (graphName) => !graphName,
          then: yup
            .string()
            .required("Select a graph before try to edit")
            .matches("^[0-9*#+ ,.]+$", "Only numbers"),
        }),
    },
    [["graphName", "data"]]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    const nameFormater = data.name
      ?.split(" ")
      .map((el) => `${el[0]?.toUpperCase()}${el?.substring(1).toLowerCase()}`)
      .join(" ");

    const dataFormated = {
      name: data.name ? nameFormater : "",
      graphName: data.graphName,
      data: data.data
        ? data.data
            .trim()
            .split(/[^a-zA-Z0-9]+/g)
            .map((el) => Number(el))
        : null,
    };

    dispatch(updateWidgetThunk(id, dataFormated));
  };

  return (
    <>
      <EditButton onClick={toggleDrawer("right", true)} />

      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              width: ['90vw','70vw',800],
              gap: 3,
              p: 5,
            }}
          >
            <h2>Edit your widget</h2>
            <TextField
              label={findedGraph && findedGraph.title.text}
              variant="outlined"
              fullWidth
              autoComplete="off"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              error={errors.name?.message}
              helperText={errors.name?.message}
              {...register("name")}
            />
            <InputLabel htmlFor="graph-schemas">Select a graph</InputLabel>
            <Select
              id="graph-schemas"
              inputProps={{
                inputRef: (ref) => {
                  if (!ref) return;
                },
              }}
              error={errors.graphName?.message}
              helperText={errors.graphName?.message}
              {...register("graphName")}
            >
              {findedGraph &&
                findedGraph.series.map((el, index) => (
                  <MenuItem
                    key={index}
                    value={el.name}
                    onClick={() => setSelectedGraph(el.name)}
                  >
                    {el.name}
                  </MenuItem>
                ))}
            </Select>

            <TextField
              label={`${
                selectedGraph
                  ? "Actual data"
                  : "Select a graph" /*If there is a graph selected, it will change.*/
              }: ${
                findedGraph &&
                findedGraph.series.map((el) =>
                  el.name === selectedGraph ? el.data : ""
                )
              }`}
              variant="outlined"
              fullWidth
              autoComplete="off"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              error={errors.data?.message}
              helperText={errors.data?.message}
              {...register("data")}
            />
            <Button type="submit">Edit</Button>
            <Button
              onClick={(e) => {
                toggleDrawer("right", false)(e);
                dispatch(deleteWidgetThunk(id));
              }}
            >
              Delete
            </Button>
          </Container>
        </form>
      </SwipeableDrawer>
    </>
  );
};
