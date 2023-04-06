import { Colors } from 'chart.js'
import React from 'react'
import ApexCharts from 'react-apexcharts'

export const ChartApex = () => {

    const today = new Date().getDay()

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
            },
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
        colors: ['#EC765F', '#EC765F', '#EC765F', '#EC765F', '#EC765F', '#EC765F', '#EC765F'],
        // responsive: [
        //     {
        //         breakpoint: 415,
        //         options: {
        //             chart: {
        //                 height: 220,
        //                 width: 240
        //             }
        //         },
        //     }
        // ]
    }



    return (
        <ApexCharts key={today} options={options} series={series} type='bar' height={180} />
    )
}


