import { NextResponse } from "next/server"
import Info from '../data'


export async function DELETE(
  request: Request,
  {params}: RouteContext<'/api/listed/[id]'>
) {
  const {id} = await params

  console.log(id)

  for (let i = 0; i < Info.length; i++) {
    // console.log(Number(id), Info[i].id)

    if (Number(id) == Info[i].id) {
      Info.splice(i, 1)
      break
    }
    
  }

  console.log(Info) 

  return NextResponse.json(
    {ok: true}
  )
}