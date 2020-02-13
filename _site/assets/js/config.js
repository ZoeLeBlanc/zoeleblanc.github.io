var config = {
    style: 'mapbox://styles/zoe-leblanc/ck3yyx58y3ktt1cpvpjttmgal',
    accessToken: 'pk.eyJ1Ijoiem9lLWxlYmxhbmMiLCJhIjoiY2szajYwbmtsMGZvcDNtbG1oNWl4NWcxcyJ9.o45qxRTA46ZxT7aOpki0wA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: '  ',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [0.00000, 0.00000],
                zoom: 1.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'geocode-1958-dec2019',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'geocode-1958-dec2019',
                    opacity: 0
                }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [0.00000, 0.00000],
                zoom: 1.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'geocode-1960-dec2019',
                    opacity: 0.5
                }],
            onChapterExit: [{
                layer: 'geocode-1960-dec2019',
                opacity: 0
            }]
        }
    ]
};
