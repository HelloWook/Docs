### immer

-`immer` 미들웨어는 불변상태를 간편하게 처리할 수 있게 해준다.

- `js`객체 참조를 간편하게 도와준다

```ts
import { create } from "zustand";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

type State = {
  todos: Record<string, Todo>;
};

type Actions = {
  toggleTodo: (todoId: string) => void;
};

export const useTodoStore = create<State & Actions>((set) => ({
  todos: {
    "82471c5f-4207-4b1d-abcb-b98547e01a3e": {
      id: "82471c5f-4207-4b1d-abcb-b98547e01a3e",
      title: "Learn Zustand",
      done: false,
    },
    // ... 다른 todos
  },

  toggleTodo: (todoId: string) =>
    set((state) => ({
      todos: {
        ...state.todos,
        [todoId]: {
          ...state.todos[todoId],
          done: !state.todos[todoId].done,
        },
      },
    })),
}));
```

- 위처럼 해야할 것을

```ts
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

type State = {
  todos: Record<string, Todo>;
};

type Actions = {
  toggleTodo: (todoId: string) => void;
};

export const useTodoStore = create<State & Actions>()(
  immer((set) => ({
    todos: {
      "82471c5f-4207-4b1d-abcb-b98547e01a3e": {
        id: "82471c5f-4207-4b1d-abcb-b98547e01a3e",
        title: "Learn Zustand",
        done: false,
      },
      "354ee16c-bfdd-44d3-afa9-e93679bda367": {
        id: "354ee16c-bfdd-44d3-afa9-e93679bda367",
        title: "Learn Jotai",
        done: false,
      },
      "771c85c5-46ea-4a11-8fed-36cc2c7be344": {
        id: "771c85c5-46ea-4a11-8fed-36cc2c7be344",
        title: "Learn Valtio",
        done: false,
      },
      "363a4bac-083f-47f7-a0a2-aeeee153a99c": {
        id: "363a4bac-083f-47f7-a0a2-aeeee153a99c",
        title: "Learn Signals",
        done: false,
      },
    },
    toggleTodo: (todoId: string) =>
      set((state) => {
        state.todos[todoId].done = !state.todos[todoId].done;
      }),
  }))
);
```
