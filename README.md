This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Styles

1. Global concepts

```bash
const t = useTranslation()
const router = useRouter()
```

2. Global States

```bash
const state = useAppStore()
```

3. Queries, fetching data or custom Hooks

```bash
const {data} = useQuery()
const customData = useCustomHook()
```

4. State, ref and data

```bash
const [state,setState] = useState()
const ref = useRef()
const data = state + 5
```

5. Functions 

```bash
const func = () => {}
```

6. LifeCycle Hooks

```bash
useEffect(() => {},[])
```
