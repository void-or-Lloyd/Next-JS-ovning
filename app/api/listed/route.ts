import { NextResponse } from "next/server"
import Info from './data'


export async function GET() {

  return NextResponse.json(
    Info
  )

}

export async function POST(request: Request) {
  let data = await request.json()

  data = {
    id: Info.length,
    ...data
  }



  Info.push(data)


  return NextResponse.json({
    data
  }) 
}







// {
//   id: ,
//   vehicle: "",
//   engine: "",
//   power: "",
//   desc: "",
//   num: "",
// },