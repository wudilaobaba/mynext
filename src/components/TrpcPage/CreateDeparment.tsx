import { useEffect, useState } from "react";
import { trpc } from "@/utils/trpc";
export const CreateDepartment = () => {
  const ddd = [
    {
      id: 1,
      department_name: "财务部",
      manager_id: 1,
      country_id: 86,
      location_id: 10, // 1～10
    },
    {
      id: 2,
      department_name: "教研部",
      manager_id: 2,
      country_id: 86,
      location_id: 9, // 1～10
    },
    {
      id: 3,
      department_name: "外交部",
      manager_id: 3,
      country_id: 86,
      location_id: 8, // 1～10
    },
    {
      id: 4,
      department_name: "销售部",
      manager_id: 4,
      country_id: 86,
      location_id: 7, // 1～10
    },
    {
      id: 5,
      department_name: "招商部",
      manager_id: 5,
      country_id: 86,
      location_id: 6, // 1～10
    },
    {
      id: 6,
      department_name: "运营部",
      manager_id: 6,
      country_id: 86,
      location_id: 5, // 1～10
    },
    {
      id: 7,
      department_name: "技术部",
      manager_id: 7,
      country_id: 86,
      location_id: 4, // 1～10
    },
    {
      id: 8,
      department_name: "装逼部",
      manager_id: 8,
      country_id: 86,
      location_id: 3, // 1～10
    },
    {
      id: 9,
      department_name: "广告部",
      manager_id: 9,
      country_id: 86,
      location_id: 2, // 1～10
    },
    {
      id: 10,
      department_name: "安保部",
      manager_id: 10,
      country_id: 86,
      location_id: 1, // 1～10
    },
  ];
  const { mutate } = trpc.departmentRouter.create.useMutation();
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    (async () => {})();
  }, []);
  return <></>;
};
