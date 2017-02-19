As one of the focuses of our application is location based notifications, we would like to see how the candidate is going to implement a small website to display data on the map with showing description page when user clicks on a point.
 
1. Map view with points from the server.
When the map is loaded, it should be centered in 59.879037 lat and 59.87903 lng;
The map should display points from the REST API:
http://api.dev.aispot.no/lighthouse/spot/nearby?lat=59.879037&lng=59.87903
When the user clicks on a point the website should load the detailed view for that point.
 
2. Detailed view
This page is displayed when the user has clicked on a point on the map.
To load the detailed information about the place the app can use the REST API:
http://api.dev.aispot.no/lighthouse/content/{id}
Where ID is a spot id from the first request.

For building UI we suggest to use either Bootstrap or Material Design libs.