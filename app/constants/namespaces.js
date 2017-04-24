/**
 * all URLs used in the openrouteservice
 */
/**
 * orsNamespaces and schemata e.g. for XML requests to services
 */
angular.module('orsApp').constant('orsNamespaces', {
    schemata: {
        gpxService: 'http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd',
        tcxService: 'http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2 http://www.garmin.com/xmlschemas/TrainingCenterDatabasev2.xsd',
        kmlService: 'http://www.opengis.net/kml/2.2 http://schemas.opengis.net/kml/2.2.0/ogckml22.xsd'
    },
    /**
     * services that are called by openrouteservice, e.g. to determine the route between two waypoints
     * important note: all these URLs must be listed in the cgi-bin/proxy.cgi script of the server running ORS!
     * important note: all URLs have been blanked out for security reasons
     * if you want to become an active ORS code contributor please contact us: openrouteserviceATgeog.uni-heidelberg.de
     */
    services: {
        geocoding: 'http://129.206.7.188:8080/ors/geocode',
        routing: 'http://129.206.7.188:8080/ors/routes',
        tmc: 'http://129.206.228.124/routing-test?tmc',
        analyse: 'http://129.206.7.188:8080/ors/isochrones',
        shortenlink: 'https://api-ssl.bitly.com/v3/shorten'
    },
    /**
     * metadata used when generating (export) files on the openrouteservice
     */
    metadata: {
        name: 'OpenRouteService Route',
        description: 'Route exported using GIScience Universität Heidelberg OpenRouteService',
        authorName: 'GIScience Universität Heidelberg',
        authorEmailId: 'some_person',
        authorEmailDomain: 'geog.uni-heidelberg.de',
        copyright: 'OpenRouteService - GIScience Universität Heidelberg',
        license: 'MIT',
        link: 'http://www.geog.uni-heidelberg.de/gis/index_en.html',
        keywords: 'OpenRouteService. Routing. GIS. Universität Heidelberg',
        src: 'Route point logged using OpenRouteService'
    },
    /**
     * map layers used on the openlayers map
     */
    //url to Open Map Surfer layer
    layerMapSurfer: {
        url: 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',
        attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, powered by <a href="http://mapsurfernet.com/">MapSurfer.NET</a>'
    },
    //url to hillshade overlay
    layerHs: 'http://korona.geog.uni-heidelberg.de/tiles/asterh/x={x}&y={y}&z={z}',
    //url to OSM layer
    layerOSM: {
        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    },
    //url to OpenCycleMap
    layerOSMCycle: {
        url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
        attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    },
    //url to stamen maps
    layerStamen: {
        url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
        attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    },
    overlayHillshade: {
        url: 'http://korona.geog.uni-heidelberg.de/tiles/asterh/x={x}&y={y}&z={z}'
    }
});