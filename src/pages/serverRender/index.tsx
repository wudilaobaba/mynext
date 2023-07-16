interface ServerRenderProps {
  age: number;
}
interface ServerSide {
  name: string;
}
const ServerRender = (props: ServerSide & ServerRenderProps) => {
  const { age, name } = props;
  return (
    <h1>
      {age}:{name}
    </h1>
  );
};

/**
 * 服务器端渲染，客户端每次请求的该页面的时候, 才生成html
 * 客户端每次请求的时候，才会执行这里的代码
 */
export async function getServerSideProps(context: any): Promise<{
  props: ServerSide;
}> {
  // query就是浏览器url的参数
  const { query } = context;
  return {
    props: {
      name: query.name,
    },
  };
}
export default ServerRender;
