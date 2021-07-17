import React from 'react';
import { useInput } from './useInput/useInput';

function UseInput() {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="UseInput">
      <h1>Hello</h1>
      <input placeholder="name" {...name} />
    </div>
  );
}

export default UseInput
