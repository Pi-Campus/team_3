$(function(){
    if (window.JSON_DATA) {
        window.DATA = JSON.parse(window.JSON_DATA);
        // console.log(window.DATA);
        $("#json-raw").val(window.JSON_DATA);
    }

    /*
    const TheChartIngredienti = echarts.init(document.getElementById('chart-Ingredienti'));

    TheChartIngredienti.setOption({
        tooltip: {},
        xAxis: {
            type: 'category',
            data: CHART_INGREDIENTI.data.map(p => p.x)
        },
        yAxis: {},
        series: [{
            large: true,
            name: 'In quante pizze compare',
            type: 'bar',
            data: CHART_INGREDIENTI.data.map(p => p.y),
            itemStyle: {
                color: '#3699ff'
            }
        }]
    });

    */
});
