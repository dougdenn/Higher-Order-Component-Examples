import React from 'react';
import { IHocBlickButtonProps } from './hocClickButton';

interface IWithClickComponentProps {
  component: React.FC<IHocBlickButtonProps>
}
export class WithClickClassComponent extends React.Component<IWithClickComponentProps, { count: number }>{
  constructor(props: IWithClickComponentProps) {
    super(props);
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(oldState => ({ ...oldState, count: oldState.count + 1 }))
  }

  render() {
    return <this.props.component {...{ count: this.state.count, incrementCount: this.incrementCount }} />
  }
}
export function withClick(Component: React.FC<IHocBlickButtonProps>) {
  return <WithClickClassComponent {...{ component: Component }} />
}

export const WithClick = (Component: React.FC<IHocBlickButtonProps>) => {
  const [count, setCount] = React.useState(0);
  const incrementCount = () => setCount(old => old + 1);
  return (<Component {...{ count, incrementCount }} />);
}

interface IWithClickWrapperProps {
  component?: React.FC<IHocBlickButtonProps>;
  children?: React.FC<IHocBlickButtonProps>;
}


export const WithClickWrapper: React.FC<IWithClickWrapperProps> = props => {
  const [count, setCount] = React.useState(0);
  const incrementCount = () => setCount(old => old + 1);
  const Component = props.component ?? props.children;
  if (!Component) return <React.Fragment />
  return <Component {...{ count, incrementCount }} />
}

interface IWithClickCloneWrapperProps {
  element?: React.ReactElement<IHocBlickButtonProps>;
  children?: React.ReactElement<IHocBlickButtonProps>;
}

export const WithClickCloneWrapper: React.FC<IWithClickCloneWrapperProps> = props => {
  const [count, setCount] = React.useState(0);
  const incrementCount = () => setCount(old => old + 1);
  const element = props.element ?? props.children;
  if (!element) return <React.Fragment />;
  return React.cloneElement<IHocBlickButtonProps>(element, {count, incrementCount})
}

export default WithClick;