import 'dotenv';

export const A_TARGET = '_blank';

export const CAMBRIDGE = 'CAMBRIDGE';
export const REVERSO = 'REVERSO';
export const GOOGLE_TRANSLATE = 'GOOGLE_TRANSLATE';
export const GOOGLE_IMAGE = 'GOOGLE_IMAGE';

export const HTTP_PORT = Number(process.env.HTTP_PORT) || 3000;
export const VOICE_PATH = process.env.VOICE_PATH || './voice';
