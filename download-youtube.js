const 
    fs = require('fs'), 
    ytdl = require('ytdl-core')
    downloads = require('./downloads.json').youtube
    ;

var promises = Object.keys(downloads).map(key => {
    var url = downloads[key];
    var dest = `./downloads/${key}.mp4`;
    if(fs.existsSync(dest)) {
        console.log(`Already downloaded ${key}`);
        return;
    }
    console.log(`Downloading ${key}...`)
    
    return ytdl(url, { filter: (format) => format.container === 'mp4' })
        .pipe(fs.createWriteStream(dest));
});
Promise.all(promises);
