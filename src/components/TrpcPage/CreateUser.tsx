import { trpc } from "@/utils";
import { useState } from "react";
export const CreateUser = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate } = trpc.memberRouter.create.useMutation();
  const submit = async () => {
    await mutate({ name, password, email });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="请输入姓名"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="请输入email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="请输入密码"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={submit} disabled={!(name && email && password)}>
        确认添加
      </button>
      <br />
      <br />
      <br />
    </div>
  );
};
