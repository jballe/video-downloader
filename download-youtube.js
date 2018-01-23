const 
    fs = require('fs'), 
    ytdl = require('ytdl-core')
    downloads = require('./downloads.json').youtube
    ;

for(var key in downloads) {
    var url = downloads[key];
    var dest = `./downloads/${key}.mp4`;
    if(!fs.existsSync(dest)) {
        ytdl(url, { filter: (format) => format.container === 'mp4' })
            .pipe(fs.createWriteStream(dest));
    }
}
