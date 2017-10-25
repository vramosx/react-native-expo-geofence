//import liraries
import React, { Component } from 'react';

// create a component
class Geofence extends Component {

    static Log = false;

    static distanceInKM(point1, point2) {
        var lat1 = point1.latitude;
        var lon1 = point1.longitude;
        var lat2 = point2.latitude;
        var lon2 = point2.longitude;

        var p = 0.017453292519943295;
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
      
        return 12742 * Math.asin(Math.sqrt(a));
    }
    
    static filterByProximity(centerPoint, points, maxDistance)
    {
        var result = [];
        var pointDistance = 0;
        var rlog = null;
        for (var i = 0; i < points.length; i++) {
            pointDistance = Geofence.distanceInKM(centerPoint, points[i]);
            if(Geofence.Log)
            {
                rlog = "Center Point: { lat:" + centerPoint.latitude + " long: " + 
                        centerPoint.longitude + " }, Point: { lat: " + points[i].latitude + " long: " +
                        points[i].longitude + " } - Distance: " +  pointDistance + " KM";
                console.log(rlog);
            }
            
            if(pointDistance <= maxDistance)
            {
                points[i].distanceInKM = pointDistance;
                result.push(points[i]);
            }
        }

        return result;
    }
}

//make this component available to the app
export default Geofence;
