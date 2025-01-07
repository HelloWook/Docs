### DI를 이용한 종속성 주입 방법

```TS

// 상품 상세 페이지에서 쓸 스토어
interface ProductProps {
  productId: string;
  initialPrice: number;
}

interface ProductState extends ProductProps {
  quantity: number;
  updateQuantity: (val: number) => void;
  getTotalPrice: () => number;
}

// 1. 스토어 생성기 만들기
const createProductStore = (initProps: ProductProps) => {
  return createStore<ProductState>()((set, get) => ({
    // props로 받은 초기값 주입
    productId: initProps.productId,
    initialPrice: initProps.initialPrice,
    quantity: 1,
    updateQuantity: (val) => set({ quantity: val }),
    getTotalPrice: () => get().initialPrice * get().quantity
  }))
}

// 2. Context 만들기
const ProductContext = createContext<ReturnType<typeof createProductStore> | null>(null)

// 3. Provider 컴포넌트 만들기
function ProductProvider({
  children,
  productId,
  initialPrice
}: PropsWithChildren<ProductProps>) {
  const storeRef = useRef<ReturnType<typeof createProductStore>>()

  if (!storeRef.current) {
    storeRef.current = createProductStore({
      productId,
      initialPrice
    })
  }

  return (
    <ProductContext.Provider value={storeRef.current}>
      {children}
    </ProductContext.Provider>
  )
}
```

#### 사용처

```ts
// 상품 상세 페이지
function ProductPage() {
  return (
    // props로 초기값 주입
    <ProductProvider productId="product_1" initialPrice={15000}>
      <ProductDetail />
      <OrderButton />
    </ProductProvider>
  );
}

// 수량 선택하는 컴포넌트
function ProductDetail() {
  // 커스텀 훅으로 깔끔하게 사용
  const quantity = useProductStore((s) => s.quantity);
  const updateQuantity = useProductStore((s) => s.updateQuantity);

  return (
    <input
      type="number"
      value={quantity}
      onChange={(e) => updateQuantity(Number(e.target.value))}
    />
  );
}

// 주문 버튼 컴포넌트
function OrderButton() {
  const totalPrice = useProductStore((s) => s.getTotalPrice());

  return <button>{totalPrice}원 결제하기</button>;
}
```

- `context`를 이용하여 props로 받아 스토어 초기화가 가능하다
