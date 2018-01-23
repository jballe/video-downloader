module.exports = function(grunt) {

    grunt.initConfig({
        video_slicer: {
            fra_julespecial: {
                src: 'downloads/onkel-reje-og-boernenes-brevkasse-12.mp4',
                dest: 'downloads/onkel-reje-',
                options: {
                    sections: [
                        {
                            name: 'i-bad',
                            time: [(3*60 + 57), (5*60 + 45)],
                            codecs: ['mp4']
                        },
                        {
                            name: 'piger-med-ballade',
                            time: [(12*60 + 44), (14*60 + 45)],
                            codecs: ['mp4']
                        },
                        {
                            name: 'godnat',
                            time: ['00:19:21'],
                            codecs: ['mp4']
                        }
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-video-slicer');
    grunt.registerTask('default', ['video_slicer'])

};