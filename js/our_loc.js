window.onload = showMap
function showMap() {
    var map = new BMap.Map("map");
    map.disableBizAuthLogo();
    var point = new BMap.Point(121.533154, 31.32097);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
}
