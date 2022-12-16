import { Box } from "@mui/material";
import { Header } from "../../Components/header";
import { Widgets } from "../../Components/widget";
import { TreeView, TreeItem } from "@mui/lab";
import fakeDB from "../../Styles/utils/fakeDB";
import { AddButton } from "../../Components/button";
import { CreateWidgetModal } from "../../Components/modals/createWidget";

export const Dashboard = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <TreeView
        aria-label="file system navigator"
        sx={{ height: 240, flexGrow: 1, width: "90vw" }}
      >
        {fakeDB.map((el, index) => (
          <TreeItem
            key={`${el.id}`}
            nodeId={`${el.title.text}-${index}`}
            label={`${el.title.text}`}
          >
            <Widgets options={el} />
          </TreeItem>
        ))}
      </TreeView>
      <CreateWidgetModal/>
      {/* <AddButton/> */}
    </Box>
  );
};
