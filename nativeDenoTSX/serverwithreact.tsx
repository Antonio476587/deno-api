/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";
import { h, ssr, tw } from "https://crux.land/nanossr@0.0.1";

// This is an example of server side rendering using https://nanojsx.github.io/
// and https://twind.dev for styling. Hosted on https://deno.com/deploy.

const Hello = (props: { name: string }) => (
  <div class={tw`bg-blue-100 flex h-screen`}>
    <h1 class={tw`text-8xl text-blue-500 m-auto mt-20`}>
      Hello {props.name}!
    </h1>
  </div>
);

await listenAndServe(":8080", (req: Request) => {
  const url = new URL(req.url);
  console.log("Hi request to", url.href);
  const name: string = url.searchParams.get("name") ?? "Deno";
  const resp = ssr(() => <Hello name={name} />);
  return resp;
});
