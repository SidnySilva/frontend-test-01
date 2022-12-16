import { Box, Button, Modal, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import { AddButton } from "../../button";
import { FaPlus } from "react-icons/fa";

export const CreateWidgetModal = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <Button
        onClick={toggleDrawer("bottom", true)}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 50,
          background: "lightGray",
          borderRadius: "50%",
          width: 70,
          height: 70,
          ":hover": { background: "gray" },
        }}
      >
        <FaPlus
          style={{
            width: "30px",
            height: "30px",
            color: "white",
            fontWeight: "200",
          }}
        />
      </Button>
      <SwipeableDrawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        <input />
        <input />
        <input />
        <input />
      </SwipeableDrawer>
    </>
  );
};
