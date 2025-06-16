const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Directory where files will be managed
const baseDir = path.join(__dirname, 'files');

// Ensure 'files' directory exists
if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Allow only GET requests
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        return res.end('Only GET method is allowed');
    }

    // Endpoint: /create?name=filename.txt&content=HelloWorld
    if (pathname === '/create') {
        const filePath = path.join(baseDir, query.name || '');
        if (!query.name || !query.content) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('Missing file name or content');
        }

        fs.writeFile(filePath, query.content, (err) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error creating file');
            }
            res.writeHead(200);
            res.end(`File '${query.name}' created successfully`);
        });
    }

    // Endpoint: /read?name=filename.txt
    else if (pathname === '/read') {
        const filePath = path.join(baseDir, query.name || '');
        if (!query.name) {
            res.writeHead(400);
            return res.end('Missing file name');
        }

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('File not found');
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    }

    // Endpoint: /delete?name=filename.txt
    else if (pathname === '/delete') {
        const filePath = path.join(baseDir, query.name || '');
        if (!query.name) {
            res.writeHead(400);
            return res.end('Missing file name');
        }

        fs.unlink(filePath, (err) => {
            if (err) {
                res.writeHead(404);
                return res.end('File not found or error deleting');
            }
            res.writeHead(200);
            res.end(`File '${query.name}' deleted successfully`);
        });
    }

    // Default route
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint not found');
    }
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
