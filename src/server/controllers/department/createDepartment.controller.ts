import {CreateDepartmentInput} from '@/server/schema/department.schema'
import {createDepartmentService} from '@/server/services/department'
export const createDepartmentController = async ({input}:{input: CreateDepartmentInput})=>{
  try {
    return await createDepartmentService(input)
  }catch (e){
    return {code: e}
  }
}
