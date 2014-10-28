;(function(){

  var Finder = require('./lib');
  module.exports = function(gulp){
    gulp.Gulp.prototype.finder = Finder;
    return gulp;
  }

}).call(this);