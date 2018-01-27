
const fs = require('fs'),
    axios = require('axios'),
    drvideo = require('denmark-dr-stream')
    ;

const slugs = require('./downloads.json').dr;
var promises = slugs.map(slug => {
    console.log(`Downloading ${slug}...`);

    var url = `https://www.dr.dk/mu/programcard/expanded/${slug}`;
    axios.get(url).then(response => {
        var dataObj = response.data.Data[0]
        fs.writeFileSync(`./downloads/${slug}.json`, JSON.stringify(dataObj || response, null, 4));
        if( !dataObj) {
            throw `could not download ${slug} `;
        }
        return {
            name: dataObj.Slug,
            urn: dataObj.Urn
        };
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