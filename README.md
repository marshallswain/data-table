## data-table

[![Build Status](https://travis-ci.org/marshallswain/data-table.svg?branch=master)](https://travis-ci.org/marshallswain/data-table)

A data-table widget that can be loaded by:

- StealJS + ES6
- npm / browserify / CJS
- RequireJS / AMD
- Standalone with CanJS and jQuery


## ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```html
<script type='text/stache' can-autorender>
	<can-import from="data-table"/>
	
	<data-table>
	    <bit-panel title="CanJS">
	      CanJS provides the MV*
	    </bit-panel>
	    <bit-panel title="StealJS">
	      StealJS provides the infrastructure.
	    </bit-panel>
  	</data-table>
</script>

<script src='./node_modules/steal/steal.js'
	main="can/view/autorender/"></script>
```

Alternatively, you can import this module like:

```js
import "data-table";
import can from "can";
import $ from "jquery";
import stache from "can/view/stache/stache";


var template = stache("<data-table>"+
	"<bit-panel title='X'>X Content</bit-panel>"+
	"<bit-panel title='Y'> Y-Content</bit-panel>"+
"</data-table>");

$("body").append(template());

```


## CJS use

Use `require` to load `data-table` and everything else
needed to create a template that uses `data-table`:

```js
var can = require("canjs");
var $ = require("jquery");

// Add's data-table tag
require("data-table");
// Use stache
require("canjs/view/stache/stache");


var template = can.stache("<data-table>"+
	"<bit-panel title='X'>X Content</bit-panel>"+
	"<bit-panel title='Y'> Y-Content</bit-panel>"+
"</data-table>");

$("body").append(template());

```

## AMD use

Configure the `can` and `jquery` paths and the `data-table` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'data-table',
		    	location: 'node_modules/data-table/dist/amd',
		    	main: 'lib/data-table'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

Make sure you have the `css` plugin configured also!

Use data-table like:

```js
define(["can", "jquery", "can/view/stache","data-table"], function(can, $){
	var template = can.stache("<data-table>"+
		"<bit-panel title='X'>X Content</bit-panel>"+
		"<bit-panel title='Y'> Y-Content</bit-panel>"+
	"</data-table>");

	$("body").append(template());
});
```

## Standalone use

Load the `global` css and js files:

```html
<link rel="stylesheet" type="text/css" 
      href="./node_modules/data-table/dist/global/data-table.css">
      
<script src='./node_modules/jquery/dist/jquery.js'></script>
<script src='./node_modules/canjs/dist/can.jquery.js'></script>
<script src='./node_modules/canjs/dist/can.stache.js'></script>
<script src='./node_modules/data-table/dist/global/data-table.js'></script>
<script id='main-stache' text='text/stache'>
  <data-table>
    <bit-panel title='X'>X Content</bit-panel>
    <bit-panel title='Y'>Y-Content</bit-panel>
  </data-table>
</script>
<script>
  $("body").append( can.view("main-stache",{}) );
</script>
```
