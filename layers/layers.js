ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-74.255591, 40.496115, -73.700009, 40.915533]);
var wms_layers = [];

var format_geo_export_75863697e25548ce9a108ee77a009514_0 = new ol.format.GeoJSON();
var features_geo_export_75863697e25548ce9a108ee77a009514_0 = format_geo_export_75863697e25548ce9a108ee77a009514_0.readFeatures(json_geo_export_75863697e25548ce9a108ee77a009514_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_geo_export_75863697e25548ce9a108ee77a009514_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geo_export_75863697e25548ce9a108ee77a009514_0.addFeatures(features_geo_export_75863697e25548ce9a108ee77a009514_0);
var lyr_geo_export_75863697e25548ce9a108ee77a009514_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_geo_export_75863697e25548ce9a108ee77a009514_0, 
                style: style_geo_export_75863697e25548ce9a108ee77a009514_0,
                interactive: false,
                title: '<img src="styles/legend/geo_export_75863697e25548ce9a108ee77a009514_0.png" /> geo_export_75863697-e255-48ce-9a10-8ee77a009514'
            });
var format_subway_1 = new ol.format.GeoJSON();
var features_subway_1 = format_subway_1.readFeatures(json_subway_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_subway_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subway_1.addFeatures(features_subway_1);
var lyr_subway_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_subway_1, 
                style: style_subway_1,
                interactive: false,
                title: '<img src="styles/legend/subway_1.png" /> subway'
            });
var format_CUCEWorkshops_2 = new ol.format.GeoJSON();
var features_CUCEWorkshops_2 = format_CUCEWorkshops_2.readFeatures(json_CUCEWorkshops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CUCEWorkshops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUCEWorkshops_2.addFeatures(features_CUCEWorkshops_2);cluster_CUCEWorkshops_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CUCEWorkshops_2
});
var lyr_CUCEWorkshops_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_CUCEWorkshops_2, 
                style: style_CUCEWorkshops_2,
                interactive: true,
                title: '<img src="styles/legend/CUCEWorkshops_2.png" /> CUCE Workshops'
            });

lyr_geo_export_75863697e25548ce9a108ee77a009514_0.setVisible(true);lyr_subway_1.setVisible(true);lyr_CUCEWorkshops_2.setVisible(true);
var layersList = [lyr_geo_export_75863697e25548ce9a108ee77a009514_0,lyr_subway_1,lyr_CUCEWorkshops_2];
lyr_geo_export_75863697e25548ce9a108ee77a009514_0.set('fieldAliases', {'boro_code': 'boro_code', 'boro_name': 'boro_name', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', });
lyr_subway_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'objectid': 'objectid', 'rt_symbol': 'rt_symbol', 'shape_len': 'shape_len', 'url': 'url', });
lyr_CUCEWorkshops_2.set('fieldAliases', {'Program Name': 'Program Name', 'Project': 'Project', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Full Address': 'Full Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Zip': 'Zip', 'Borough/County': 'Borough/County', 'Name(s) of CUCE staff member(s) conducting activity': 'Name(s) of CUCE staff member(s) conducting activity', 'AUDIENCE [Youth workers, parents, grandparents, teens, etc]': 'AUDIENCE [Youth workers, parents, grandparents, teens, etc]', 'Phone number of agency contact person': 'Phone number of agency contact person', 'Name of site where the program is delivered': 'Name of site where the program is delivered', });
lyr_geo_export_75863697e25548ce9a108ee77a009514_0.set('fieldImages', {'boro_code': 'TextEdit', 'boro_name': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_subway_1.set('fieldImages', {'id': '', 'name': '', 'objectid': '', 'rt_symbol': '', 'shape_len': '', 'url': '', });
lyr_CUCEWorkshops_2.set('fieldImages', {'Program Name': '', 'Project': '', 'Street': '', 'City': '', 'State': '', 'Full Address': '', 'Latitude': '', 'Longitude': '', 'Zip': '', 'Borough/County': '', 'Name(s) of CUCE staff member(s) conducting activity': '', 'AUDIENCE [Youth workers, parents, grandparents, teens, etc]': '', 'Phone number of agency contact person': '', 'Name of site where the program is delivered': '', });
lyr_geo_export_75863697e25548ce9a108ee77a009514_0.set('fieldLabels', {'boro_code': 'no label', 'boro_name': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', });
lyr_subway_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'objectid': 'no label', 'rt_symbol': 'no label', 'shape_len': 'no label', 'url': 'no label', });
lyr_CUCEWorkshops_2.set('fieldLabels', {'Program Name': 'no label', 'Project': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Full Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Zip': 'no label', 'Borough/County': 'no label', 'Name(s) of CUCE staff member(s) conducting activity': 'no label', 'AUDIENCE [Youth workers, parents, grandparents, teens, etc]': 'no label', 'Phone number of agency contact person': 'no label', 'Name of site where the program is delivered': 'no label', });
lyr_CUCEWorkshops_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});