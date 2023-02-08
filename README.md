# ts-fileserv
Basic file server implemented in TypeScript!
This server uses the http and fs modules of Node.js to serve files. It listens to incoming requests on port 8080, and serves files from the public directory. If the requested file is not found or there is an error reading the file, the server returns a 404 Not Found or 500 Internal Server Error response, respectively.

Note: This code assumes that you have a public directory in the same location as your .ts file with at least an index.html file inside it.
