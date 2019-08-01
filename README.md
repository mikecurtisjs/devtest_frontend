# Who to contact for issues
Brian Ellis - brian.ellis@bondexchange.com

# Front-End Candidate Test

## Environmental Notes
1. This system is meant to work with node 10.x. Higher versions have had complications in installing the package
2. SSH Key cloning may have an issue with pushing a branch from past experiences. Cloning via HTTPS seems to have no issue and may be a result of the key permissions in relation to Github's ssh system.

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
2. The "Task Name" is missing from the heading of each item. Create readable unique title for each heading based on how the data comes in. Does not need to be a property value of the payload but should have a recognizable relationship to which object item is being referenced.
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

### Pattern One (ES6 Frozen Object)
```javascript
const _data = [];

const UserStore = {
  add: item => _data.push(item),
  get: id => _data.find(d => d.id === id)
}

Object.freeze(UserStore);
export default UserStore;
```

### Pattern Two (Singleton)
```javascript
var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    alert("Same instance? " + (instance1 === instance2));  
}
```

### Pattern Three (JSON Form Class)
```javascript
let _self;
const myClass = {
  appData: {},
  init: ()=> {
    _self = this;
    _self.test();
  },
  test: ()=> {
    console.log("I'm getting good at this!");
    _self.test2();
  },
  test2: ()=> {
    console.log("and _self if still working!!!");
  }
};
myClass.init();
```

# CSS Libraries Accepted
Other than prefixing libraries to conform to browser compatibility in the system no other libraries can be used. This includes any form of skeleton, bootstrap, foundation, etc.

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
