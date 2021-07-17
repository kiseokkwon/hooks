import React from 'react'
import { usePreventLeave } from './usePreventLeave/usePreventLeave';

function UsePreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  )
}

export default UsePreventLeave;
