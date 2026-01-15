import {useState} from 'react'



export default function Form({onSubmit}:{onSubmit:()=>void}) {
  const [vehicle, setVehicle] = useState("")
  const [engine, setEngine] = useState("")
  const [power, setPower] = useState("")
  const [desc, setDesc] = useState("")
  const [num, setNum] = useState("")


  async function handlesubmit(e:React.FormEvent) {
    e.preventDefault()
    console.log(vehicle, engine, power, desc, num) 
  }





  return (
    <form onSubmit={onSubmit} className="flex flex-row gap-3 w-max p-3 text-white font-sans bg-neutral-800 border-2 border-neutral-900 rounded-lg">
      <div className="flex flex-col gap-3">
        <input onChange={(e) => setVehicle(e.target.value)} type="text" placeholder="vehicle" className="p-1.5 placeholder-neutral-300 outline-2 outline-neutral-700 rounded-lg"></input>
        <input onChange={(e) => setEngine(e.target.value)} type="text" placeholder="engine" className="p-1.5 placeholder-neutral-300 outline-2 outline-neutral-700 rounded-lg"></input>
        <input onChange={(e) => setPower(e.target.value)} type="text" placeholder="power" className="p-1.5 placeholder-neutral-300 outline-2 outline-neutral-700 rounded-lg"></input>
        <input onChange={(e) => setDesc(e.target.value)} type="text" placeholder="desc" className="p-1.5 placeholder-neutral-300 outline-2 outline-neutral-700 rounded-lg"></input>
        <input onChange={(e) => setNum(e.target.value)} type="text" placeholder="number" className="p-1.5 placeholder-neutral-300 outline-2 outline-neutral-700 rounded-lg"></input>
      </div>
      <div className="flex flex-col">
        <button className="h-full p-1.5 text-lg bg-blue-600 outline-2 outline-blue-700 rounded-lg hover:bg-neutral-500 hover:outline-neutral-600">Send</button>
      </div>
    </form>
  )
}