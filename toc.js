var pages = Array.prototype.slice.call(document.querySelectorAll('article > ol > li'), 0),
    navEl = document.createElement('nav'),
    tocEl = document.createElement('ol');

pages.forEach(function(itm, idx) {
    var listItem = document.createElement('li'),
        anchor = document.createElement('a'),
        id = 'toc_' + idx;

    itm.setAttribute('id', id);
    anchor.setAttribute('href', '#' + id);
    anchor.innerText = itm.querySelector('p').innerText;

    listItem.appendChild(anchor);
    tocEl.appendChild(listItem);

    console.log(itm, idx);
});

navEl.appendChild(tocEl);
navEl.setAttribute('id', 'toc');
document.querySelector('.post').insertBefore(navEl, document.querySelector('article'));
