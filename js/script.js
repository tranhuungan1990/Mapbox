L.mapbox.accessToken = 'pk.eyJ1IjoidHJhbmh1dW5nYW4iLCJhIjoiY2pwdWlmb3BwMGE5ajQybW1naHpqajNuMSJ9.wJmPn1iqk5KocfYmNOyKPw';

var map = L.mapbox.map('map', 'mapbox.streets')
  .setView([11.2195,106.2254], 10)
  .addControl(L.mapbox.geocoderControl('mapbox.places', {
        autocomplete: true
    }));




L.control.fullscreen().addTo(map);
// L.control.zoom('zoomInText', 'A');
// 
// https://nominatim.openstreetmap.org/
// http://polygons.openstreetmap.fr/
// http://geojson.io/


// Đông Nam Bộ
L.mapbox.featureLayer().setGeoJSON(geojson_TayNinh).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_HoChiMinh).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_VungTau).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_BinhPhuoc).addTo(map);

// Miền Trung
L.mapbox.featureLayer().setGeoJSON(geojson_QuangTri).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_QuangNgai).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_QuangNam).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_QuangBinh).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_Hue).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_DaNang).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_BinhDinh).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_NinhThuan).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_PhuYen).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_KhanhHoa).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_BinhThuan).addTo(map);

//Tây Nguyên
L.mapbox.featureLayer().setGeoJSON(geojson_DakLak).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_DakNong).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_KonTum).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_GiaLai).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_LamDong).addTo(map);

// Campuchia
L.mapbox.featureLayer().setGeoJSON(geojson_PhnomPenh).addTo(map);

// Lào
L.mapbox.featureLayer().setGeoJSON(geojson_Champasak).addTo(map);

// Miền Bắc
L.mapbox.featureLayer().setGeoJSON(geojson_NgheAn).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_SonLa).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_HaNoi).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_LaoCai).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_NamDinh).addTo(map);

// Mien TAY
L.mapbox.featureLayer().setGeoJSON(geojson_AnGiang).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_BacLieu).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_BenTre).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_CaMau).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_CanTho).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_DongThap).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_HauGiang).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_KienGiang).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_LongAn).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_SocTrang).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_TienGiang).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_TraVinh).addTo(map);
L.mapbox.featureLayer().setGeoJSON(geojson_VinhLong).addTo(map);

L.mapbox.featureLayer().setGeoJSON(geojson_VietNam).addTo(map);

//Logo
// mapControlsContainer.appendChild(document.getElementById("logo"));

L.controlCredits({
    image: "images/logo.jpg",
    link: "http://www.binhdienmekong.vn/",
    text: "Bản đồ Đại Lý<br/><strong>Cty CP Bình Điền - MeKong</strong>"
}).addTo(map);

L.control.locate().addTo(map);