import {CreateManyUserInput} from '@/server/schema/user.schema'
import {createManyUserService} from '@/server/services/user'
export const createManyUsersHandler = async ({input}:{input: CreateManyUserInput})=>{
  try {
    return createManyUserService(input);
  }catch (e){
    return {code: 500}
  }
}
