function searchAnnasArchive() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) {
        console.log('Search input not found');
        return;
    };

    const query = searchInput.value.trim();
    const encodedQuery = encodeURIComponent(query);
    const url = `https://annas-archive.org/search?q=${encodedQuery}`;

    window.open(url, '_blank');
}
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-button');
    searchBtn.addEventListener('click', searchAnnasArchive);
});
