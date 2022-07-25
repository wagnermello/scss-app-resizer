<h1> SCSS APP RESIZER

<h3>Resizing your app with precision</h2>

<img src="./example-with-reactjs-app/src/assets/readme.gif">

<p>Check it on my website: https://wagnermello.com/scss-app-resizer/</p>

#

<h2>Scale Function Sample</h2>
<h4>filename: _scale-function-sample</h4>

<p>This is the function that can scale any element.
When the view port change 128px, the class atribute value of an element will scale proportionally.
For example: if you apply this function in a image width, the image will scale proportionally in large scales.</p>

```
YOUR_TAG_OR_CLASSNAME {
	/*----------Change these values if you want----------*/
	$YOUR_CLASS_ATRIBUTE: 20px;
	your_class_atribute: $YOUR_CLASS_ATRIBUTE;
	/*---------------------------------------------------*/

	$min-width: 1366px;
	$i: 1367px;
	@while $min-width < 10000px {
		$i: $i + 128px;
		$YOUR_CLASS_ATRIBUTE: calc($YOUR_CLASS_ATRIBUTE * 1.0937);
		$min-width: calc($min-width * 1.0937);

		@media screen and (min-width: $min-width) {
			font-size: $YOUR_CLASS_ATRIBUTE !important;
		}
	}
}

```

<h2> App Wrapper </h2>
<h4> filename: _app-wrapper.scss</h4>

<p>.app__wrapper is used to wrap a section (first div).<br />
.container__wrapper is used to wrap the section's first child (second div).<br />

How to apply:<br />

</p>

```
<section className="app__wrapper">
	<div className="container__wrapper">
    		/*Your section content*/
	</div>
</section>
```

<h2> App Flex </h2>
<h4> filename: _app-flex.scss</h4>

<p>App Flex helps a lot to get a clean code.<br />

How to apply (horizontal center alignment example):<br />

</p>

```
<div className="flex__row__center>
	<div className="flex__column__end">
		/*Div content right aligned*/
	</div>
	<div className="flex__column__center">
		/*Div content center aligned*/
	</div>
	<div className="flex__column__start">
		/*Div content left aligned*/
	</div>
</div>
```

<h2> App Gap </h2>
<h4> filename: _app-gap.scss</h4>

<p> App Gap adds spacing between div children and scale perfectly on large screens.<br />

.gap**x: add horizontal spacing between elements.<br />
.gap**y: add vertical spacing between elements.<br /

How to apply (vertical gap - 32px): <br />

</p>

```
<div className="gap__y32 flex__column__center">
	<h1>Title</h1>
	<p>text</p>
	<button>Button</button>
</div>
```

<h2> App Font Size </h2>
<h4> filename: _app-font-size.scss</h4>

<p>App Font Size scale fonts perfectly on large screens.
In this setup, the "p" tag and "h1" tag are scaling.
<br />
But you can setup it on every classes/tags that contain texts.
</p>

<h2> App Button Size </h2>
<h4> filename: _app-button-size.scss</h4>

<p> App Button Size scale buttons perfectly on large screens.<br />
In this setup, the "button" tag is scaling. But you can setup it on every classes/tags that you use as buttons.<br />
</p>

<h2> Colors </h2>
<h4> filename: _colors.scss</h4>
<p>
Just setup your color pallete here.<br />
</p>

#

<h4>You can, of course, manipulate these files and scss setups as you need.</h4>
