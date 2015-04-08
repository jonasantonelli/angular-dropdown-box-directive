# Angular Dropdown Box

#### Directive Dropdown Box
---
Angular Dropdown Box is a directive that facilitates the creation of dropdown components without using Bootstrap Dropdown Component.

Download [Angular Dropdown Box(v.0.1.0)](http://jonasantonelli.github.io/angular-dropdown-box-directive/)

Check out the sample app: http://jonasantonelli.com/angular-dropdown-box/sample/


## Get Started :

 - Add `jquery.js`, `angular.js`, `dropdown-box.directive.js` and `dropdown-box.css`|`dropdown-box.less` to your code:
```html
<link href="dropdown-box.css" rel="stylesheet" type="text/css" />
<script src="jquery.js"></script>
<script src="angular.js"></script>
<script src="dropdown-box.directive.js"></script>
```
 - Add `'ja.dropdownbox'` as a module dependency to your app: `angular.module('app', ['ja.dropdownbox'])`

 - Add a `dropdown-box` attribute to your `<button>` or  `<a>`.
```html
<button class="btn" dropdown-box >Button</button>
```

## Directive options :

### Target :
 - Add a `target` attribute with the value of the element that will block its content.
```html
<button class="btn" dropdown-box target="content" >Button</button>
<div id="content">
 My content
</div>
```

### Placement :
 - Add a `placement` attribute (default = `right`) with the value to be aligned (`left | right | top | bottom`
```html
<button class="btn" dropdown-box placement="top" >Button</button>
```

### Mouseover :
 - Add a `mouseover` attribute for to set the event that will trigger your button.
```html
<button class="btn" dropdown-box mouseover >Button</button>
```

### Complete Example :
 ```html
<button class="btn btn-primary" dropdown-box target="content-target" placement="left" mouseover >Button</button>
<div id="content-target">
Content....
</div>
```

