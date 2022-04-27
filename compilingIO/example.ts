const buf = new Uint8Array(1024);

const n = await Deno.stdin.read(buf) || undefined;

// console.log(n)

// console.log(new TextDecoder().decode(n))

console.log("READ:", new TextDecoder().decode(buf.subarray(0, n)));
console.log(n);

const p = Deno.run({ cmd: [ "echo", "hello world" ], stderr: 'piped', stdout: 'piped' });


const [status, stdout, stderr] = await Promise.all([
 p.status(),
 p.output(),
 p.stderrOutput()
]);
p.close();

console.log(status);
console.log(new TextDecoder().decode(stdout));
console.log(stderr);