ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-74.181869, 40.530752, -73.514060, 40.926801]);
var wms_layers = [];


        var lyr_NYCgovtilesbasemap_0 = new ol.layer.Tile({
            'title': 'NYC.gov tiles basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">The City of New York, CC-BY-4.0</a>',
                url: 'https://maps1.nyc.gov/xyz/1.0.0/carto/basemap/{z}/{x}/{y}.jpg'
            })
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
var format_ExpandedFoodandNutritionEducationWorkshops_2 = new ol.format.GeoJSON();
var features_ExpandedFoodandNutritionEducationWorkshops_2 = format_ExpandedFoodandNutritionEducationWorkshops_2.readFeatures(json_ExpandedFoodandNutritionEducationWorkshops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ExpandedFoodandNutritionEducationWorkshops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpandedFoodandNutritionEducationWorkshops_2.addFeatures(features_ExpandedFoodandNutritionEducationWorkshops_2);
var lyr_ExpandedFoodandNutritionEducationWorkshops_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ExpandedFoodandNutritionEducationWorkshops_2, 
                style: style_ExpandedFoodandNutritionEducationWorkshops_2,
                interactive: true,
                title: '<img src="styles/legend/ExpandedFoodandNutritionEducationWorkshops_2.png" /> Expanded Food and Nutrition Education Workshops'
            });
var format_ParentingEducationWorkshops_3 = new ol.format.GeoJSON();
var features_ParentingEducationWorkshops_3 = format_ParentingEducationWorkshops_3.readFeatures(json_ParentingEducationWorkshops_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ParentingEducationWorkshops_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParentingEducationWorkshops_3.addFeatures(features_ParentingEducationWorkshops_3);
var lyr_ParentingEducationWorkshops_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParentingEducationWorkshops_3, 
                style: style_ParentingEducationWorkshops_3,
                interactive: true,
                title: '<img src="styles/legend/ParentingEducationWorkshops_3.png" /> Parenting Education Workshops'
            });

lyr_NYCgovtilesbasemap_0.setVisible(true);lyr_subway_1.setVisible(true);lyr_ExpandedFoodandNutritionEducationWorkshops_2.setVisible(true);lyr_ParentingEducationWorkshops_3.setVisible(true);
var layersList = [lyr_NYCgovtilesbasemap_0,lyr_subway_1,lyr_ExpandedFoodandNutritionEducationWorkshops_2,lyr_ParentingEducationWorkshops_3];
lyr_subway_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'objectid': 'objectid', 'rt_symbol': 'rt_symbol', 'shape_len': 'shape_len', 'url': 'url', });
lyr_ExpandedFoodandNutritionEducationWorkshops_2.set('fieldAliases', {'Program Name': 'Program Name', 'Project': 'Project', 'Street': 'Street', 'City': 'City', 'State': 'State', 'Full Address': 'Full Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Zip': 'Zip', 'Borough': 'Borough', 'Audience': 'Audience', 'Site Name': 'Site Name', });
lyr_ParentingEducationWorkshops_3.set('fieldAliases', {'Address': 'Address', 'City': 'City', 'State': 'State', 'Full Address': 'Full Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_subway_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'objectid': 'TextEdit', 'rt_symbol': 'TextEdit', 'shape_len': 'TextEdit', 'url': 'TextEdit', });
lyr_ExpandedFoodandNutritionEducationWorkshops_2.set('fieldImages', {'Program Name': 'TextEdit', 'Project': 'TextEdit', 'Street': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Full Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Zip': 'Range', 'Borough': 'TextEdit', 'Audience': 'TextEdit', 'Site Name': 'TextEdit', });
lyr_ParentingEducationWorkshops_3.set('fieldImages', {'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Full Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_subway_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'objectid': 'no label', 'rt_symbol': 'no label', 'shape_len': 'no label', 'url': 'no label', });
lyr_ExpandedFoodandNutritionEducationWorkshops_2.set('fieldLabels', {'Program Name': 'no label', 'Project': 'no label', 'Street': 'no label', 'City': 'no label', 'State': 'no label', 'Full Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Zip': 'no label', 'Borough': 'no label', 'Audience': 'no label', 'Site Name': 'no label', });
lyr_ParentingEducationWorkshops_3.set('fieldLabels', {'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Full Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_ParentingEducationWorkshops_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});