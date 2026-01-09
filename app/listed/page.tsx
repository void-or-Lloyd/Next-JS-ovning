'use client'

import { useState, useEffect } from 'react'


type Vehicle = {
  id: number,
  vehicle: string,
  engine: string,
  power: string,
  desc: string,
  num: string,
}


export default function listed() {

  const [dataFetch, setDataFetch] = useState<Vehicle[]>([])
  const [refresh, setRefresh] = useState(0)

  useEffect(()=> {

    const f = async () => {
      const r = await fetch("/api/listed")
      const data = await r.json()
      
      setDataFetch(data.info)
    }
    f()
    // .then(response => response.json)

    // .then(data => setDataFetch(data.info))

  }, [refresh])


  if (!dataFetch) {
    return <p>Loading</p>
  }

  return (
    <div className="flex flex-wrap align-middle gap-2 m-2">
      {dataFetch.map(hmm => (
        <div key={hmm.id} className="flex flex-col gap-1 w-max p-3 text-white font-sans bg-neutral-800 border-2 border-neutral-900 rounded-lg">
          <h1 className="text-3xl font-bold">{hmm.vehicle}</h1>
          <p className="text-2xl">{hmm.desc}</p>
          <p className="">{hmm.engine}</p>
          <p className="">{hmm.power}</p>
          <p className="">{"Racing number: " + hmm.num}</p>
        </div>
      ))}
    </div>
    
  )
}
