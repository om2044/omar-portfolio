import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { extname, resolve, sep } from "node:path";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".woff": "font/woff", ".woff2": "font/woff2", ".png": "image/png", ".ico": "image/x-icon" };

createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", "http://127.0.0.1");
    let path = resolve(root, "." + decodeURIComponent(url.pathname));
    if (path !== resolve(root) && !path.startsWith(resolve(root) + sep)) {
      response.writeHead(403).end(); return;
    }
    let status = 200;
    try {
      if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
      await stat(path);
    } catch {
      status = 404;
      path = resolve(root, "404.html");
    }
    const data = await readFile(path);
    response.writeHead(status, { "Content-Type": types[extname(path)] ?? "application/octet-stream", "Content-Length": data.length });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(500).end("Build the static site first with npm run build:pages.");
  }
}).listen(4173, "127.0.0.1", () => console.log("Static preview: http://127.0.0.1:4173"));
