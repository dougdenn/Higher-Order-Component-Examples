import React from 'react';

export default function useClick() {
  const [count, setCount] = React.useState(0);
  const incrementCount = () => setCount(old => old + 1);
  return { count, incrementCount };
}