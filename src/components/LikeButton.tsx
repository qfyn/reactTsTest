import React, { useState, useEffect, useRef, useContext } from "react"
// import useMousePositions from '../hooks/useMousePositions';
// import { ThemeContext } from "../App";

const LikeButton: React.FC = () => {
  // const [obj, setObj] = useState({like: 0, on: true}})
  const [like, setLike] = useState(0)
  // const [on, setOn] = useState(true)
  // const positions = useMousePositions()

  // useRef保持着唯一引用,修改useRef的值不会导致重新渲染组件
  const likeRef = useRef(0)

  // 组件函数中想要在组件更新时实现某些操作，可以借用useRef实现。class中使用componentDidMount
  const didMountRef = useRef(false)

  // 通过使用useRef可以获取dom节点
  const domRef = useRef<HTMLInputElement>(null)

  // const theme = useContext(ThemeContext)
  // const style = {
  //   background: theme.background,
  //   color: theme.color
  // }

  // // 每次渲染之后都会执行
  // useEffect( () => {
  //   document.title = `点击了${like}次`
  // })

  // 只有like改变的时候才会执行useEffect
  useEffect( () => {
    document.title = `点击了${like}次`
  }, [like])

  useEffect(() => {
    if(didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })

  useEffect(() => {
    if(domRef && domRef.current) {
      domRef.current.focus()
    }
  })

  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on' + likeRef.current)
    }, 3000);
  }

  return (
    <>
    <input type='text' ref={domRef} />
    {/* <button onClick={() => {setObj({like: obj.like + 1, on: obj.on})}>
    {obj.like}
    </button> */}
    {/* <h2>X: {positions.x}, Y: {positions.y}</h2> */}
    {/* <button style={style} onClick={() => {setLike(like + 1); likeRef.current++}}>
      {like}
    </button> */}

    {/* <button onClick={() => {setOn(!on)}}>
      {on ? 'ON' : 'OFF'}
    </button> */}

    <button onClick={handleAlertClick}>
      Alert!
    </button>
    </>
  )
}

export default LikeButton