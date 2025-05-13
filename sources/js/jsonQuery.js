const scope = document.currentScript.getAttribute('scope'); 
const key = document.currentScript.getAttribute('key'); 
const iteration = document.currentScript.getAttribute('iteration'); 
fetch('/sources/distribution.json')
.then(response => response.json())
.then(data => {
    const ul = document.getElementById("page-list");
    const h1 = document.createElement('h1');
    h1.appendChild(document.createElement("meta-title")).textContent =
    key
    for (const file of data[scope][key]) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = file.path;
        a.textContent = file.title;
        li.appendChild(document.createElement("list-sort")).textContent =
        file.sort
        li.append(" - ");
        li.appendChild(a);
        li.appendChild(document.createElement("list-tags")).textContent =
        file.tags.join(",   ")
        li.appendChild(document.createElement("list-desc")).textContent =
        file.description
        ul.appendChild(li);
    }

})
.catch(error => console.error('Error fetching JSON:', error));