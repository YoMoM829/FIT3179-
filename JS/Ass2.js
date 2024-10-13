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

var spec = "VEGA/map.vg.json";
vegaEmbed('#energy_map', spec).then(function(result) {
}).catch(console.error);

var fuelSelect = document.querySelector("#fuelType");

fuelSelect.addEventListener("change", function() {
    var fuelType = fuelSelect.value; 
    let path = ""

    if (fuelType === "Coal") {
        path = "https://raw.githubusercontent.com/YoMoM829/FIT3179-/refs/heads/main/DATA/energy_cons_coal_time_state.csv";
    } else if (fuelType === "Gas") {
        path = "https://raw.githubusercontent.com/YoMoM829/FIT3179-/refs/heads/main/DATA/energy_cons_gas_time_state.csv";
    } else if (fuelType === "Renewables") {
        path = "https://raw.githubusercontent.com/YoMoM829/FIT3179-/refs/heads/main/DATA/energy_cons_renewables_time_state.csv"
    } else if (fuelType === "Oil") {
        path = "https://raw.githubusercontent.com/YoMoM829/FIT3179-/refs/heads/main/DATA/energy_cons_oil_time_state.csv"
    }

    var spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": {
          "text": "Energy Generation by State (2008-2022)",
          "fontSize": 40
        },
        "width": 600,
        "height": 300,
        "projection": {"type": "mercator"},
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
                "url": path
              },
              "key": "States",
              "fields": ["Time"]
            }
          },
          {
            "calculate": "datum[Time]", 
            "as": "EnergyGeneration"
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
                "field": "EnergyGeneration",
                "type": "quantitative",
                "title": "Energy Generation (PJ)",
                "scale": {
                  "domain": [0, 1000, 2000, 3000, 4000, 5000],
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
                  "field": "EnergyGeneration",
                  "type": "quantitative",
                  "format": ".2f",
                  "title": "Energy Generation (PJ)"
                }
              ]
            }
          }
        ]
      }
      
    vegaEmbed('#energy_map', spec).then(function(result) {
    }).catch(console.error);
}); 