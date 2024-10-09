var spec = "VEGA/energy_prod_types_chart.vg.json";
vegaEmbed('#energy_prod', spec).then(function(result) {
}).catch(console.error);

var spec = "VEGA/energy_cons_types_chart.vg.json";
vegaEmbed('#energy_cons', spec).then(function(result) {
}).catch(console.error);

var spec = "VEGA/energy_imports.vg.json";
vegaEmbed('#energy_imports', spec).then(function(result) {
}).catch(console.error);

var spec = "VEGA/energy_exports.vg.json";
vegaEmbed('#energy_exports', spec).then(function(result) {
}).catch(console.error);

var spec = "VEGA/coal_percentage_type.vg.json";
vegaEmbed('#coal_map', spec).then(function(result) {
}).catch(console.error);