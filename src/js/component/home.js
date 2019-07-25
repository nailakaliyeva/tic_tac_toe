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
		let comp = {
			a1: document.querySelector("#a1").innerHTML,
			a2: document.querySelector("#a2").innerHTML,
			a3: document.querySelector("#a3").innerHTML,
			b1: document.querySelector("#b1").innerHTML,
			b2: document.querySelector("#b2").innerHTML,
			b3: document.querySelector("#b3").innerHTML,
			c1: document.querySelector("#c1").innerHTML,
			c2: document.querySelector("#c2").innerHTML,
			c3: document.querySelector("#c3").innerHTML
		};

		if (comp.a1 === comp.a2 && comp.a1 === comp.a3 && comp.a1 !== "") {
			alert("WINNER!");
		} else if (
			comp.b1 === comp.b2 &&
			comp.b1 === comp.b3 &&
			comp.b1 !== ""
		) {
			alert("WINNER!");
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
