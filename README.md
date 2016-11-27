# formalize

[![Dependencies](https://david-dm.org/electerious/formalize.svg)](https://david-dm.org/electerious/formalize.svg#info=dependencies) [![Donate via Flattr](https://img.shields.io/badge/flattr-donate-009cde.svg)](https://flattr.com/profile/electerious) [![Donate via PayPal](https://img.shields.io/badge/paypal-donate-009cde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CYKBESW577YWE)

Better default styles for common input elements.

formalize eliminates cross browser bugs, inconsistencies across systems and applies a beautiful default styling to several input elements.

## Contents

- [Demos](#demos)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)

## Demos

| Name | Description | Link |
|:-----------|:------------|:------------|
| Default | Includes all features. | [Try it on CodePen]() |

## Features

- Works in all modern browsers
- No JavaScript, just CSS
- Works with inputs, textareas, checkboxes and radio buttons
- Zero dependencies

## Setup

We recommend to install formalize using [Bower](https://bower.io/) or [npm](https://npmjs.com).

```sh
bower install formalize
```

```sh
npm install formalize
```

Include the CSS file in the `head`…

```html
<link rel="stylesheet" href="dist/formalize.min.css">
```

…or import the SASS file directly:

```scss
@import 'src/styles/main';
```

## Usage

### Input

```html
<input class="input" type="text">
```

### Textarea

```html
<textarea class="input" rows="8" cols="40"></textarea>
```

### Select

```html
<select class="select">
	<option selected disabled>-</option>
	<option value="one">One</option>
	<option value="two">Two</option>
</select>
```

### Radio

```html
<div class="control">
	<input class="control__input" id="Radio" type="radio">
	<label class="control__label" for="Radio">Radio</label>
</div>
```

### Checkbox

```html
<div class="control">
	<input class="control__input" id="checkbox" type="checkbox">
	<label class="control__label" for="checkbox">Checkbox</label>
</div>
```