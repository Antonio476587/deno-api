/// <reference no-default-lib="true" />
/// <reference lib="deno.worker" />

console.log("hello world!");

self.onmessage = (e) => {
    console.log(e.data);
    self.postMessage("Hola igual");
    self.close();
}

