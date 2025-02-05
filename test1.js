let url = new URL('http://www.omdbapi.com/?apikey=b939813f&');
url.searchParams.append("s", "hero");


fetch(url.toString(), {
    method: 'get',
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data['Search'].length)
    })

