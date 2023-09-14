import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
  return (
    <div>
        <h1>Error Page</h1>
        <p>{error.statusText}</p>
    </div>
  )
}

export default Error