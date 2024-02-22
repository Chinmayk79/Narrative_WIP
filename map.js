/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

const places = [];
places['Phata'] = [79.0387267, 30.5776773];
places['Jollygrantairport'] = [78.459575, 30.291967];
places['Dharasu'] = [78.45957518, 30.6872076]
places['Gauchar'] = [79.1508467, 30.2898968]
places['SarsawaAirforcestation'] = [77.3984704, 30.0197627]
places['BhatindaAirforcestation'] = [75.24446907, 30.40108445]
places['Hindonairport'] = [77.65610191, 28.89262378]
places['Rampur'] =	[79.04307587, 30.62963732];
places['Shimla'] = [77.1734033, 31.1048145];
places['Pithoragarh'] = [80.2181884, 29.5828604];
places['Dharchula'] = [80.54650354, 29.99448645];
places['Bageshwar'] = [79.80942214, 30.03090205];
places['Joshimath'] = [79.58969559, 30.69445919];

places['Kedarnath'] = [79.0668943, 30.7346267];
places['Guptakashi'] = [79.0777138, 30.5229102];
places['Gaurikund'] = [79.0256581, 30.652913];
places['Badrinath'] = [79.4937634, 30.7433085];
places['Govindghat'] = [79.5617052, 30.618549];
places['Rambada'] = [79.0546186, 30.70577329];
places['Lambagad'] = [79.5192425, 30.65094809];







var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

// Main 'header' element
var header = document.createElement('div');

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerText = config.toptitle;
    header.appendChild(toptitle);
}
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}
if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}
if (config.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config.description;
    header.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h1');
        title.innerText = record.title;
        title.classList.add(alignments[record.alignment]); // Add alignment class based on chapter's alignment
        chapter.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        chapter.appendChild(imageCredit);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    // Sets the id for the vignette and adds the step css attribute
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container.appendChild(chapter);
    features.appendChild(container);




});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement('div');
// This assigns all the content to the footer element
if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer + '<br>' + config.footerAttribution;
    footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

// Instantiates the scrollama function
var scroller = scrollama();

// Number of steps to use in the arc and animation, more steps means
    // a smoother arc and animation, but too many steps will result in a
    // low frame rate
    const steps = 500;

function createRoute(pointA, pointB) {
    // A simple line from origin to destination.
    const route = {
        'type': 'FeatureCollection',
        'features': [
        {
        'type': 'Feature',
        'geometry': {
        'type': 'LineString',
        'coordinates': [places[pointA], places[pointB]]
        }
        }
        ]
        };

    // Calculate the distance in kilometers between route start/end point.
    const lineDistance = turf.length(route.features[0]);
    
    const arc = [];
    
    // Draw an arc between the `origin` & `destination` of the two points
    for (let i = 0; i < lineDistance; i += lineDistance / steps) {
    const segment = turf.along(route.features[0], i);
    arc.push(segment.geometry.coordinates);
    }
    
    // Update the route with calculated arc coordinates
    route.features[0].geometry.coordinates = arc;

    return route;
}

// A single point that animates along the route.
// Coordinates are initially set to origin.
const point = {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'Point',
    'coordinates': origin
    }
    }
    ]
    };

// Used to increment the value of the point measurement against the route.
let counter = 0;

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
    // This is the function that finds the first symbol layer
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

    // map.addSource('route', {
    //     'type': 'geojson',
    //     'data': route
    //     });

        map.addSource('point', {
            'type': 'geojson',
            'data': point
            });

            map.loadImage(
                'images/Heli_1.png',
                (error, image) => {
                if (error) throw error;
                 
                // Add the image to the map style.
                map.addImage('Heli_1', image);
                });

    // Add the first new layer
    // map.addLayer({
    //     'id': 'turnstileData',
    //     'type': 'circle',
    //     'source': {
    //         'type': 'geojson',
    //         'data': 'data/Kedarnath.geojson'
    //     },
    //     'paint': {
    //         'circle-color': ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
    //             -1, '#ff4400',
    //             -0.7, '#ffba31',
    //             -0.4, '#ffffff'
    //         ],
    //         'circle-stroke-color': '#4d4d4d',
    //         'circle-stroke-width': 0.5,
    //         'circle-radius': ['interpolate', ['exponential', 2], ['zoom'],
    //             10, ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
    //                 -1, 10,
    //                 -0.4, 1
    //             ],
    //             15, ['interpolate', ['linear'], ['get', 'ENTRIES_DIFF'],
    //                 -1, 25,
    //                 -0.4, 12
    //             ]
    //         ],
    //     }
    // }, 

    // map.loadImage(
    //     'images/Location.png', // Replace 'path_to_your_custom_icon.png' with the actual path to your image
    //     function (error, image) {
    //         if (error) throw error;
    //         map.addImage('custom-location-icon', image); // 'custom-location-icon' is the name you'll use to refer to your custom icon
    //     }
    // ),

    if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
    }

    // map.addLayer({
    //     'id': 'custom-location-marker',
    //     'type': 'symbol',
    //     'source': {
    //         'type': 'geojson',
    //         'data': {
    //             'type': 'FeatureCollection',
    //             'features': [
    //                 {
    //                     'type': 'Feature',
    //                     'geometry': {
    //                         'type': 'Point',
    //                         'coordinates': [79.066924421164, 30.735366799844712] // Replace longitude and latitude with your desired coordinates
    //                     }
    //                 }
    //             ]
    //         }
    //     },
    //     'layout': {
    //         'icon-image': 'custom-location-icon', // Use the name of your custom icon
    //         'icon-size': 0.4 // Adjust the size of your icon if needed
    //     }
    // }),

    // map.addLayer({
    //     'id': 'areaData',
    //     'type': 'fill',
    //     'source': {
    //         'type': 'geojson',
    //         'data': 'data/Kedarnath.geojson' // Replace 'your_area.geojson' with the path to your GeoJSON file
    //     },
    //     'paint': {
    //         'fill-color': '#ff0000', // Change this color to red (e.g., '#ff0000')
    //         'fill-opacity': 0.3 // Adjust opacity as needed
    //     }
    // },



        // firstSymbolId);

    // map.addLayer({
    //     'id': 'areaData2',
    //     'type': 'fill',
    //     'source': {
    //         'type': 'geojson',
    //         'data': 'data/Kedarnath-Rmbara.geojson' // Replace 'your_area.geojson' with the path to your GeoJSON file
    //     },
    //     'paint': {
    //         'fill-color': '#0000ff', // Change this color to red (e.g., '#ff0000')
    //         'fill-opacity': 0.3 // Adjust opacity as needed
    //     }
    // },

    

        // firstSymbolId);

    // Add the second new layer
    // map.addLayer({
    //     'id': 'medianIncome',
    //     'type': 'fill',
    //     'source': {
    //         'type': 'geojson',
    //         'data': 'data/medianIncome.geojson'
    //     },
    //     'opacity': 0,
    //     'paint': {
    //         'fill-color': ['step', ['get', 'MHHI'],
    //             '#ffffff',
    //             20000, '#ccedf5',
    //             50000, '#99daea',
    //             75000, '#66c7e0',
    //             100000, '#33b5d5',
    //             150000, '#00a2ca'],
    //         'fill-opacity': 0.5
    //     }
    // }, 'waterway-shadow');
    // Setup the instance, pass callback functions

    function addRouteToMap (route, routeName) {
        map.addSource(routeName, {
            'type': 'geojson',
            'data': route
            });

            map.addLayer({
                'id': routeName + 'xxx',
                'source': routeName,
                'type': 'line',
                'paint': {
                'line-width': 2,
                'line-color': '#007cbf'
                }
                });
    }

    function showLinesForMagnitude(reverse) {
        if(reverse == 0) {
        // Add a source and layer displaying a point which will be animated in a circle.

        const route = createRoute('Phata', 'Kedarnath');

        const route2 = createRoute('Dharasu', 'Rampur');
        const route3 = createRoute('Dharasu', 'Kedarnath');

        addRouteToMap(route, 'chinmay');
        addRouteToMap(route2, 'dfbu');
        addRouteToMap(route3, 'nid');


        map.addLayer({
            'id': 'point',
            'source': 'point',
            'type': 'symbol',
            'layout': {
            // This icon is a part of the Mapbox Streets style.
            // To view all images available in a Mapbox style, open
            // the style in Mapbox Studio and click the "Images" tab.
            // To add a new image to the style at runtime see
            // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
            'icon-image': 'Heli_1',
            'icon-size': 1,
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
            }
            });

        console.log(route2);
        animate(route2);

        } else if (reverse == 1) {
            // remove the lines
            map.removeLayer('route');
            map.removeLayer('point');
        }
    }

    function showLinesForChapter(reverse) {
        if(reverse == 0) {
        // Add a source and layer displaying a point which will be animated in a circle.

        const route = createRoute('Pithoragarh', 'Shimla');
        console.log('new route', route);

        const route2 = createRoute('Pithoragarh', 'Shimla');
       

        addRouteToMap(route2, 'recon');


        map.addLayer({
            'id': 'point',
            'source': 'point',
            'type': 'symbol',
            'layout': {
            // This icon is a part of the Mapbox Streets style.
            // To view all images available in a Mapbox style, open
            // the style in Mapbox Studio and click the "Images" tab.
            // To add a new image to the style at runtime see
            // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
            'icon-image': 'Heli_1',
            'icon-size': 1,
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
            }
            });

    animate(route);
        } else if (reverse == 1) {
            // remove the lines
            map.removeLayer('route');
            map.removeLayer('point');
        }
    }

    function animate(route) {
        const start =
        route.features[0].geometry.coordinates[
        counter >= steps ? counter - 1 : counter
        ];

        const end =
        route.features[0].geometry.coordinates[
        counter >= steps ? counter : counter + 1
        ];

        if (!start || !end) {
        return;
        }

        // Update point geometry to a new position based on counter denoting
        // the index to access the arc
        point.features[0].geometry.coordinates =
        route.features[0].geometry.coordinates[counter];
         
        // Calculate the bearing to ensure the icon is rotated to match the route arc
        // The bearing is calculated between the current point and the next point, except
        // at the end of the arc, which uses the previous point and the current point
        point.features[0].properties.bearing = turf.bearing(
        turf.point(start),
        turf.point(end)
        );
         
        // Update the source with this new data
        map.getSource('point').setData(point);
         
        // Request the next frame of animation as long as the end has not been reached
        if (counter < steps) {
        requestAnimationFrame(animate);
        }
         
        counter = counter + 1;
        }

    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            
            if(chapter.id == 'Magnitude'){
                console.log('animate line');
                showLinesForMagnitude(0);
            }

            if(chapter.id == 'iafday1'){
                console.log('animate line');
                // showLinesForChapter(0);
            }

            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                // chapter.onChapterEnter.forEach(setLayerOpacity);
            }

            // Determine which layer should be visible based on the step
            // var visibleLayerId = response.element.dataset.layer; // Assuming the step elements have a data attribute 'layer' indicating the corresponding layer id
            // if (visibleLayerId) {
            //     Object.keys(layerTypes).forEach(layerId => {
            //         var opacity = layerId === visibleLayerId ? 0.3 : 0;
            //         var paintProps = getLayerPaintType(layerId);
            //         paintProps.forEach(prop => {
            //             map.setPaintProperty(layerId, prop, opacity);
            //         });
            //     });
            // }

            if (chapter.data) {
                var dataBox = document.querySelector('#data-box .data');
                dataBox.innerHTML = '';
        
                chapter.data.forEach((d) => {
                    var data = document.createElement('p');
                    data.innerHTML = `${d.title}: <span>${d.count}</span>`;
        
                    dataBox.appendChild(data);
        
                })
        
            } else {
                var dataBox = document.querySelector('#data-box .data');
                dataBox.innerHTML = '';

            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);

            if(chapter.id == 'Magnitude'){
                console.log('remove line');
                showLinesForMagnitude(1);
            }

            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                // chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller.resize);