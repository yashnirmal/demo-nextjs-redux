import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, updateName } from '../state/stateDemoSlice'

export default function Home() {

  const count = useSelector((state) => state.statedemo.value)
  const name = useSelector((state) => state.statedemo.name)
  const dispatch = useDispatch()

  return (
    <>
      <Head>
        <title>Redux Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main">
      <h2>Redux with NextJs</h2>
        <div id="counter-cont">
          <button onClick={()=>dispatch(increment())}>+</button>
          <span>{count}</span>
          <button onClick={()=>dispatch(decrement())}>-</button>
        </div>

        <div id="name-cont">
          <span>Name : {name}</span>
          <input type="text" placeholder="name" />
          <button onClick={()=>dispatch(updateName(document.querySelector('input').value))}>Update</button>
        </div>
      </main>
    </>
  )
}
