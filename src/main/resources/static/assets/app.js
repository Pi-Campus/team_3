$(function(){

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

    const TheChartIngredientiPerPizza = echarts.init(document.getElementById('chart-IngredientiPerPizza'));

    TheChartIngredientiPerPizza.setOption({
        tooltip: {},
        xAxis: {
            type: 'category',
            data: CHART_INGREDIENTI_PER_PIZZA.data.map(p => p.x)
        },
        yAxis: {},
        series: [{
            large: true,
            name: 'Quante pizze hanno questo numero di ingredienti',
            type: 'bar',
            data: CHART_INGREDIENTI_PER_PIZZA.data.map(p => p.y),
            itemStyle: {
                color: '#3699ff'
            }
        }]
    });
});
