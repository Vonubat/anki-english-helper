document.getElementById('boxu').onkeydown = function (e) {
    searchBy(e);
};

const aTarget = '_blank';

const CAMBRIDGE = 'CAMBRIDGE';
const REVERSO = 'REVERSO';
const GOOGLE_TRANSLATE = 'GOOGLE_TRANSLATE';
const GOOGLE_IMAGE = 'GOOGLE_IMAGE';

const typeDictionary = {
    CAMBRIDGE: (q) => `https://dictionary.cambridge.org/dictionary/english-russian/${q}`,
    REVERSO: (q) => `http://context.reverso.net/translation/english-russian/${q}`,
    GOOGLE_TRANSLATE: (q) => `https://translate.google.com/#view=home&op=translate&sl=en&tl=ru&text=${q}`,
    GOOGLE_IMAGE: (q) =>
        `https://www.google.com/search?hl=en&gl=ar&tbm=isch&source=hp&biw=1920&bih=947&ei=k7OYX-KXN_aP9PwPz4eMqAM&q=${q}&oq=${q}&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQvgpYqg5gnw9oAHAAeACAAZ0BiAHwBJIBAzAuNJgBAKABAaoBC2d3cy13aXotaW1nsAEA&sclient=img&ved=0ahUKEwiirY7R_NXsAhX2B50JHc8DAzUQ4dUDCAc&uact=5`,
};

function getLink(type, query) {
    return typeDictionary[type](query);
}

function searchBy(e) {
    if (e.which == 13) {
        const q = encodeURIComponent(document.getElementById('boxu').value);

        window.open(getLink(CAMBRIDGE, q), aTarget);
        window.open(getLink(REVERSO, q), aTarget);
        window.open(getLink(GOOGLE_TRANSLATE, q), aTarget);
        window.open(getLink(GOOGLE_IMAGE, q), aTarget);

        document.getElementById('boxu').value = '';
    }
}
