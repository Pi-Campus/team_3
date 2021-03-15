$(function(){
    if (window.JSON_DATA) {
        window.DATA = JSON.parse(window.JSON_DATA);
        // console.log(window.DATA);
        $("#json-raw").val(window.JSON_DATA);

        const date = [];
        datasets = [];

        //create a new array of value1
        window.DATA.data.map((e) => {
            date.push(e.cells[0].value);
        });

        //create a new array of values2 and convert string to numbers
        window.DATA.data.map((e) => {
            datasets.push(parseFloat(e.cells[1].value.replace(",", ".")));
        });

        var ctx = document.getElementById("myChart").getContext("2d");
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: "line",

            // The data for our dataset
            data: {
                labels: date,
                datasets: [
                    {
                        label: "Covid-19 US Counties",
                        backgroundColor: "#57a2ff",
                        borderColor: "#57a2ff",
                        data: datasets,
                    },
                ],
            },

            // Configuration options go here
            options: {},
        });

    }
});
