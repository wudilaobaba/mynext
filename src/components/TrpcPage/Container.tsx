import { useStore } from "@/utils/useStore";
import { trpc } from "@/utils";
import { CreateUser } from "./CreateUser";
import { CreateEmployees } from "./CreateEmployees";
import { CreateDepartment } from "./CreateDeparment";
import {useEffect} from 'react'
export const Container = () => {
  const { data: store, dispatch } = useStore().trpc;
  const { name, password } = store;
  /** useQuery 定义的时候就进行穿参数，同时会瞬间出数据，第一时间传参！！！ */
  /** dispatch其参数，会根据入参改变而自动发起请求 */
  // const { data, refetch } = trpc.router1.get1.useQuery({ text: "2" });

  /** useMutation 定义的时候不传参， 使用的时候要根据router定义的参数类型进行传递参数 */
  const { data: d, mutate } = trpc.router1.post1.useMutation();
  const { data } = trpc.memberRouter.xxx.useQuery();
  const { mutate: dropUser, data: delResult } = trpc.memberRouter.deleteUser.useMutation();

  useEffect(()=>{
    if(delResult){
        console.log(2222)
    }
  },[delResult])
  // const { data: user } = trpc.memberRouter.user.useQuery({
  //   name,
  //   password,
  // });

  /** 无限加载 */
  const {
    data: uu,
    hasNextPage,
    fetchNextPage,
  } = trpc.memberRouter.userInfinite.useInfiniteQuery(
    {
      limit: 1, // 一次请求回来几条数据
      xx: 2,
    },
    {
      getNextPageParam: (lastPage: any) => (lastPage ? lastPage.nextCursor : 0),
      // getPreviousPageParam: (firstPage: any) =>
      //   firstPage ? firstPage.nextCursor : 0,
      // trpc: { context: { skipBatch: true } },
      // keepPreviousData: true,
      // enabled: true,
    }
  );

  const getUser = async () => {
    // dispatch({
    //   name: "name-72591",
    //   password: "72591",
    // });
    await fetchNextPage();
  };

  const del = () => {
    dropUser({ id: 1 });
  };
  return (
    <div>
      <CreateUser />
      <CreateEmployees />
      <CreateDepartment />
      {/*<button onClick={() => mutate({ text: "22" })}>TRPC</button>*/}
      {/*<h1>{d?.status}</h1>*/}
      <button onClick={del}>删除</button>
      <h1>{hasNextPage + ""}</h1>
      <button onClick={getUser}>getUser</button>
      <h1>
        {JSON.stringify(
          (uu as any)?.pages?.map((item: any) => item.data).flat() ?? []
        )}
      </h1>
    </div>
  );
};
