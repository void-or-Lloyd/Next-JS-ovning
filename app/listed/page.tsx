'use client'

import { useState, useEffect } from 'react'
import Form from './form'
import ABC from './abc'


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
      
      setDataFetch(data)
    }
    f()
    // .then(response => response.json)

    // .then(data => setDataFetch(data.info))

  }, [refresh])

  async function handlesubmit(e:React.FormEvent) {
    e.preventDefault()
    const car = {
      vehicle: e.target[0].value,
      engine: e.target[1].value,
      power: e.target[2].value,
      desc: e.target[3].value,
      num: e.target[4].value
    }
    console.log(car)
    const r = await fetch("/api/listed", {method: 'post', body: JSON.stringify(car)})
    const data = await r.json()
    setRefresh(refresh + 1)
    alert("Vehicle Added!")

    console.log(data)

  }

  async function handleDelete(id: number) {

    const d = await fetch("/api/listed/" + id, {method: 'delete'})
    setRefresh(refresh + 1)
    alert("Vehicle Removed!")
  }


  if (!dataFetch) {
    return <p>Loading</p>
  }

  return (
    <div className="flex flex-wrap align-middle gap-2 m-2">
      {/* <ABC /> */}
      {dataFetch.map(hmm => (
        <div key={hmm.id} className="flex flex-col gap-1 w-max p-3 text-white font-sans bg-neutral-800 border-2 border-neutral-900 rounded-lg">
          <h1 className="text-3xl font-bold">{hmm.vehicle}</h1>
          <p className="text-2xl">{hmm.desc}</p>
          <p className="">{hmm.engine}</p>
          <p className="">{hmm.power}</p>
          <p className="">{"Racing number: " + hmm.num}</p>
          <button onClick={()=> handleDelete(hmm.id)} className="w-max mt-2 p-1.5 text-lg bg-red-900 outline-2 outline-red-950 rounded-lg hover:bg-red-800 hover:outline-red-900">Remove</button>
        </div>
      ))}
      <Form onSubmit={handlesubmit} />
    </div>
    
  )
}
