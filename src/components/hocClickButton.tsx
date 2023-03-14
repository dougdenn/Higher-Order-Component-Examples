import React from 'react';

export interface IHocBlickButtonProps {
  count?: number;
  incrementCount?: () => void;
}

export const HocClickButton: React.FC<IHocBlickButtonProps> = props => {
  return (
    <button onMouseOver={props.incrementCount} >
      Clicked {props.count} times!
    </button>
  );
}

export default HocClickButton;