const serverUrl = new URL(window.location.href);
serverUrl.port++;

document.getElementById('boxu').onkeydown = function (e) {
    if (e.which === 13) {
        const q = encodeURIComponent(document.getElementById('boxu').value);
        serverUrl.searchParams.set('query', q);
        console.log(serverUrl);
        fetch(serverUrl)
            .then((data) => data.json())
            .then((value) => console.log('value', value))
            .catch((err) => {});
        // searchBy(q).then(() => (document.getElementById('boxu').value = ''));
    }
};

// window.open(getLink(CAMBRIDGE, q), aTarget);
// window.open(getLink(REVERSO, q), aTarget);
// window.open(getLink(GOOGLE_TRANSLATE, q), aTarget);
// window.open(getLink(GOOGLE_IMAGE, q), aTarget);
