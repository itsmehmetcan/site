const fetch = require('isomorphic-unfetch')

let key1 = 'g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';
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
