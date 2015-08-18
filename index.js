'use strict';

var Highcharts = require('./src/highcharts.src.js');
var Stockharts = require('./src/highstock.src.js');

module.exports = {
  createChart: function(div, options, callback) {
    options.chart = options.chart || {};
    options.chart.renderTo = div;
    return new Highcharts.Chart(options, callback);
  },
  createStockChart: function(div, options, callback) {
    options.chart = options.chart || {};
    options.chart.renderTo = div;
    console.log(' options;', options)
    return new Stockharts.StockChart(options, callback);
  },
  destroy: function(chart) {
    chart.destroy();
  }
};
