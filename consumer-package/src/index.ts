
const x = 0 as any;
async function main() {
  type Wasm = Awaited<typeof import("wasm-package")>;
  type WasmMatch = Wasm["WasmMatch"];

  const package = await import("wasm-package");
    const match = new package.WasmMatch(x, x, x, x, x, x, x, x, x);
    const typeAsserted: WasmMatch = match
}

main();
