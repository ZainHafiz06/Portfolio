document.addEventListener('DOMContentLoaded', () => {
  // Active Users Visual
  let barOptions = {
    chart: {
      type: 'bar',

      toolbar: {
        show: false
      },

      sparkline: {
        enabled: true
      },

      height: "75%",
      width: "90%",
    },

    grid: {
      show: false,
    },

    legend: {
      show: false
    },

    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 3,
      },
    },

    fill: {
        colors: ['#FFFFFF']
    },

    series: [
      {
        name: 'series-1',
        data: [1, 3, 2, 7, 8, 2, 4, 9, 2, 5, 2, 3, 8, 2],
      }
    ],

    tooltip: {
      enabled: true,
      
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        return `
          <div style="
            background: #DEE2E6;
            
            color: #181B1E;
            
            padding: 7px 11px;
            
            border-radius: 5px;

            font-family: 'Noto Sans', sans-serif;
            font-weight: 500;
          ">
            ${value}
          </div>
        `;
      },
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

  let barGraph = new ApexCharts(document.querySelector("#visual"), barOptions);
  barGraph.render();

  // Stacked Line Graph
  var series = [10];

  for (let i = 0; i < series.length; i++) {
    series[i] = i;
  }

  var stxLineOptions = {
    chart: {
      type: 'area',
      
      toolbar: {
        show: false,
      },

      height: '100%',
      width: '100%',

      sparkline: {
        enabled: true
      },
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      },

      colors: ["#514C69", "#A55090"],
    },

    series: [{
      name: 'series-1',
      data: [1, 3, 2, 7, 8, 2],
    },

    {
      name: 'series-2',
      data: [5, 3, 10, 2, 4, 11],
    }],

    stroke: {
      curve: 'smooth'
    },

    tooltip: {
      enabled: true,

      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];

        if (seriesIndex === 0) {
          return `
          <div style="
            background: #DEE2E6;
            
            color: #181B1E;
            
            padding: 7px 11px;
            
            border-radius: 5px;

            font-family: 'Noto Sans', sans-serif;
            font-weight: 500;
          ">
            ${value}
          </div>
          `; 
        } else if (seriesIndex === 1) {
          return `
          <div style="
            background: #DEE2E6;
            
            color: #181B1E;
            
            padding: 7px 11px;
            
            border-radius: 5px;

            font-family: 'Noto Sans', sans-serif;
            font-weight: 500;
          ">
            ${value}
          </div>
          `; 
        }
      },
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar"],
      
      labels: {
        show: false,
      },

      axisBorder: {
        show: true
      },

      axisTicks: {
        show: false
      }
    },

    yaxis: {
      labels: {
        show: false,
      },

      axisBorder: {
        show: false
      },

      axisTicks: {
        show: false
      }
    },

    legend: {
      show: false,
    },

    grid: {
      show: true,
      borderColor: '#FAFAFA',
      position: 'back',
      padding: {
        top: 10,
      },
    }
  }
  
  var stxLineGraph = new ApexCharts(document.querySelector("#stxVisual"), stxLineOptions);
  stxLineGraph.render();
});