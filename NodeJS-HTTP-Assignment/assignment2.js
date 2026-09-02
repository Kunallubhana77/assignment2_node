const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Portal</title>
        </head>
        <body>
            <h1>Student Portal</h1>
            <hr>
            <p><strong>Name:</strong>Kunal Lubhana</p>
            <p><strong>Course:</strong> Full Stack Development</p>
            <p><strong>College:</strong>ITM</p>
            <p>Welcome to our Node.js application.</p>
        </body>
        </html>
    `;
    res.end(html);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
