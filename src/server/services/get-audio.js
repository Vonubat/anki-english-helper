import textToSpeech from '@google-cloud/text-to-speech';
import { writeFile } from 'node:fs/promises';

import { VOICE_PATH } from '../constants/index.js';

const voiceClient = new textToSpeech.TextToSpeechClient();

export async function getAudio(query) {
    const request = {
        input: { text: query },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
    };

    try {
        const [response] = await voiceClient.synthesizeSpeech(request);
        return response.audioContent;
    } catch (error) {
        console.error(error);
        console.warn('Cannot get audio for ' + query);
    }
}
