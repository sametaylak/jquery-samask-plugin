# jQuery Input Mask Plugin - Samask
Plugin to make masks on input fields
## Installation
```html
<script src="dist/jquery.samask-masker.min.js"></script>
```
## Usage
```javascript
$(selector).samask(maskText);
```
## Basic Masks
```javascript
$('.phone').samask('(000)000-0000') // (555)555-5555
$('.date').samask('00/00/0000')     // 01/01/1990
$('.hour').samask("00:00:00");      // 12:30:52
$('.date_hour').samask("00/00/0000 00:00:00");  // 01/01/1990 12:30:52
$('.percent').samask("%00");                    // %48
$('.mixed').samask("SSS-000");                  // SBK-144
```
## With HTML Attribute
This code will execute samask plugin for every input fields that have data-samask attribute
```html
<input type="type" data-samask="(000)000-0000">
<script>
$.samaskHtml()
</script>
````