import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({ auth: GITHUB_API_TOKEN });
await octokit.request('GET /users/{username}/events', {
    username: 'CozyLaptop'
})
.then(value => console.log(value.data[0]));