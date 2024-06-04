import { CAMBRIDGE, REVERSO, GOOGLE_TRANSLATE, GOOGLE_IMAGE } from '../constants/index.js';

const typeDictionary = {
    CAMBRIDGE: (q) => `https://dictionary.cambridge.org/dictionary/english-russian/${q}`,
    REVERSO: (q) => `http://context.reverso.net/translation/english-russian/${q}`,
    GOOGLE_TRANSLATE: (q) => `https://translate.google.com/#view=home&op=translate&sl=en&tl=ru&text=${q}`,
    GOOGLE_IMAGE: (q) =>
        `https://www.google.com/search?hl=en&gl=ar&tbm=isch&source=hp&biw=1920&bih=947&ei=k7OYX-KXN_aP9PwPz4eMqAM&q=${q}&oq=${q}&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQvgpYqg5gnw9oAHAAeACAAZ0BiAHwBJIBAzAuNJgBAKABAaoBC2d3cy13aXotaW1nsAEA&sclient=img&ved=0ahUKEwiirY7R_NXsAhX2B50JHc8DAzUQ4dUDCAc&uact=5`,
};

export function getLink(type, query) {
    const existingTypes = [CAMBRIDGE, REVERSO, GOOGLE_TRANSLATE, GOOGLE_IMAGE];
    if (!existingTypes.includes(type)) {
        console.warn('Unknown type: ' + type);
        return '';
    }

    return typeDictionary[type](query);
}
