
const fs = require('fs'),
    axios = require('axios'),
    drvideo = require('denmark-dr-stream')
    ;

const slugs = require('./downloads.json').dr;
var promises = slugs.map(slug => {
    console.log(`Downloading ${slug}...`);

    var url = `https://www.dr.dk/mu/programcard/expanded/${slug}`;
    axios.get(url).then(response => {
        fs.writeFileSync(`./downloads/${slug}.json`, JSON.stringify(response.data, null, 4));
        if( !response.data.Data[0]) {
            throw `could not download ${slug} `;
        }
        var obj = {
            name: response.data.Data[0].Slug,
            urn: response.data.Data[0].Urn
        };
        return obj;
    }).then(data => {
        if(data) {
            var dest = `./downloads/${data.name}.mp4`;
            if(fs.existsSync(dest)) {
                console.log(`Already downloaded ${slug}`);
            } else {
                drvideo(data.urn).pipe(fs.createWriteStream(dest));
            }
            return data;
        }
    })
    .then(data => console.log(`Done downloading ${data.name}`))
    .catch(err => console.warn(`Cannot download ${slug} due to ${err}`));
});
var p = Promise.all(promises);