
const fs = require('fs'),
    axios = require('axios'),
    drvideo = require('denmark-dr-stream')
    ;

const slugs = require('./downloads.json').dr;
for(var slug of slugs) {
    if(fs.existsSync(`./downloads/${slug}.mp4`)) {
        console.log(`Already downloaded ${slug}`);
        continue
    }

    console.log(`Downloading ${slug}`);

    var url = `https://www.dr.dk/mu/programcard/expanded/${slug}`;
    axios.get(url).then(response => {
        var obj = {
            name: slug,
            urn: response.data.Data[0].Urn
        };
        return obj;
    }).then(data => {
        var dest = `./downloads/${data.name}.mp4`;
        drvideo(data.urn).pipe(fs.createWriteStream(dest))
    })
    .catch(err => console.warn(`Cannot download ${slug} due to ${err}`));
}
