import {trpc} from '@/utils/trpc'

const Employees = () => {
  const {mutate: createMany} = trpc.empRouter.createMany.useMutation({
    onSuccess(data) {
      console.log(data)
    }
  })
  const {mutate: createOne} = trpc.empRouter.create.useMutation({
    onSuccess(data) {
      console.log(data)
    }
  })
  const {mutate: getOne} = trpc.empRouter.get.useMutation({
    onSuccess(data){
      console.log(data)
    }
  })
  const {data: empList} = trpc.empRouter.empList.useQuery();
  if (empList){
    console.log(empList)
  }
  const {data: infiniteData, fetchNextPage, hasNextPage} = trpc.empRouter.empListInfinite.useInfiniteQuery(
    {limit: 10},
    {
            getNextPageParam: (lastPage: any) => (lastPage ? lastPage.nextCursor : 0),
            // getPreviousPageParam: (firstPage: any) =>
            //   firstPage ? firstPage.nextCursor : 0,
            // trpc: { context: { skipBatch: true } },
            // keepPreviousData: true,
            // enabled: true,
          }
  );
  const findOne = ()=>{
    const data = getOne({id:1})
    console.log("-->", data)
  }
  const findEmplInfinite = async ()=>{
    await fetchNextPage();
    console.log(infiniteData)
  }
  const addMany = async () => {
    const min = 10000;
    const max = 99999;

    const emps = []
    for (let i = 0; i < 100; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      const id = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      emps.push(
        {
          first_name: `Emp${randomNum}`,
          last_name: `Li${randomNum}oio`,
          email: `1${randomNum}@qq.com`,
          phone_number: `1811${randomNum}00`,
          salary: Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000,
          manager_id: id,
          department_id: id,
          commission_pct: '_',
        }
      )
    }
    await createMany(emps)
    // emps.forEach(async (emp)=>await createOne(emp))

  }

  return (
    <div>
      {/*<div>*/}
      {/*  <button onClick={addMany}>add Many</button>*/}
      {/*</div>*/}
      <div>
        <button onClick={findOne}>findOne</button>
      </div>
      <div>
        <button onClick={findEmplInfinite} disabled={!hasNextPage}>再来10条</button>
        <h4>{JSON.stringify((infiniteData as any)?.pages?.map((item: any) => item.data).flat() ?? [])}</h4>
      </div>
    </div>
  )
}
export default Employees
