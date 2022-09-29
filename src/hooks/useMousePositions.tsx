import React, { useState, useEffect } from "react"

// 自定义hook 函数名必须用use开头
const useMousePosition = () => {
  const [positions, setPositions] = useState({x: 0, y: 0})

  // 如果useEffect返回的是函数，react将会在执行清除操作的时候调用该函数
  useEffect( () => {
    console.log('add effact', positions.x)
    const updateMouse = (e: MouseEvent) => {
      setPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('mousemove', updateMouse)

    return () => {
      console.log('remove effact', positions.x)
      document.removeEventListener('mousemove', updateMouse)
    }
  }, []) // []表示只会执行一次

  return positions
}

export default useMousePosition