import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../fetures/counter/counterSlice';

function UseReduxTookit() {
    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>🧮 Counter App</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())} style={{ margin: '0 10px' }}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
}

export default UseReduxTookit;
