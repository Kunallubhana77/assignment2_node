const http = require('http');

const generateHTML = (title, content) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <nav>
            <a href="/">Home</a> | 
            <a href="/about">About Me</a> | 
            <a href="/skills">Skills</a> | 
            <a href="/projects">Projects</a> | 
            <a href="/contact">Contact Details</a>
        </nav>
        <hr>
        <h1>${title}</h1>
        <div>${content}</div>
    </body>
    </html>
`;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(generateHTML('Home', '<p>Welcome to my Personal Portfolio Server!</p>'));
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(generateHTML('About Me', '<p>I am a passionate Full Stack Developer learning Node.js.</p>'));
    } else if (req.url === '/skills') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(generateHTML('Skills', '<ul><li>Node.js</li><li>JavaScript</li><li>HTML & CSS</li><li>React</li></ul>'));
    } else if (req.url === '/projects') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(generateHTML('Projects', '<p>Check out my projects on GitHub. This server is one of them!</p>'));
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(generateHTML('Contact Details', '<p>Email: student@example.com</p><p>Phone: 123-456-7890</p>'));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(generateHTML('404 - Page Not Found', '<p>Sorry, the page you are looking for does not exist.</p>'));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
