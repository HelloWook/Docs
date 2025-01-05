### 변경 불가능한 상태와 병합

- `usestate`, 와 마찬가지로 상태를 불변적으로 업데이트 해야한다.

```ts
import { create } from "zustand";

const useCountStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

set((state) => ({ ...state, count: state.count + 1 }));

// 스프레드 연산을 작성치 않아도 됨
set((state) => ({ count: state.count + 1 }));
```

- 중첩된 객체가 아닐시 `...` 스프레드 연산을 사용치 않아도 된다.

#### 중첩 객체

```ts
import { create } from "zustand";

const useCountStore = create((set) => ({
  nested: { count: 0 },
  inc: () =>
    set((state) => ({
      nested: { ...state.nested, count: state.nested.count + 1 },
    })),
}));
```

- 다만 중첩 객체시에는 `...` 사용이 필요하다
- 다만 위 병합동작을 비활성화를 알려면 아래와 같이 정의할 수 있다.

```ts
set((state) => newState, true);
```
