import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: "X"
		};

		let blank = {
			a1: null,
			a2: null,
			a3: null,
			b1: null,
			b2: null,
			b3: null,
			c1: null,
			c2: null,
			c3: null
		};
	}
	winner = {
		aHor: ["a1", "a2", "a3"],
		bHor: ["b1", "b2", "b3"],
		cHor: ["c1", "c2", "c3"],
		aVirt: ["a1", "b1", "c1"],
		bVirt: ["a2", "b2", "c2"],
		cVirt: ["a3", "b3", "c3"],
		aDiag: ["a1", "b2", "c3"],
		cDiag: ["a3", "b2", "c1"]
	};

	xo(e) {
		if (e.target.innerHTML == "") {
			if (this.state.player == "X") {
				e.target.innerHTML = this.state.player;
				this.setState({ player: "O" });
			} else if (this.state.player == "O") {
				e.target.innerHTML = this.state.player;
				this.setState({ player: "X" });
			}
		}
	}
	render() {
		return (
			<div className="parent">
				<div className="as">
					<div className="cell" id="a1" onClick={e => this.xo(e)} />
					<div className="cell" id="a2" onClick={e => this.xo(e)} />
					<div className="cell" id="a3" onClick={e => this.xo(e)} />
				</div>
				<div className="bs">
					<div className="cell" id="b1" onClick={e => this.xo(e)} />
					<div className="cell" id="b2" onClick={e => this.xo(e)} />
					<div className="cell" id="b3" onClick={e => this.xo(e)} />
				</div>
				<div className="cs">
					<div className="cell" id="c1" onClick={e => this.xo(e)} />
					<div className="cell" id="c2" onClick={e => this.xo(e)} />
					<div className="cell" id="c3" onClick={e => this.xo(e)} />
				</div>
			</div>
		);
	}
}
