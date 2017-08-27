// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawCodeChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawCodeChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'language');
  data.addColumn('number', 'percent');
  data.addRows([
    ['JavaScript', 61.2],
    ['HTML', 38.8]
  ]);

  // Set chart options
  var options = {title:'Language Analytics',
                 legend: 'true',
                 pieSliceText: 'label',
                 width:340,
                 height:260};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_movie_trailer'));
  chart.draw(data, options);
}
