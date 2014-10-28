<!-- (PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line) -->

# gulp-finder
<!-- [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url] -->

> Directory Glob String plugin finder for [gulp](https://github.com/wearefractal/gulp)


# Features

- Gulp Finder uses fs.extra and recursively searches through the given directory, and creates an object that mirrors your directory structure.
- Each directory within the Object now has a bunch of methods, which we will discuss down below.
- Each method will either return a string or an array of paths.
- Bind's a finder property to the the gulp instance. 


> you can call gulp-finder from any gulp task, by calling `this.finder(path)`

## Usage

First, install `gulp-finder` as a development dependency:

```shell
npm install --save-dev gulp-finder
```

Then, add it to your `gulpfile.js`:

```javascript
// require gulp
var gulp = require('gulp');

// Do this
var finder = require('gulp-finder')(gulp);

// or do this
require('gulp-finder')(gulp);

gulp.task( 'any', function(){
    var found = this.finder( './somePath/to/some/where' );
    console.log(found)
    //=> Object that looks similar to your directory.
});
```

## API

### finder['someDirectory'].path;

#### value
```
- Type: String
- Descr: The path property will be the full path to someDirectory
```


### finder['someDirectory'].all( );

#### value
```
Type: String
Returns: the/full/path/to/the/current/directory + **/*
```



### finder['someDirectory'].dirs( `String` || `Array` );

#### arguments
```
Type: String || Array
Default: '**'
Required: false
```

### finder['someDirectory'].ext( `extension` );

#### extension
```
Type: String
Default: '*.*'
Required: false
```

### finder['someDirectory'].any( String );

#### String
```
Type: String || Array
Default: '**'
Required: false
```


## TODO
- Add More Methods
- Find a better Library for recursively searching the directory;

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-storage
[npm-image]: https://badge.fury.io/js/gulp-storage.png

[travis-url]: http://travis-ci.org/JoelCoxOKC/gulp-storage
[travis-image]: https://secure.travis-ci.org/JoelCoxOKC/gulp-storage.png?branch=master

[coveralls-url]: https://coveralls.io/r/JoelCoxOKC/gulp-storage
[coveralls-image]: https://coveralls.io/repos/JoelCoxOKC/gulp-storage/badge.png

[depstat-url]: https://david-dm.org/JoelCoxOKC/gulp-storage
[depstat-image]: https://david-dm.org/JoelCoxOKC/gulp-storage.png
