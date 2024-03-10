import React from 'react'
import { useParams } from 'react-router-dom'


const user = () => {
    const params = useParams()
  return (
    <div>
      <p>This is uder {params.username}</p>
    </div>
  )
}

export default user
