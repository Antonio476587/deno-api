/// <reference no-default-lib="true" />
/// <reference lib="deno.worker" />

console.log("hello world from ts worker!");

self.onmessage = async (e: any): Promise<void> => {
  const { filename } = e.data;
  const file = await Deno.readTextFile(filename);
  console.log(file);
  self.close();
};

