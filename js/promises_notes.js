const githubPromise = fetch('https://api.github.com/repositories');
const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');

Promise.all([githubPromise, bitbucketPromise])
    .then(function(data) {
        console.log(data);
        // here data is an array of the resolved values from each promise
        // we can now do something with both pieces of data
    })
    .catch(function(error) {
        // handle errors
    });