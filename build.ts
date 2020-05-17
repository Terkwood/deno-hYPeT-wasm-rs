#!/usr/bin/env -S deno run --allow-run

await Deno.run({ "cmd": ["wasm-gc", "target/wasm32-unknown-unknown/debug/deno_h_ype_t_rs.wasm"]})

