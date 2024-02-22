var config = {
    style: 'mapbox://styles/chinmayk97/clseqi9pe01te01r462iv3tii',
    accessToken: 'pk.eyJ1IjoiY2hpbm1heWs5NyIsImEiOiJjbHNkY2oxcW0wNmxmMmxvNDEwc2M1ZjU2In0.L9L3ThxOEH24QuIpfzsrMA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Guardians of Hope',
    subtitle: 'In the Kedarnath 2013 flash flood, the Indian Armed Forces showcased unparalleled bravery in Operation Surya Hope and Operation Rahat. These missions, executed by the Army and Air Force, rescued thousands, embodying the spirit of sacrifice and service amidst the devastation.',
    byline: 'By Chinmay Karan under-guidance of Prasantha Dutta',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Floods Strike Northern India',
            // image: './path/to/image/source.png',
            description: 'India was struck by a series of devastating floods in the northern region. These floods wreaked havoc, causing widespread destruction and displacing thousands of people from their homes.',
            location: {
                center: [78.49362, 25.23222],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                {
                    layer: 'uttarakhand-border',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Devastation Unfolds',
            // image: './path/to/image/source.png',
            description: 'The relentless downpour transformed serene valleys into raging torrents, sweeping away homes, bridges, and lives. The rugged terrain of Uttarakhand amplified the disaster, posing formidable challenges to rescue and relief operations.',
            location: {
                center: [79.21125, 30.19887],
                zoom: 7.88,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'uttarakhand-border',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'uttarakhand-border',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Wrath Descends',
            // image: './path/to/image/source.png',
            description: 'The fury of the floods was unleashed in full force, inundating the kedarnath town and its surroundings with a deluge of water and debris. Streets once bustling with pilgrims were transformed into channels of destruction, as buildings crumbled under the relentless assault of natures wrath.',
            location: {
                center: [79.06526, 30.74154],
                zoom: 14,
                pitch: 74.5,
                bearing: -14.4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Devastation Epicenters: Rambada and Gaurikund',
            // image: './path/to/image/source.png',
            description: 'Rambada, a vital stop for pilgrims en route to Kedarnath, lay in ruins, its structures reduced to rubble by the force of the floods. Similarly, Gaurikund, a bustling pilgrimage site, bore the brunt of the catastrophe, its once vibrant streets now strewn with debris and despair.',
            location: {
                center: [79.03969, 30.66717],
                zoom: 14,
                pitch: 74.5,
                bearing: 36
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
