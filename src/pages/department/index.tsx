import {trpc} from '@/utils/trpc'
import {produce} from 'immer';
import {useState} from 'react'

const Department = () => {
  const [obj, setObj] = useState<any>(null)
  const client = trpc.useContext();
  const {mutate: createDepartment} = trpc.departmentRouter.create.useMutation({
    onSuccess(data) {
      console.log(data)
    }
  })
  trpc.departmentRouter.list.useQuery();
  trpc.empRouter.empList.useQuery();
  const {data: empObj} = trpc.empRouter.getById.useQuery({id: 2});
  const add = async () => {
    await createDepartment({
      department_name: '质检部',
      manager_id: 6,
      location_id: 5,
      country_id:86
    })
  }
  const getList = async ()=>{
    // const a: any = await client.empRouter.getById.getData({id: 2})
    client.empRouter.getById.setData({id:2}, produce( (draft: any) => {
      draft.salary=9
    }));
    // 上方的empObj中数据会改变

  }
  return (
    <div>
      <button onClick={getList}>获取列表</button>
      <div>{JSON.stringify(empObj)}</div>
      {/*<div>*/}
      {/*  <button onClick={add}>add</button>*/}
      {/*</div>*/}
      <ul>
        {/*{(departments as any).map((item: any, key: number)=><li key={key}>{item.department_name}</li>)}*/}
      </ul>
    </div>
  )
}
export default Department
