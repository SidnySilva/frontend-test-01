import { Box, TextField } from "@mui/material";
import { margin } from "@mui/system";
import logo from "../../Assets/delfos_Intelligent_maintenance.png";
import { Img } from "./styles";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        height: 100,
        border: "1px solid lightgray",
      }}
    >
      <Img src={logo} alt="Delfos logo" />
      <TextField sx={{ marginRight: 2, width: 500 }} label="Search..." />
    </Box>
  );
};
