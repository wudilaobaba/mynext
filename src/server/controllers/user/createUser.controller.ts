import {createUserService} from '@/server/services/user'
import {CreateUserInput} from '@/server/schema/user.schema'

export const createUserHandler = async ({input}:{input: CreateUserInput}) => {
  try {
    return await createUserService(input)
  }catch (e){
    return {code: 500}
  }
}
