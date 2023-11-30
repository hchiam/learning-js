Bun.serve({
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html"))
      return new Response(Bun.file(import.meta.dir + "/index.html"));

    if (url.pathname.endsWith("loadScript.js"))
      return new Response(Bun.file(import.meta.dir + "/../loadScript.js"));

    if (url.pathname.endsWith("/other.js"))
      return new Response(Bun.file(import.meta.dir + "/other.js"));

    // all other routes
    return new Response("Hello!");
  },
});
