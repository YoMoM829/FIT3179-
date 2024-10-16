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

var spec = "VEGA/energy_percentage_type.vg.json";
vegaEmbed('#energy_map', spec).then(function(result) {
}).catch(console.error);

var spec = "VEGA/energy_price.vg.json";
vegaEmbed('#energy_prices', spec).then(function(result) {
}).catch(console.error);

var spec = "VEGA/energy_cons_industry.vg.json";
vegaEmbed('#energy_industry', spec).then(function(result) {
}).catch(console.error);