import { prisma } from "@/server";
const StaticRouter = (props: any) => {
  const { name, email } = props;
  return (
    <div>
      <div>
        {name} - {email}
      </div>
    </div>
  );
};

// 返回用户可以访问到的所有路由参数
export async function getStaticPaths() {
  const data = await prisma.user.findMany({
    select: { id: true },
  });
  const paths = data.map((item) => ({ params: { id: item.id + "" } }));
  return {
    paths: paths,
    fallback: false,
  };
}

// 返回路由参数对应的具体数据
export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
    select: {
      name: true,
      email: true,
    },
  });
  return { props: data };
}

export default StaticRouter;
