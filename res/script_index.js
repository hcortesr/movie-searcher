const sect_1 = document.getElementById('s1');


sect_1.addEventListener('wheel', (event) => {
    event.preventDefault();
    sect_1.scrollLeft += event.deltaY;
    console.log(sect_1.scrollLeft);
})

