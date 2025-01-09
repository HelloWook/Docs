### persist

- `persist`를 이용하면 `loacalstorage`와 같은 동기 저장소나 `indexdb`같은 비동기 저장소를 이용할 수 있따.

```ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "food-storage", // 스토리지 이름
      storage: createJSONStorage(() => sessionStorage), // 디폴트 스토리지는 로컬스토리지이다.
    }
  )
);
```

#### partialize

```
유형:(state: Object) => Object
```

- 일부 필드를 선택하거나 제외할 수 있습니다.

```ts
export const useBoundStore = create(
  persist(
    (set, get) => ({
      foo: 0,
      bar: 1,
    }),
    {
      // ...
      partialize: (state) => ({ foo: state.foo }),
    }
  )
);
```

#### onRehydrateStorage

- 저장소에 저장될떄 실행할 함수를 사용할 수 있다.

```ts
export const useBoundStore = create(
  persist(
    (set, get) => ({
      // ...
    }),
    {
      // ...
      onRehydrateStorage: (state) => {
        console.log("hydration starts");

        // 선택적
        return (state, error) => {
          if (error) {
            console.log("an error happened during hydration", error);
          } else {
            console.log("hydration finished");
          }
        };
      },
    }
  )
);
```

#### migration

- 버전을 지정할 수 있다. 이에 따라 이전 버전은 사용되지 않는다.

#### merge

- 깊은 병합을 수행하는 함수이다.

#### clearstorage

- 스토리지 값을 지웁니다.

#### createJSONStorage

- `getItem` , `setItem`, 속성을 갖는 저장 엔진을 반환하는 함수
- 이를 이용해 커스텀 직렬화 역직렬화가 가능하다

```ts
const customJSONStorage = createJSONStorage(() => localStorage, {
  reviver: (key, value) => {
    // 날짜 문자열을 Date 객체로 변환
    if (key === "lastUpdated") return new Date(value);
    return value;
  },
  replacer: (key, value) => {
    // Date 객체를 ISO 문자열로 변환
    if (value instanceof Date) return value.toISOString();
    return value;
  },
});

const useStore = create(
  persist(
    (set) => ({
      lastUpdated: new Date(),
      data: "some data",
    }),
    {
      name: "my-storage",
      storage: customJSONStorage,
    }
  )
);
```
