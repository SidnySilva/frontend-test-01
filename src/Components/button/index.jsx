import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createWidgetThunk,
  getWidgetThunk,
} from "../../Store/modules/widgets/thunk";
import { FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";
export const AddButton = (onClick) => {
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    name: yup.string().required("Um nome é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  return (
      <Button onClick={()=> onClick()} sx={{position:"fixed",bottom:20,right:50, background: "lightGray", borderRadius:"50%" ,width:70,height:70, ":hover":{background:"gray"} }}>
        <FaPlus style={{ width:'30px',height:"30px",color: "white", fontWeight:"200" }} />
      </Button>
  );
};
