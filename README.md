# SCSS APP RESIZER

<h2>Resizing your app with precision</h2>

#

<h3> App Wrapper </h3>
<h4> filename: _app-wrapper.scss</h4>

<p> .app__wrapper is used to wrap sections (first div).</p>
<p> .container__wrapper wrap the fist child of sections (second div).</p>

<p> How to apply:</p>

```
<section className="app__wrapper">
	<div className="container__wrapper">
    	/*Your section content*/
	</div>
</div>
```

#

<h3> App Flex </h3>
<h4> filename: _app-flex.scss</h4>

<p>App flex helps a lot to get a clean code.</p>

<p> How to apply (horizontal center alignment example):</p>

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

#

<h3> App Gap </h3>
<h4> filename: _app-gap.scss</h4>

<p>App Gap adds spacing between div children and scale perfectly on large screens.</p>

<p>classname: gap__x: add horizontal spacing between elements.</p>
<p>classname: gap__y: add vertical spacing between elements.</p>

<p> How to apply (vertical alignment exemple): </p>

```
<div className="gap__y flex__column__center">
	<h1>/*Title*/</h1>
	<p>/*Text*/</p>
	<button>/*Button*/</button>
</div>


```

#

<h3> App Font Size </h3>
<h4> filename: _app-font-size.scss</h4>

<p>It scale fonts perfectly on large screens.</p>
<p>In this setup, the < p > and  < h1 > tags are scaling. But you can setup it on every classes/tags that contain texts.</p>

#

<h3> App Button Size </h3>
<h4> filename: _app-button-size.scss</h4>

<p>It scale buttons perfectly on large screens.</p>
<p>In this setup, the < button > tag is scaling. But you can setup it on every classes/tags that you use as buttons.</p>

#

<h3> Colors </h3>
<h4> filename: _colors.scss</h4>

<p>Just setup your color pallete here.</p>

#

<h4>You can, of course, manipulate these files and scss setups as you need.</h4>
