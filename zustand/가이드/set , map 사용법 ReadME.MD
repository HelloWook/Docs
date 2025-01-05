### SET MAP 사용법

```TS
import { create } from 'zustand'

const useFooBar = create(() => ({ foo: new Map(), bar: new Set() }))

function doSomething() {
  // doing something...

  // If you want to update some React component that uses `useFooBar`, you have to call setState
  // to let React know that an update happened.
  // Following React's best practices, you should create a new Map/Set when updating them:
  useFooBar.setState((prev) => ({
    foo: new Map(prev.foo).set('newKey', 'newValue'),
    bar: new Set(prev.bar).add('newKey'),
  }))
}
```

- `Map` , `Set`은 객체안에 정의되어야하고 `setState` 를 이용해 이들을 조작할 수 있다.
