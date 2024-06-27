import {
  decrement,
  increment,
  incrementByValue,
} from './redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  let taliArray: number[] = [];
  for (let i = 5; i <= count; i += 5) {
    taliArray = [...taliArray, i];
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-400 bg-slate-100 p-10 rounded-md">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 font-semibold text-white mx-1"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-green-500 font-semibold text-white"
        >
          Increment by 5
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 font-semibold text-white"
        >
          Decrement
        </button>
        <div className="mx-2 ">
          {taliArray.map((item) => (
            <button className="px-3 py-2 rounded-md bg-purple-500 font-semibold text-white m-1">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
