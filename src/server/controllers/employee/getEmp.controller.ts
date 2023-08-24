import {FindEmpInput} from '@/server/schema/employee.schema'
import {getEmpService} from '@/server/services/employee'
export const getEmpController = async ({input}:{input:FindEmpInput})=>{
  try {
    return await getEmpService(input)
  }catch (e){
    return {code: 500}
  }
}
