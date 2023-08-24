import {trpc} from '@/utils/trpc'
const Users = ()=>{
  const {mutate: addUser} = trpc.userRouter.create.useMutation({
    onSuccess(data){
      console.log(data)
    }
  })
  const {mutate: addUsers} = trpc.userRouter.createMany.useMutation({
    onSuccess(data){
      console.log(data)
    }
  })
  const {mutate: updateUser, isLoading} = trpc.userRouter.update.useMutation({
    onSuccess(data){
      console.log(data)
    }
  })
  const createUser = async ()=>{
    await addUser({name:"Mile", wechat:"we98611"});
  }
  const createManyUser = async ()=>{
    const min = 100000;
    const max = 999999;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const users = []
    for (let i=0;i<100;i++){
      users.push({name:`User${Math.floor(Math.random() * (max - min + 1)) + min}`, wechat:`wc${Math.floor(Math.random() * (max - min + 1)) + min}oio`})
    }
    await addUsers(users)
  }
  const updateUserOne = async ()=>{
    await updateUser({id:2, facebook:'fkiou', age: 22})
  }
  return(
    <div>
      {/*<div>*/}
      {/*  <button onClick={createUser}>add</button>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <button onClick={createManyUser}>addMany</button>*/}
      {/*</div>*/}
      <div>
        <button onClick={updateUserOne}>update{isLoading?"...":null}</button>
      </div>
    </div>
  )
}
export default Users;
