import { writeFile } from 'node:fs/promises';

import { getAudio, getLink } from '../services/index.js';

export class Controller {
    constructor(voicePath, links) {
        this.voicePath = voicePath;
        this.links = links;
    }

    async _saveAudio(query) {
        // const audio = await getAudio(query);
        // await writeFile(`${this.voicePath}/${query}.mp3`, audio, 'binary');
        console.log(`Audio content written to file: ${query}.mp3`);
    }

    async execute(query) {
        await this._saveAudio(query);

        return this.links.map((link) => getLink(link, query));
    }
}
