
export function flotr2(kpi1Data) {
    var kpi1 = document.getElementById('kpi1');
    var kpi1Options = {
        title: '2016 Revenue',
        HtmlText: false,
        yaxis: {
            min: 0,
            tickDecimals: 1,
            title: 'Millions'
        },
        xaxis: {
            autoscale: true,
            autoscaleMargin: 1,
            title: 'Quarters',
            ticks: [[1, '1st'], [2, '2nd'], [3, '3rd'],[4, '4th']]
        }
    };
    var chartjs = document.getElementById('kpi1chartjs');
    var chartist = document.getElementById('ct-chart1');
    var google = document.getElementById('google1');
    if (!chartjs.hidden) {
        chartjs.hidden = true;
    }
    if (!chartist.hidden) {
        chartist.hidden = true;
    }
    if (!google.hidden) {
        google.hidden = true;
    }
    if (kpi1.hidden) {
        kpi1.hidden = false;
    }
    var graph = Flotr.draw(kpi1, kpi1Data, kpi1Options);
    return graph
}

export function unflotr2(graph) {
    graph.destroy();
}
