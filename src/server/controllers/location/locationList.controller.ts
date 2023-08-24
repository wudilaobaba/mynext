import {locationListService} from '@/server/services/location'
export const locationListController = async ()=>{
  try {
    return await locationListService()
  }catch (e){
    return {code: 500}
  }
}
