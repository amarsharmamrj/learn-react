import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/slice'

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((store) => store.counter)

    return (
        <>
            <p>Counter</p>
            <div className="count">
                <button onClick={() => dispatch(decrement(1))} >-</button>
                <h1>{count}</h1>
                <button onClick={() => dispatch(increment(1))}>+</button>
            </div>
        </>
    )
}

export default Counter