import { Box } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { EditWidgetModal } from "../modals/editWidget";

export const Widgets = (data) => {
  return (
    <Box >
      <EditWidgetModal id={data.options.id}/>
        <HighchartsReact highcharts={Highcharts} options={data.options} />
    </Box>
  );
};
