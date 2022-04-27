function compute(value: number): number {
    for (let i = 0; i < value; i++) {
        // time.Sleep(time.Second)
        Deno.sleepSync(1000);
        console.log(i);
    }
    return value;
}

(async function main() {
    console.log("Like a Goroutine")

    await compute(10);
    await compute(10);

    const buf = new Uint8Array(1024);
    const n: number | undefined = await Deno.stdin.read(buf) || undefined;
    console.log("READ:", new TextDecoder().decode(buf.subarray(0, n)));
})()