import React from "react";
import "./Container2.scss";
import { Link } from "react-router-dom";

function Container2() {
	return (
		<section className="container2 app__wrapper">
			<div className="container__wrapper">
				<div className="container2__text-container flex__column__center gap__y64">
					<h1>Responsive scales from mobile to 4K resolutions</h1>

					<h2>Now go to other webpages and compare</h2>
					<div className="flex__column__center gap__y16">
						<p>Download it on GitHub:</p>

						<a
							href="https://github.com/wagnermello/scss-app-wrapper"
							target="_blank"
							rel="noreferrer noopener"
						>
							<button className="button-white">Github</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Container2;
