# react-native-expo-geofence

Geofence library for react native, compatible with expo.

Works on iOS and Android.

## Getting started

`$ npm install react-native-expo-geofence --save`

## Expo example

[Maps Example](https://github.com/vramosx/expo-geofence)

## Usage
```javascript
import Geofence from 'react-native-expo-geofence';

var points = [
    { latitude: -23.658739, longitude: -46.666305 },
    { latitude: -23.651814, longitude:  -46.664129 }
]

var startPoint = { 
    latitude: -23.652508,
    longitude: -46.661474
}

class MyComponent extends Component
{
    getByProximity()
    {
        var maxDistanceInKM = 0.5; // 500m distance
        // startPoint - center of perimeter
        // points - array of points
        // maxDistanceInKM - max point distance from startPoint in KM's
        // result - array of points inside the max distance
        var result = Geofence.filterByProximity(startPoint, points, maxDistanceInKM);

        // You can access distance of this object in distanceInKM property
        var distance = result[0].distanceInKM;
    }
}
```