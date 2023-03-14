import React from 'react';
import logo from './logo.svg';
import './App.css';
import WithClick, { withClick, WithClickClassComponent, WithClickCloneWrapper, WithClickWrapper } from './components/withClick';
import HocClickButton from './components/hocClickButton';
import HookClickButton from './components/hookClickButton';

function App() {
  return (
    <div style={{ display: 'grid', width: '300px' }}>
      <label>Vanilla Class Component with `component` prop</label>
      <WithClickClassComponent component={HocClickButton} />

      <label>Class component invoked with functional syntax</label>
      {withClick(HocClickButton)}
      
      <label>Function component invoked with functional syntax (no custom hook)</label>
      {WithClick(HocClickButton)}
      
      <label>Function component invoked with child <code>{'{Component}'}</code> syntax (no custom hook)</label>
      <WithClickWrapper>
        {HocClickButton}
      </WithClickWrapper>
      
      <label>Function component wrapper with <code>component</code> prop</label>
      <WithClickWrapper component={HocClickButton} />
      
      <label>Function component wrapper with <code>component</code> child prop</label>
      <WithClickCloneWrapper>
        <HocClickButton />
      </WithClickCloneWrapper>

      <label>Custom hook</label>
      <HookClickButton/>
    </div>
  );
}

export default App;
