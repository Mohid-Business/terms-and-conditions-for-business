function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function agreeTerms() {
    const driveLink = getQueryParameter('link');
    if (driveLink) {
        window.location.href = driveLink;
    } else {
        alert("No Google Drive link provided.");
    }
}
