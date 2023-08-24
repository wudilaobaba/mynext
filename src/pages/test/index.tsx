import {useReducer, useRef} from 'react'
import {ChildComponent} from './ChildComponent'
import { func } from 'prop-types';

const Test = ()=>{
  const init: any = {count: 0}
  const reducer = (state: any, action: any)=>{
    return{...init, ...action}

  }
  const ref: any = useRef()
  const [state, dispatch] = useReducer(reducer, init)

  const debounce = (func:Function, delay: number)=>{
    let timer: any;
    return(...args: any[])=>{
      clearTimeout(timer);
      timer = setTimeout(()=>{
        func(...args)
      }, delay)
    }
  }
  const throttle = (func: Function, delay: number)=>{
    let timer: any;
    return(...args: any[])=>{
      if (timer) return;
      timer = setTimeout(()=>{
        func(...args);
        timer = 0
      }, delay)
    }
  }
  const deepClone = (obj: any)=>{
    if (typeof obj !== 'object' && obj != null){
      return obj;
    }
    const result: any = obj instanceof Array ? [] : {};
    for (const key in obj) {
      result[key] = deepClone(obj[key]);
    }
    return result;
  }

  const u = deepClone({name:"Mike"});
  console.log(u);
  console.log(Object.prototype.toString.call(true));
  const click = ()=>console.log(111)
  return(
    <div>
      <h1>{state.count}</h1>
      <ChildComponent ref={ref}/>
      <button onClick={debounce(click, 1000)}>ok</button>
      <button draggable={true} onDrag={throttle(click,1000)}>asdasd</button>
    </div>
  )
}
export default Test
