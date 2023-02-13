const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const { jsPDF } = require('jspdf');

const width = 1000;
const height = 1000;
const chartCallback = (ChartJS) => {};
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

(async () => {
  const configuration = {
    type: 'bar',
    data: {
      labels: [
        'Mar 2022',
        'Apr 2022',
        'May 2022',
        'Jun 2022',
        'Jul 2022',
        'Aug 2022',
        'Sep 2022',
        'Oct 2022',
        'Nov 2022',
        'Dec 2022',
        'Jan 2023',
        'Feb 2023'
      ],
      datasets: [
        {
          label: '',
          data: ['3.0', '4.5', '4.0', '3.4', '4.0', '4.0', '2.7', '3.5', '4.5', '4.5', '3.9', 0],
          backgroundColor: [
            '#CB5031',
            '#CB5031',
            '#CB5031',
            '#CB5031',
            '#CB5031',
            '#CB5031',
            '#CB5031',
            '#CB5031',
            '#CB5031',
            '#CB5031',
            '#CB5031',
            '#CB5031'
          ],
        }
      ]
    }
  };

  // const configuration = {
  //   labels: [
  //     'Mar 2022',
  //     'Apr 2022',
  //     'May 2022',
  //     'Jun 2022',
  //     'Jul 2022',
  //     'Aug 2022',
  //     'Sep 2022',
  //     'Oct 2022',
  //     'Nov 2022',
  //     'Dec 2022',
  //     'Jan 2023',
  //     'Feb 2023'
  //   ],
  //   datasets: [
  //     {
  //       data: ['3.0', '4.5', '4.0', '3.4', '4.0', '4.0', '2.7', '3.5', '4.5', '4.5', '3.9', 0],
  //       sentData: [36, 5, 13, 42, 112, 68, 21, 67, 33, 43, 204, 4],
  //       respondedData: [19, 2, 11, 15, 34, 21, 14, 2, 17, 16, 14, 0],
  //       backgroundColor: [
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031',
  //         '#CB5031'
  //       ]
  //     }
  //   ],
  //   options: { scales: { y: { ticks: { beginAtZero: true } } } }
  // };



  // const configuration = {
  //   type: 'bar',
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [
  //       {
  //         label: '# of Votes',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }
  //     ]
  //   }
  // };
  // const image = await chartJSNodeCanvas.renderToBuffer(configuration);
  const dataUrl = await chartJSNodeCanvas.renderToDataURL(configuration);
  // const stream = chartJSNodeCanvas.renderToStream(configuration);

  const doc = new jsPDF();
  doc.addImage(dataUrl, 'PNG', 15, 40, 180, 180);
  doc.save('a' + Math.random() + '.pdf');
})();
