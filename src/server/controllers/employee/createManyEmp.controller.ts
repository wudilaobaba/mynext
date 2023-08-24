import {CreateManyEmpInput} from '@/server/schema/employee.schema'
import {createManyEmpService} from '@/server/services/employee'

export const createManyEmpController = async ({input}: { input: CreateManyEmpInput }) => {
  try {
    return createManyEmpService(input)
  } catch (e) {
    return {code: 500}
  }
}
