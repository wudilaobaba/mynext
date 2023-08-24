import {trpc} from '@/utils/trpc'
const Location = ()=>{
  const {data: list} = trpc.locationRouter.list.useQuery();
  if(list){
    console.log(list)
  }
  return(
    <div>
      <div>locaton</div>
    </div>
  )
}

export default Location
