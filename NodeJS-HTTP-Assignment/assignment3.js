const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/student' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const student = {
            id: 101,
            name: "Kunal Lubhana",
            course: "B.Tech",
            semester: 4,
            city: "Mumbai"
        };
        res.end(JSON.stringify(student, null, 4));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
