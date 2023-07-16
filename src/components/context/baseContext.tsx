import React, { createContext, FC, useReducer } from "react";
type BaseContextType<D> = {
  // eslint-disable-next-line no-unused-vars
  dispatch: (payload: Partial<D>) => void;
  data: D;
};
interface BaseActionType<D> {
  payload: Partial<D>;
}
export function createContextContainer<D>(initData: D) {
  const Context = createContext<BaseContextType<D>>({
    dispatch: () => undefined,
    data: initData,
  });

  const ContextContainer: FC<any> = ({ children }) => {
    const reducer = (state: D, action: BaseActionType<D>) => {
      const { payload } = action;
      return { ...state, ...payload };
    };
    const [data, originDispatch] = useReducer(reducer, initData);
    const dispatch = (payload: Partial<D>) => originDispatch({ payload });
    return (
      <Context.Provider value={{ data, dispatch }}>{children}</Context.Provider>
    );
  };

  return { ContextContainer, Context };
}

// * 别急，你还要完成以下两个步骤，需要手动复制
// * ---------------------------------S-T-A-R-T--------------------------------------
// * 1. Wq页面 入口导入以下模块作为页面容器：
// * import {ContextContainer} from '~/components/Context/wqContextContainer';
// * --------------------------------------------------------------------------------
// * 2. useStore.ts 中加入以下内容：
// * import {Context as WqContext} from '~/components/Context/wqContextContainer'
// * // 这里变量的大写小请自己修改
// * const wq = useContext(WqContext)
//   * return {wq}
//   */
