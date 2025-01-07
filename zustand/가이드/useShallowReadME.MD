### useShallow를 이용한 렌더링방지

- 저장소에 계산된 상태를 구독할 경우 실제값은 변경되지 않았음에도 얕은 복사에 따라 계속 리렌더링 되는 문제가 있다.
- 이를 해결하기 위해 `useShallow`를 사용할 수 있다.

```ts
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const useMeals = create(() => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  littleBear: "A little, small, wee pot",
}));

export const BearNames = () => {
  const names = useMeals(useShallow((state) => Object.keys(state)));

  return <div>{names.join(", ")}</div>;
};
```
