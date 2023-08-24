import { forwardRef, useImperativeHandle } from 'react';

export const ChildComponent = forwardRef((props, ref) => {
  const childMethod = () => {
    console.log('子组件方法被调用');
  };

  useImperativeHandle(ref, () => ({
    childMethod
  }));

  return <div>子组件</div>;
});

export default ChildComponent;
