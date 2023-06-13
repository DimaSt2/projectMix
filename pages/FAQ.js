const title = document.querySelectorAll('.title');

function showContent (e) {
    const content = e.target.nextElementSibling;
    content.classList.toggle('content-active');
}

title.forEach((el) => {
    el.addEventListener ('click', showContent)
});

