import {CreateEmpInput} from '@/server/schema/employee.schema'
import {createEmpService} from '@/server/services/employee'

export const createEmpController = async ({input}: { input: CreateEmpInput }) => {
  try {
    return createEmpService(input)
  } catch (e) {
    return {code: e}
  }
}
