import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Kickstarter',
		'Indiegogo',
		'Palm Tree Digital'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class DoughnutExample extends React.PureComponent {
  render() {
    return (
      <div>
        <Doughnut data={data} options={{  tooltips: {
         	enabled: false
    		} }}/>
      </div>
    );
  }
};

export {DoughnutExample}
