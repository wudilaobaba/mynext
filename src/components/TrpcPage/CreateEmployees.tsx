import { trpc } from "@/utils";
import { useState, useEffect } from "react";
export const CreateEmployees = () => {
  const getRandomNumber = (a: number, b: number) => {
    // 计算范围内的随机数
    const randomNumber = Math.random() * (b - a) + a;

    // 使用Math.floor()将随机数取整
    return Math.floor(randomNumber);
  };
  const [times, setTimes] = useState<number>(3);
  const { mutate } = trpc.employeeRouter.create.useMutation();
  useEffect(() => {
    (async () => {
      // if (times <= 300) {
      //
      // }
    })();
  }, [times]);
  return (
    <div>
      <button>创建emp</button>
    </div>
  );
};
