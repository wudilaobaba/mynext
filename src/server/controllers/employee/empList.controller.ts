import {empListService} from '@/server/services/employee'
export const empListController = async ()=>{
  try {
    return await empListService();
  }catch (e){
    return {code: e}
  }
}
