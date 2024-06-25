import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByValue,
} from './redux/features/counterSlice';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-400 bg-slate-100 p-10 rounded-md">
        <button
          onClick={() => dispatch(incrementByValue({ value: 5 }))}
          className="px-3 py-2 rounded-md bg-green-500 font-semibold text-white"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
