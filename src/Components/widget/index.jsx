import { Box, FormControl, Stack, TextField } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FaEllipsisV } from "react-icons/fa";
import { Container } from "./styles";

export const Widgets = (options) => {
  return (
    <Box>
        <FaEllipsisV />
      <Container>
        <HighchartsReact highcharts={Highcharts} options={options.options} />
      </Container>
    </Box>
  );
};
