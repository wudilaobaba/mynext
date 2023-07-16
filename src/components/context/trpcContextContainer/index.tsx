import { createContextContainer } from "@/components/context/baseContext";
type DataType = {
  name: string;
  password: string;
};

const initData: DataType = {
  name: "",
  password: "",
};

export const { ContextContainer, Context } =
  createContextContainer<DataType>(initData);
