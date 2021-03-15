$(function(){
    if (window.JSON_DATA) {
        window.DATA = JSON.parse(window.JSON_DATA);
        // console.log(window.DATA);
        $("#json-raw").val(window.JSON_DATA);
    }

    const TheChart = echarts.init(document.getElementById('chart-1'));

    TheChart.setOption({
        tooltip: {},
        xAxis: {
            type: 'category',
            data: window.DATA.data.map(p => p.cells[0].value)
        },
        yAxis: {},
        series: [{
            large: true,
            name: 'Serie',
            type: 'bar',
            data: window.DATA.data.map(p => p.cells[1].value),
            itemStyle: {
                color: '#3699ff'
            }
        }]
    });
});
