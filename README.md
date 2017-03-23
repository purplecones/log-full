Occasionally I find myself needing to log out deeply nested objects to the console. Sadly, the default logger, `console.log()` does not expand the entire object if it has many levels of depth.

This package will help you to log objects down to any number of levels.

# Installation
Add package to your project

`yarn add log-full`


Import the package in your code. Preferably at the beginning of your app.

`require('log-full');`

_Note:_ There is no assignment. The package extends console and adds a `console.logFull()` function.

# Usage
```javascript
require('log-full');

const deepObject = {
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "1600",
               "short_name" : "1600",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "Amphitheatre Pkwy",
               "short_name" : "Amphitheatre Pkwy",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Mountain View",
               "short_name" : "Mountain View",
               "types" : [ "locality", "political" ]
            },
            {
               "long_name" : "Santa Clara County",
               "short_name" : "Santa Clara County",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "California",
               "short_name" : "CA",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "United States",
               "short_name" : "US",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "94043",
               "short_name" : "94043",
               "types" : [ "postal_code" ]
            }
         ],
         "formatted_address" : "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
         "geometry" : {
            "location" : {
               "lat" : 37.4224764,
               "lng" : -122.0842499
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
               "northeast" : {
                  "lat" : 37.4238253802915,
                  "lng" : -122.0829009197085
               },
               "southwest" : {
                  "lat" : 37.4211274197085,
                  "lng" : -122.0855988802915
               }
            }
         },
         "place_id" : "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
         "types" : [ "street_address" ]
      }
   ],
   "status" : "OK"
};

console.log(deepObject);
/*
{ results:
   [ { address_components: [Object],
       formatted_address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA',
       geometry: [Object],
       place_id: 'ChIJ2eUgeAK6j4ARbn5u_wAGqWA',
       types: [Object] } ],
  status: 'OK' }
*/

console.logFull(deepObject);
/*
{ results:
   [ { address_components:
        [ { long_name: '1600',
            short_name: '1600',
            types: [ 'street_number' ] },
          { long_name: 'Amphitheatre Pkwy',
            short_name: 'Amphitheatre Pkwy',
            types: [ 'route' ] },
          { long_name: 'Mountain View',
            short_name: 'Mountain View',
            types: [ 'locality', 'political' ] },
          { long_name: 'Santa Clara County',
            short_name: 'Santa Clara County',
            types: [ 'administrative_area_level_2', 'political' ] },
          { long_name: 'California',
            short_name: 'CA',
            types: [ 'administrative_area_level_1', 'political' ] },
          { long_name: 'United States',
            short_name: 'US',
            types: [ 'country', 'political' ] },
          { long_name: '94043',
            short_name: '94043',
            types: [ 'postal_code' ] } ],
       formatted_address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA',
       geometry:
        { location: { lat: 37.4224764, lng: -122.0842499 },
          location_type: 'ROOFTOP',
          viewport:
           { northeast: { lat: 37.4238253802915, lng: -122.0829009197085 },
             southwest: { lat: 37.4211274197085, lng: -122.0855988802915 } } },
       place_id: 'ChIJ2eUgeAK6j4ARbn5u_wAGqWA',
       types: [ 'street_address' ] } ],
  status: 'OK' }
*/
```

# Options

An option object can be passed as a second parameter. List of available options follow the `util.inspect()` function from https://nodejs.org/api/util.html#util_util_inspect_object_options

```javascript
console.logFull(deepObject, { depth: 3 });
```

The default options set by the package are:

```javascript
{
  depth: null, // recurse indefinitely
  colors: true, // colorize output by types
}
```
