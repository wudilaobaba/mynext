import Link from "next/link";
import Head from "next/head";
const Whj = () => {
  return (
    <div>
      <Head>
        <title>whj</title>
      </Head>
      <h1>无数据的静态生成</h1>
      {/*Link组件在浏览器空闲的时候会预去href对应的页面的内容*/}
      <Link href="/">
        <h4>33</h4>
      </Link>
    </div>
  );
};
export default Whj;
