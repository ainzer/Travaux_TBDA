const prices = [1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.5, 2.7, 2.9];
const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: years,
		datasets: [{
			label: 'Prix du carburant',
			data: prices,
			fill: false,
			borderColor: 'rgb(75, 192, 192)',
			lineTension: 0.1
		}]
	},
	options: {}
});