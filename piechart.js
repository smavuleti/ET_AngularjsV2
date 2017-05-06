Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares January, 2015 to May, 2015'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Categories',
        colorByPoint: true,
        data: [{
            name: 'Other',
            y: 56.33
        }, {
            name: 'Vegetables',
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: 'Fruits',
            y: 10.38
        }, {
            name: 'Snacks',
            y: 4.77
        }, {
            name: 'Movies',
            y: 0.91
        }, {
            name: 'Clothing',
            y: 0.2
        }]
    }]
});