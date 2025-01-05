import logo from "./logo.svg";

import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));

function App() {
  const bears = useStore((state) => state.bears);
  const increase = useStore((state) => state.increase);
  return (
    <div className="App">
      <h1>zustand 예제 따라치기</h1>
      <div>{`기초적 카운트 ${bears}`}</div>
      <button
        onClick={() => {
          increase();
        }}
      >
        클릭{" "}
      </button>
    </div>
  );
}

export default App;
