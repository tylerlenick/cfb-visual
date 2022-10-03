import React from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'

const Game = () => {
  const router = useRouter()
  const { id } = router.query;
  
  return (
    <div>The ID is {id}</div>
  )
}

export default Game