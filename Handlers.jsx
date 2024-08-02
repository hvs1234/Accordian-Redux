import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "./Slice";
import { useCallback } from "react";

const Handlers = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.app.open);

  const handleOpen = useCallback(
    (value) => {
      dispatch(setOpen(value));
    },
    [dispatch]
  );

  return { handleOpen, open };
};

export default Handlers;
