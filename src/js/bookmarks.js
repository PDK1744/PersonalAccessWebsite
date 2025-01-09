const websiteLinks = [
    {
        name: "Anna's Archive",
        category: "Books",
        url: "https://annas-archive.org/"
    },
    {
        name: "Github",
        category: "Coding Tool",
        url: "https://github.com/"
    },
    {
        name: "Dashboard Inspo",
        category: "Coding Tools",
        url: "https://www.observely.app/board/f3c97523-f03a-4f4a-9331-6c79a7fa8b5d"
    },
];

function populateBookmarksTable() {
    const tbody = document.getElementById('bookmark-table');

    websiteLinks.forEach(site => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <th scope="row">${site.name}</th>
        <td>${site.category}</td>
        <td><a href="${site.url}" target="_blank">${site.name}</a></td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', populateBookmarksTable);