//Refer to online resources:
//1. https://www.youtube.com/watch?v=C4t6qfHZ6Tw
//2. https://www.youtube.com/watch?v=2S1AbEWX85o
//3. https://www.youtube.com/watch?v=NlBt-7PuaLk
//4. https://www.youtube.com/watch?v=8jvoTV54nXw

//if console error with http, try running:
//Python 2: python -m SimpleHTTPServer 8000
//Python 3: python -m http.server 8000


var svgW = 1000, svgH = 180, bPad = 5;
var barW = 40;
var svg1 = d3.select("#bar1").append("svg").attr("height", svgH).attr("width",svgW);
var svg2 = d3.select("#bar2").append("svg").attr("height", svgH).attr("width",svgW);

d3.csv("dsCSV.csv").then(function(data){
  data.forEach(d=> {d.Height=+d.Height;});

  svg1.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("fill", "#148F77")
    .attr("height", d => d.Height)
    .attr("width", barW)
    .attr("transform", function(d, i) {
          var translate = [(barW+bPad)* i, 0];
          return "translate("+translate+")";
    });
});

d3.json("dsJSON.json").then(function(data){
    data.forEach(d=> {d.Frequency=+d.Frequency;});
  
    svg2.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", "#e643a6")
      .attr("height", d => d.Frequency)
      .attr("width", barW)
      .attr("transform", function(d, i) {
            var translate = [(barW+bPad)* i, 0];
            return "translate("+translate+")";
      });
  });