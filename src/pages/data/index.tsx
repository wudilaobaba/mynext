import path from "path";
import { PrismaClient } from "@prisma/client";
interface DataProps {
  school: string;
  id: string;
}
interface Server {
  name: string;
  age: number;
  path: string;
}
const Data = (props: DataProps & Server) => {
  const { school, name, age, path, id } = props;
  return (
    <div>
      <h1>有数据的静态生成</h1>
      <div>school: {school}</div>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>path: {path}</div>
      <div>id: {id}</div>
    </div>
  );
};

/**
 * 有数据的静态生成
 * 该方法在build的时候运行,所以方法中可以使用nodejs
 * 所有的console.log都打印在命令行
 */
export async function getStaticProps(): Promise<{ props: Server }> {
  const random = Math.floor(Math.random() * (99999 - 10000 + 10000) + 1);
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      name: `name-${random}`,
      email: `${random}@qq.com`,
      password: `${random}`,
    },
  });
  console.log(process.env);
  // const data = await prisma.user.findMany();
  return {
    props: { name: "Mike", age: 2, path: path.resolve() },
  };
}
export default Data;
