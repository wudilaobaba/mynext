import {UpdateUserInput} from '@/server/schema/user.schema'
import {updateUserService} from '@/server/services/user'
export const updateUserController = async ({input}:{input: UpdateUserInput})=>{
  try {
    return await updateUserService(input)
  }catch (e){
    return {code: 500}
  }

}
