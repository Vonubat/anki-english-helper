import { resolve, dirname, extname } from 'node:path';
import { createServer } from 'node:http';
import { readFile } from 'node:fs';
import { parse as parseURL } from 'node:url';

import { Controller } from './controller/index.js';
import { HTTP_PORT, VOICE_PATH, CAMBRIDGE, REVERSO, GOOGLE_TRANSLATE, GOOGLE_IMAGE } from './constants/index.js';

const __dirname = resolve(dirname(''));

const mimeDictionary = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
};

export class AnkiHelper {
    constructor() {
        const links = [CAMBRIDGE, REVERSO, GOOGLE_TRANSLATE, GOOGLE_IMAGE];
        this.controller = new Controller(VOICE_PATH, links);
    }

    #createClient() {
        const server = createServer((req, res) => {
            const file_path = resolve(__dirname + (req.url === '/' ? '/src/client/index.html' : req.url));

            readFile(file_path, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }

                res.writeHead(200, {
                    'Content-Type': mimeDictionary[extname(file_path)] || 'text/plain',
                });

                res.end(data);
            });
        }).listen(HTTP_PORT, () => {
            console.log(
                `\nServer hosted on: \x1b[34mhttp://localhost:${HTTP_PORT}/\x1b[0m\nFor gracefully shutdown press Ctrl + C`
            );
        });

        process.on('SIGINT', () => {
            server.close(() => {
                console.log(`\n\x1b[33mServer is closed\x1b[0m`);
                process.exit(0);
            });
        });

        return this;
    }

    #createServer() {
        createServer((req, res) => {
            const { method, url } = req;
            const query = parseURL(url, true).query.query;
            console.log('query!!', query);
            if (method === 'GET') {
                res.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': `http://localhost:${HTTP_PORT}`,
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                });

                this.controller.execute(query).then((value) => {
                    res.end(
                        JSON.stringify({
                            value,
                        })
                    );
                });
            }
        }).listen(HTTP_PORT + 1);

        return this;
    }

    static run() {
        new AnkiHelper().#createClient().#createServer();
    }
}
