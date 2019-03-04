# Who to contact for issues
Brian Ellis - brian.ellis@bondexchange.com

# Front-End Candidate Test

## What the finished product should be:
1. Developer needs to retrieve the data from an API
2. Dev needs to build out the page from the data
3. Page should allow the data to be filtered by number correctly
4. Page should allow incomplete/complete to be clicked and changed
5. The UX colors and style do not need to match exactly except for: 4 column rows and usage of top filter bar

## What we're looking for in git
1. Proper branching - for the project namespace comes off master as `candidate/{name}`
2. Proper commits in the system where applicable. One commit and push is way too few commits.

# Bonus Points
1. Persisting the state of the app filter and complete/incomplete items in the client even on refresh
2. The "Task Name" is missing from the heading of each item. Create readable unique title for each heading based on how the data comes in. Does not need to be a property value of the payload and but should have a recognizable to which object item is being referenced.
3. Turning the UX pretty
4. Making the UX responsive
5. Usage of comments to code where it makes sense for readability

## Example presentation
![alt text](https://raw.githubusercontent.com/brianlellis/bx-fe-test/master/example.gif "Example")

# API URL
__https://jsonplaceholder.typicode.com/todos__

# JS Pattern and Libraries Accepted
__May use jQuery but no other framework library__

The pattern of JS used is not entirely restricted in formation of the object class but it should conform to a recognized structural pattern. Recognized structural pattern examples may be seen below but are not limited to the 3 examples only:

### Pattern One
```javascript
var myClass = {
  appData:{},
  init: function() {
    // my code
  },
  functionOne: function(){
    // my code
  },
  functionTwo: function(){
    // my code
  }
}
```

### Pattern Two
```javascript
var myClass = {
   var myClass, _self;
   jQuery(document).ready(function(){
     myClass = (function ($) {
       _self = this;

      return {
        init: () => {
          // my code
        },
        functionOne: () => {
      	  // my code
        }
    };
  })(jQuery);
  myClass.init();
});
}
```

### Pattern Three
```javascript
var mySingletonObject = (function () {
  var _self; // Setting up a shared private var
  return {
    init: function () {
      _self = this; // Assigning the value to the shared private var
      // Call my next method
      _self.test();
    },
    test: function () {
      console.log("I'm getting good at this!");
      _self.test2();
    },
    test2: function () {
      console.log("and _self if still working!!!");
    }

  }
})();
```

# CSS Libraries Accepted
Other than prefixing libraries to conform to browser compatibility in the system no other libraries can be used. This includes any form of skeleton, boostrap, foundation, etc.

# Getting Started With Repo

### Dependencies

*__Note:__ if you've previously installed Gulp globally, run `npm rm --global gulp` to remove it. [Details here.](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467)*

Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Gulp Command Line Utility](http://gulpjs.com) `npm install --global gulp-cli`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files and dependencies.
3. When it's done installing, run one of the task runners to get going:
	- `gulp` manually compiles files.
	- `gulp watch` automatically compiles files and applies changes using [BrowserSync](https://browsersync.io/) when you make changes to your source files.

**Try it out.** After installing, run `gulp` to compile some test files into the `dist` directory. Or, run `gulp watch` and make some changes to see them recompile automatically.



## Documentation

Add your source files to the appropriate `src` subdirectories. Gulp will process and and compile them into `dist`.

- JavaScript files in the `src/js` directory will be compiled to `dist/js`. Files in subdirectories under the `js` folder will be concatenated. For example, files in `js/detects` will compile into `detects.js`.
- Files in the `dist/sass` directory will be compiled to `src/css`.
- SVG files placed in the `src/svg` directory will be optimized with SVGO and compiled into `dist/svg`.
- Files and folders placed in the `copy` directory will be copied as-in into the `dist` directory.
