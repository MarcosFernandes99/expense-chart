import React from 'react'
import ApexCharts from 'react-apexcharts'

export const Chart = () => {

    const series = [{
        name: 'Despesas',
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]
    }]

    const options = {
        plotOptions: {
            bar: {
                columnWidth: '70%',
                borderRadius: 5,
                dataLabels: {
                    position: 'top',
                },
                
            }
        },
        dataLabels: {
            enabled: false,
            // formatter: function (val: any) {
            //     return "$" + val;
            // },
            // offsetY: -20,
            // style: {
            //     fontSize: '12px',
            //     colors: ["#304758"]
            // }
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            labels: {
                show: false,
                formatter: function (val: any) {
                    return "$" + val;
                  }
            },
        },
        tooltip: {
            enabled: true,
        },
        grid: {
            show: false
        },
        colors: ['#EC765F'],

    }



    return (
        <ApexCharts options={options} series={series} type='bar' height={180} />

    )
}
