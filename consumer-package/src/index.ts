async function main() {
  const p = await import("wasm-package");

  // uncomment the below to fix
  // await (p as any).__tla

  // fails
  p.install_panic_logger()
}

main();
