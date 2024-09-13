import { useEffect, useState,useReducer } from "react"



export default function useFecthData(url:string,method:"GET" | "POST") {
    
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false) 
    const [error,setError] = useState<any>()

    const fecthData = async()=>{
        try{
            setLoading(true)
            const response = await fetch(url,{method})
            const res = await response.json()
            setData(res)
            setLoading(false)
        }catch(err){
            setLoading(false)
            setError(err)
        }
    }
  useEffect(()=>{
    fecthData()
  },[])

  return {data,error,loading}
}
