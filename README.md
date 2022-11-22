# Wtf is going on?

Run `pnpm i`, then `pnpm run test`.
You'll see an error like

```ts
bindings.8c52ebb7.js:2 Uncaught (in promise) ReferenceError: Cannot access 'pn' before initialization
    at Module.rn (bindings.8c52ebb7.js:2:972)
    at y (index.20ef1771.js:1:1507)
```

This is because the top-level-await plugin is not emitting the `await __tla` calls after the `await import("wasm-package")`.
See `consumer-package/src/index.ts` for a hacky `await __tla` to fix it.
