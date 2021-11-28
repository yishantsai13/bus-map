import jsSHA from "jssha";
function getAuthorizon() {
  const APPID = "f90c9da674534df398fca338c8aa34b8";
  const APPKEY = "XEg5uRI-uoeY6vXF0Xr3Udz-HNI";
  let GMTStr = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(APPKEY, "TEXT");
  ShaObj.update("x-date: " + GMTStr);

  let HMAC = ShaObj.getHMAC("B64");

  let authorization = `hmac username="${APPID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return { Authorization: authorization, "X-Date": GMTStr };
}

function getBusStopList(data = {}) {
  return fetch(
    `https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/${data.city}/${data.routeName}?$format=JSON`,
    {
      headers: getAuthorizon()
    }
  ).then((res) => res.json());
}

function getBusRoute(data) {
  return fetch(
    `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${data.city}/${data.routeName}?$format=JSON`,
    {
      headers: getAuthorizon()
    }
  ).then((res) => res.json())
}

function getBusStatus(data) {
  return fetch(
    `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${data.city}/${data.routeName}?$format=JSON&$filter=Direction%20eq%20${data.direction}`,
    {
      headers: getAuthorizon()
    }
  ).then((res) => res.json())
}


export {
  getBusStopList,
  getBusRoute,
  getBusStatus
}
