# inSelect - An AngularJS directive for indendation based group drop-down list

## Features

* Provides indendation for option values
* Single and Nested option group indendation
* Option group header can be bolded or unbolded by the user (Not Yet Implemented)
* Users can select the group option header which is the main feature of inSelect
* Coloring of options (Not Yet Implemented)
* Works in all browsers (IE8+, Chrome, Firefox, Safari etc.)

## Usage

Require `in-select.js` to your project and use this syntax in your templates:

    <in-select ng-model="yourModal" select-list="selectList"></in-select>
    
## Compared to classic group related drop-down list

* Classic group related drop-down list uses `<optgroup>` for showing up the group header, but the main issue is that users can't select 
  those header label at any cost ([Demo](https://jsfiddle.net/gm23gwq5/embedded/result/))
  
  <iframe width="100%" height="300" src="//jsfiddle.net/gvbodbb9/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Demo

Try out the demo :
[Demo](https://jsfiddle.net/x85x6rpz/)  


