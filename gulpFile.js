var gulp = require('gulp');
var gulp = require('./index.js')(gulp);
var path = require('path');


gulp.task('default',  function(){

  var dirs = this.finder( path.join(__dirname+'', 'lib') );

  console.log(dirs)
});


