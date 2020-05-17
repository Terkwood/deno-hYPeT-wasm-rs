const FILE_NAME = "target/wasm32-unknown-unknown/debug/deno_h_ype_t_rs.wasm";
const wasmCode = await Deno.readFile(FILE_NAME);
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const {
  square,
} = wasmInstance.exports;

console.log(square(1));
console.log(square(2));
console.log(square(3));
console.log(square(4));
