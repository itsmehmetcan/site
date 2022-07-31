const fetch = require('isomorphic-unfetch')

let key1 = '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';
let key2 = '7kIiTmNtBqj2sOC0S0zxD';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/mehmetcankaygusuz/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();

    
    try {
        res.send([..._])
    } catch {
        res.status(500);
    }
}
