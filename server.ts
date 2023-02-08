import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const PORT = 8080;
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
  const ext = path.extname(filePath);
  const contentType = getContentType(ext);

  if (!contentType) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 Internal Server Error");
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf-8");
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

function getContentType(ext: string) {
  switch (ext) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "application/javascript";
    case ".json":
      return "application/json";
    case ".png":
      return "image/png";
    case ".jpg":
      return "image/jpeg";
    default:
      return null;
  }
}
