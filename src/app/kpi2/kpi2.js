export function flotr2(kpi2Data) {
    var kpi2 = document.getElementById('kpi2');
    var kpi2Options = {
        title: '2016 Expenses',
        HtmlText: false,
        yaxis: {
            min: 0,
            max: 6,
            tickDecimals: 1,
            title: 'Millions'
        },
        xaxis: {
            autoscale: true,
            autoscaleMargin: 1,
            title: 'Quarters',
            ticks: [[1, '1st'], [2, '2nd'], [3, '3rd'],[4, '4th']]
        },
        bars: {show: true}
    };
    var chartjs = document.getElementById('kpi2chartjs');
    var chartist = document.getElementById('ct-chart2');
    var google = document.getElementById('google2');
    if (!chartjs.hidden) {
        chartjs.hidden = true;
    }
    if (!chartist.hidden) {
        chartist.hidden = true;
    }
    if (!google.hidden) {
        google.hidden = true;
    }
    if (kpi2.hidden) {
        kpi2.hidden = false;
    }
    var graph = Flotr.draw(kpi2, kpi2Data, kpi2Options);
    return graph
}

export function unflotr2(graph) {
    graph.destroy();
}