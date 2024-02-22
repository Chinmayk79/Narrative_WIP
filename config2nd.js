var config = {
    accessToken: 'pk.eyJ1IjoiY2hpbm1heWs5NyIsImEiOiJjbHJmeW13cWkwN3czMmpvNm5xNnpvd2d1In0.em-Xsl9oWwFW2qP_mWZxOw',
    style: 'mapbox://styles/mapbox/streets-v10',
    theme: 'light',
    
    alignment: 'left',
    // toptitle: 'Day to Day action',
    title: 'Day to Day action',
    byline: 'How indian forces rescued Kedarnath region',
    description: '<p> Here you wil get the idea of day to day action and what role indian rescue forces played after 2013 Kedarnath flash flood tragedy </p>',
    footer: 'This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the New York Times (<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">here</a> and <a href="https://www.nytimes.com/aponline/2020/04/02/us/ap-us-virus-outbreak-hardest-hit.html">here</a>), <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a>',

    chapters: [
        {
            id: 'Alert',
            title: '17 - Check at Kedarnath, there is something wrong.',
            image: 'images/June_17_1.jpeg',
            // origin: 'sadas',
            // destination: 'fdsf',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: '<p>Captain Bhupinder, 42, a Bell 407 helicopter pilot ferrying pilgrims between Phata and Kedarnath, got a call from Rakesh Sharma, principal secretary, civil aviation. "Check at Kedarnath, there is something wrong".</p>',
            data: [
                {
                    title: "indian army",
                    count: "1000"
                },
                {
                    title: "indian airforce",
                    count: "100"
                },

            ],
            location: {
                center: [79.04431727967254, 30.584494562858882],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData2',
                    opacity: 0.5
                },
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'Magnitude',
            title: '17 - Magnitude of devatation unfolds',
            image: 'images/June_17_2.jpeg',
            // origin: 'Phata',
            // destination: 'Kedarnath',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: '<p>At around 6 p.m., there was a small window of opportunity, of barely 30 minutes. The weather was still not clear and they were not officially supposed to fly post 1800 hours, but Bhupinder, an ex-IAF (Indian Air Force) Cheetah pilot, and his co-pilot Captain Vinod Angad, decided to risk it.</p>',
            location: {
                center: [79.05508245272331, 30.694715922872508],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData2',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'iafday1',
            title: 'Jolly-grant made a centre of operations',
            image: 'images/June_17_3.jpeg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: '<p>Rescue parties started taking out people from Pithoragarh, dharchula, joshimath, rampur, bageshwar, shimla.</p>',
            location: {
                center: [78.3809008293437, 30.266939949896837],
                zoom: 7.9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData2',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData',
                    opacity: 0.5
                }
            ]
        },

        {
            id: 'iafday2',
            title: 'C-370J recon flight',
            image: 'images/June_17_3.jpeg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: '<p>IAF C-130J flew over flood affected areas in Dehradun, Uttarkashi, Kedarnath and Joshimath to identify critical areas in the region.</p>',
            location: {
                center: [78.3809008293437, 30.266939949896837],
                zoom: 7.9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData2',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData',
                    opacity: 0.5
                }
            ]
        },

        {
            id: 'iafday3',
            title: 'Dharasu and Gauchar made forward positions',
            image: 'images/June_17_3.jpeg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: '<p>Flights from sarsava to dharasu and gauchar</p>',
            location: {
                center: [78.3809008293437, 30.266939949896837],
                zoom: 7.9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData2',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData',
                    opacity: 0.5
                }
            ]
        },

        {
            id: 'iafday4',
            title: 'Dharasu and Gauchar made forward positions',
            image: 'images/June_17_3.jpeg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: '<p>All Rescue parties started taking out people from Pithoragarh, dharchula, joshimath, rampur and take them to dharasu and gauchar</p>',
            location: {
                center: [78.3809008293437, 30.266939949896837],
                zoom: 7.9,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData2',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'areaData',
                    opacity: 0.5
                },
                {
                    layer: 'areaData',
                    opacity: 0.5
                }
            ]
        }
    ]
};

