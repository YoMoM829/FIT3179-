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

var fuelSelect = document.querySelector("#fuelType");

fuelSelect.addEventListener("change", function() {
    var fuelType = fuelSelect.value; 
    let path = ""

    if (fuelType === "Coal") {
        path = "energy_cons_coal_time_state.csv";
    } else if (fuelType === "Gas") {
        path = "energy_cons_gas_time_state.csv";
    } else if (fuelType === "Renewables") {
        path = "energy_cons_renewables_time_state.csv"
    } else if (fuelType === "Oil") {
        path = "energy_cons_oil_time_state.csv"
    }

    var spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": {
          "text": "Fuel Usage by Percentage across Australian States",
          "fontSize": 40
        },
        "width": 600,
        "height": 300,
        "projection": {"type": "mercator"},
        "params": [
          {
            "name": "FuelType",
            "value": "Coal",
            "bind": {
              "input": "select",
              "options": ["Coal", "Renewables", "Gas", "Oil"]
            }
          }
        ],
        "data": {
          "url": "https://raw.githubusercontent.com/amishmishra27/FIT3179_A2/refs/heads/main/js/aus_boundaries.topojson",
          "format": {
            "type": "topojson",
            "feature": "STE_2021_AUST_GDA2020"
          }
        },
        "transform": [
          {
            "lookup": "properties.STE_NAME21",
            "from": {
              "data": {
                "url": "https://raw.githubusercontent.com/YoMoM829/FIT3179-/refs/heads/main/DATA/energy_percentage_map.csv"
              },
              "key": "States",
              "fields": ["Coal", "Renewables", "Gas", "Oil"]
            }
          },
          {
            "calculate": "datum[FuelType]",
            "as": "FuelUsage"
          }
        ],
        "layer": [
          {
            "mark": {
              "type": "geoshape",
              "fill": "lightgray",
              "stroke": "black"
            }
          },
          {
            "mark": {
              "type": "geoshape",
              "stroke": "white"
            },
            "encoding": {
              "color": {
                "field": "FuelUsage",
                "type": "quantitative",
                "title": "Fuel Usage (%)",
                "scale": {
                  "domain": [0, 20, 40, 60, 80, 100],
                  "range": ["#fc9292", "#b00202"]
                }
              },
              "tooltip": [
                {
                  "field": "properties.STE_NAME21",
                  "type": "nominal",
                  "title": "State"
                },
                {
                  "field": "FuelUsage",
                  "type": "quantitative",
                  "format": ".2f",
                  "title": "Fuel Usage (%)"
                }
              ]
            }
          }
        ]
    }
    vegaEmbed('#energy_map', spec).then(function(result) {
    }).catch(console.error);
}); 