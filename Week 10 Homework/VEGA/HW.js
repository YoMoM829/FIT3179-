var spec = "Week 10 Homework/VEGA/tsunami_time_bar_chart.vg.json";
    vegaEmbed('#vis1', spec).then(function(result) {
        // Access the Vega view instance as result.view
    }).catch(console.error);

var spec = "Week 10 Homework/VEGA/tsunami_map.vg.json";
    vegaEmbed('#map', spec).then(function(result) {
        // Access the Vega view instance as result.view
    }).catch(console.error);