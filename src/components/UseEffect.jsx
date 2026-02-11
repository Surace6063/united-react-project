// useEffect hook -> use for side-effect in functional component
// use for fetching data through api, manually updating dom

import { useEffect, useState } from "react"

const UseEffect = () => {
    const [on,setOn] = useState(false)
    const [count,setCount] = useState(0)

    // 1. useEffect without dependency array
    // code inside useEffect runs on first component render 
    // it also runs every time something change in component
    // useEffect(()=>{
    //     console.log('render')
    // })

    // 2. useEffect with empty dependency array
    // code inside useEffect runs on first component render only
    // useEffect(()=>{
    //     console.log('render')
    // },[])

    // 3. useEffect with  dependency array
    // code inside useEffect runs on first component render 
    // runs according to condition in dependency arrat
    useEffect(()=>{
        console.log('render')
    },[on])

  return (
    <div>
        <button onClick={()=>setOn(!on)}>
            toogle switch
        </button>
        <p>
            {
                on ? "switch on" : "switch off"
            }
        </p>

        <hr />
        
        <br /><br />

        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count + 1)}>
                add
            </button>
        </div>
    </div>
  )
}
export default UseEffect