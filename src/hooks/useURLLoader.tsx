import { useState, useEffect } from "react"
import axios from "axios"


// hooks可用于异步获取数据 api
const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    setLoading(true)
    axios.get(url).then(result => {
      setData(result.data)
      setLoading(false)
    })
  }, deps)

  return [data, loading]
}

export default useURLLoader