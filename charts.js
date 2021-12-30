// Create objects for each chart
let myChart1 = document.getElementById('myChart1').getContext('2d');
let myChart2 = document.getElementById('myChart2').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

// Graph for Systolic measure
let newChart1 = new Chart(myChart1, {
  type:'horizontalBar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['12/28/21','12/28/21','12/28/21','12/29/21','12/29/21','12/29/21','12/29/21','12/29/21','12/30/21'],
    datasets:[{
      label:'Systolic (mmHg)',
      data:[140,132,125,139,128,127,144,133,143],
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(240, 159, 64, 0.6)',
        'rgba(255, 80, 64, 0.6)',
        'rgba(54, 62, 235, 0.6)',
        'rgba(135, 206, 86, 0.6)',

      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:2,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Blood Pressure Monitor',
      fontSize:25
    },
    legend:{
      display:true,
      position:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

// Graph for Dia and Pulse measures
let newChart2 = new Chart(myChart2, {
  type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['12/28/21', '12/28/21', '12/28/21', '12/29/21', '12/29/21', '12/29/21', '12/29/21', '12/29/21'],
    datasets:[{
      label:'Diastolic (mmHg)',
      data:[88,82,82,65,85,88,88,80,93],
      backgroundColor:[
        'rgba(153, 102, 255, 0.6)',
      ],
    },{
      label:'Pulse (beats/min)',
      data:[80,79,82,75,71,71,82,79,84],
      backgroundColor:[
        'rgba(75, 192, 192, 0.6)'
      ],
    }]
  },
  options:{
    legend:{
      display:true,
      position:'bottom',
      labels:{
        fontColor:'#000'
      }
    }
  }
})
