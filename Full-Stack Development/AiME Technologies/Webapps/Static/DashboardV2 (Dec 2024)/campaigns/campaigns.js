document.addEventListener('DOMContentLoaded', () => {
  // Closing Rate Visual
  var piePos = 75;

  let pieOptions = {
    series: [piePos],
    chart: {
      type: 'radialBar',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      height: "80%",
    },

    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,

        hollow: {
          margin: 0,

          size: '80%',

          background: 'transparent',

          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,

          position: 'front',
        },

        track: {
          background: 'transparent',
          strokeWidth: '67%',
          margin: 0,
        },

        dataLabels: {
          name: {
            show: false,
          },

          show: true,

          value: {
            show: true,
            formatter: function(val) {
              return parseInt(val);
            },

            fontFamily: 'Noto Sans, sans-serif',
            fontWeight: 500,
            fontSize: '36px',

            color:'#DEE2E6',
          }
        }
      }
    },

    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#FFBB41'],
        stops: [0, 100],
      },
      colors: ['#E26947'],
    },

    stroke: {
      lineCap: 'round'
    },

    labels: [],
  }

  let pieChart = new ApexCharts(document.querySelector("#pieChart"), pieOptions);
  pieChart.render();
  
  // Reply Rate Visual
  let lineOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      height: "67%"
    },

    grid: {
      show: false,
    },

    legend: {
      show: false
    },

    series: [
      {
        name: 'series-1',
        data: [1, 3, 2, 7, 8, 2],
      }
    ],

    stroke: {
      curve: 'smooth'
    },

    xaxis: {
      labels: {
        show: false
      },

      axisBorder: {
        show: false
      },

      axisTicks: {
        show: false
      }
    },

    yaxis: {
      labels: {
        show: false
      },

      axisBorder: {
        show: false
      },

      axisTicks: {
        show: false
      }
    },
  }

  let lineGraph = new ApexCharts(document.querySelector("#lineGraph"), lineOptions);
  lineGraph.render();
  
});