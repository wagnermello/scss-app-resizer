<h1> SCSS APP RESIZER

<h3>Resizing your app with precision</h2>
<p>Check an exemple on my website: https://wagnermello.com/scss-app-resizer/</p>

<img src="./example-with-reactjs-app/src/assets/readme.gif">



<h2>Scale Function</h2>
<h4>filename: _scale-function.scss</h4>

<p>This is the function that can scale any element.
When the view port changes 128px, the css atribute value of an element will scale proportionally.
For example: if you develop a page with 1280px of width size, and apply this function in an image width, the image will scale proportionally in larger scales.


```
YOUR_TAG_OR_CLASSNAME {
@mixin scaleFontSize($classAtributeValue, $minWidthMediaQuery) {
	class-atribute: $classAtributeValue;

	$i: $minWidthMediaQuery -128px;
	@while ($minWidthMediaQuery < 12000px) {
		$i: $i + 128px;
		$classAtributeValue: calc($classAtributeValue * 1.0937);
		$minWidthMediaQuery: calc($minWidthMediaQuery * 1.0937);

		@media screen and (min-width: $minWidthMediaQuery) {
			class-atribute: $classAtributeValue !important;
		}
	}
}
```


You'll need to call the @mixing inside your css atribute. Here's an exemple to apply on a font-size atribute from a "p" tag:


```
@import "./scale-function.scss"

p {
	@include scaleFontSize(1rem, 1280px);
}

```

In this example, you're scaling the font-size attribute, width "@media screen and (min-width: 1280px)". The font size will scale for any screen bigger than 1280px.


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

<p> App Gap adds spacing between div children and scale perfectly.<br />

.gap__x: add horizontal spacing between elements.<br />
.gap__y: add vertical spacing between elements.<br />

How to apply (vertical gap = 32px): <br />

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

<p>App Font Size makes fonts scale perfectly.
<br />
In this setup, the "p" tag and "h1" tag are scaling.
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
