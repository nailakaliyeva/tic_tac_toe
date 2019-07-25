import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="parent">
				<div className="as">
					<div className="cell" id="a1">
						a1
					</div>
					<div className="cell" id="a2">
						a2
					</div>
					<div className="cell" id="a3">
						a3
					</div>
				</div>
				<div className="bs">
					<div className="cell" id="b1">
						b1
					</div>
					<div className="cell" id="b2">
						b2
					</div>
					<div className="cell" id="b3">
						b3
					</div>
				</div>
				<div className="cs">
					<div className="cell" id="c1">
						c1
					</div>
					<div className="cell" id="c2">
						c2
					</div>
					<div className="cell" id="c3">
						c3
					</div>
				</div>
			</div>
		);
	}
}
