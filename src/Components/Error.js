import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    // const error = useRouteError();

    console.log('Error page test');
  return (
    <div>
        <h1>Something went wrong</h1>
      <p>hmm</p>
    </div>
  )
}

export default Error