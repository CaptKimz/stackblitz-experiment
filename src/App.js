import React, { useState } from 'react';
import './style.css';


const ChildComponent = () => {
  console.log('in re-rendered');
  return <p>Child</p>;
};
const ParentComponent = ({ children }) => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </div>
  );
};
const Child = () => {
  console.log('out  re-rendered');
  return <p>Child</p>;
};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child />
    </>
  );
};

export default App;
