const url = 'https://api.github.com/users/CozyLaptop/events';
let user = "CozyLaptop"
fetch(url, {headers: {'Authorization': GITHUB_API_TOKEN}})
    .then(response => response.json()).then(response => {
        console.log(response[0])
})