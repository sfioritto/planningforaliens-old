$(function(){

  $.getJSON("quotes.json", function(data){
    var index = Math.floor(Math.random() * data.length);
    console.log(index);
    $('.quote p').html(data[index]);
  });

  //chart
  var chartData = {
    labels: ["Garage Roof",
             "Credit Cards",
             "Rule 4",
             "Taxes 2015",
             "Taxes 2014",
             "More Credit Cards",
             "1 Month Buffer",
             "Sean Student Loans",
             "Beth Student Loans"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [0, 0, 0, 0, 0, 0, 8300, 5500, 12000],
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [5000, 30000, 17000, 20000, 5000, 6100, 0, 0, 0]
      }
    ]
  };

  //insert goal html
  var goal = chartData.datasets[0].data.reduce(function(a, b){return a+b;}),
      paid = chartData.datasets[1].data.reduce(function(a, b){return a+b;}),
      paidText = "$" + Math.floor(paid/1000) + "k",
      goalText = "$" + Math.floor(goal/1000) + "k";
  $("h2").html(paidText + " paid off, " + goalText + " until no debt. Get back to work!");

  var ctx = document.getElementById("myChart").getContext("2d");
  var myBarChart = new Chart(ctx).StackedBar(chartData, {
    scaleShowGridLines : false,
    showTooltips: false,
    onAnimationComplete: function () {

      var ctx = this.chart.ctx;
      ctx.font = this.scale.font;
      ctx.fillStyle = this.scale.textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";

      this.datasets.forEach(function (dataset) {
        dataset.bars.forEach(function (bar) {
          if (bar.value > 0){
            var value = "$" + (bar.value/1000) + "k"
            ctx.fillText(value, bar.x, bar.y);
          }
        });
      });
    }
  });
});