import React from 'react';
import useClick from './useClick';

interface IProps {
}

export const HookClickButton: React.FC<IProps> = props => {
  const hook = useClick();
  return (
    <button onMouseOver={hook.incrementCount} >
      Clicked {hook.count} times!
    </button>
    );
}

export default HookClickButton;