async function handler1(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    await requestEvent.respondWith(
      new Response(
        "Hello world tio!",
        {
          status: 200,
        },
      ),
    );
  }
}

async function handler2(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  while (true) {
    try {
      const requestEvent = await httpConn.nextRequest();
      await requestEvent?.respondWith(
        new Response(
          "Hola mundo",
          {
            status: 500,
          },
        ),
      );
    } catch (e) {
      console.log(e);
      break;
    }
  }
}

try {
  const server = Deno.listen({ port: 3000 });


  // FOR LOOP WAY
/*   for await (const conn of server) {
    // handler2(conn);
    // handler1(conn)
  } */

  // WHILE WAY
/*   while (true) {
      try {
          const conn = await server.accept();
    // handler2(conn);
    // handler1(conn)
      } catch (e) {
          console.log(e);
          break;
      }
  } */
} catch (e) {
  console.log(e);
}
