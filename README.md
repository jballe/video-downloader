# Video downloader

This is just a small tool I use to download videos from Youtube and dr.dk to have videos offline for travel etc.

It is basically based on the npm packages [denmark-dr-stream](https://www.npmjs.com/package/denmark-dr-stream) and [ytdl-core](https://www.npmjs.com/package/ytdl-core). I also use [grunt-video-slicer](https://www.npmjs.com/package/grunt-video-slicer) to clip certain popular sequences to its own videos.

Afterwards I use iTunes to copy the files to an iPad.

In ``downloads.json`` the videos to download are specified. Start downloading by calling:

```sh
npm install
npm start
```
