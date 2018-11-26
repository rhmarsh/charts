export function flotr2(kpi3Data) {
    var kpi3 = document.getElementById('kpi3');
    var kpi3Options = {
        title: '2016 Combined',
        HtmlText: false,
        xaxis: {
            min: 0,
            max: 6,
            tickDecimals: 1,
            title: 'Millions'
        },
        yaxis: {
            min: 0,
            autoscaleMargin: 1,
            title: 'Quarters',
            ticks: [[1, '1st'], [2, '2nd'], [3, '3rd'],[4, '4th']]
        },
        bars: {
            show: true,
            horizontal: true,
            barWidth: 0.5
        },
        legend: {
            position: 'se',
            backgroundColor: '#D2E8FF'
        }
    };
    var chartjs = document.getElementById('kpi3chartjs');
    var chartist = document.getElementById('ct-chart3');
    var google = document.getElementById('google3');
    if (!chartjs.hidden) {
        chartjs.hidden = true;
    }
    if (!chartist.hidden) {
        chartist.hidden = true;
    }
    if (!google.hidden) {
        google.hidden = true;
    }
    if (kpi3.hidden) {
        kpi3.hidden = false;
    }
    var graph = Flotr.draw(kpi3, kpi3Data, kpi3Options);
    return graph
}

export function unflotr2(graph) {
    graph.destroy();
}