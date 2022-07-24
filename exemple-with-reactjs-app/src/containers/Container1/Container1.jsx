import React from "react";
import sass from "../../assets/sass.png";

import "./Container1.scss";

function Container1() {
	return (
		<section className="container1 app__wrapper">
			<div className="container__wrapper">
				<div className="flex__column__center gap__y64">
					<h1>SASS App Wrapper</h1>
					<div className="flex__row__center gap__x64">
						<div className="container1__image-container flex__column__center">
							<img src={sass} alt="sass" />
						</div>
						<div className="container1__text-container flex__column__start gap__y32">
							<h2>Zoom out this page</h2>
							<img src={sass} alt="sass" />

							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Debitis, placeat illum officiis aspernatur sed facere
								voluptatibus, voluptas veritatis, ducimus itaque harum
								distinctio? Ipsa, expedita aspernatur tempore ratione totam
								alias dolor! Velit ea vel accusantium iusto quia ipsa temporibus
								voluptate saepe consectetur soluta atque veniam eligendi ullam
								debitis deleniti recusandae amet, vero cum corrupti in
								molestias! Odit est cupiditate pariatur suscipit!
							</p>
							<button className="button-pink">Button</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Container1;
