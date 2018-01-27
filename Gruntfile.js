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
                            time: [(3*60 + 59), (5*60 + 44)],
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
            },
            "fra_1": {
                src: 'downloads/onkel-reje-og-boernenes-brevkasse.mp4',
                dest: 'downloads/onkel-reje-',
                options: {
                    sections: [{
                        name: "mormor",
                        time: [(3*60 + 02), (4*60 + 55)],
                        codecs: ['mp4']
                    }]
                }
            },
            "fra_11": {
                src: 'downloads/onkel-reje-og-boernenes-brevkasse-11.mp4',
                dest: 'downloads/onkel-reje-',
                options: {
                    sections: [{
                        name: "danmarks-heldigste-dreng",
                        time: [(3*60 + 28), (5*60 + 27)],
                        codecs: ['mp4']
                    }]
                }
            },
            "fra_7": {
                src: 'downloads/onkel-reje-og-boernenes-brevkasse-7.mp4',
                dest: 'downloads/onkel-reje-',
                options: {
                    sections: [{
                        name: "sangen",
                        time: [(3*60 + 00), (5*60 + 41)],
                        codecs: ['mp4']
                    }]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-video-slicer');
    grunt.registerTask('default', ['video_slicer'])

};