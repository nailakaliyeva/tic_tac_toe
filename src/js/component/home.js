import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: "X"
		};
	}
	// winner = {
	// 	aHor: ["a1", "a2", "a3"],
	// 	bHor: ["b1", "b2", "b3"],
	// 	cHor: ["c1", "c2", "c3"],
	// 	aVirt: ["a1", "b1", "c1"],
	// 	bVirt: ["a2", "b2", "c2"],
	// 	cVirt: ["a3", "b3", "c3"],
	// 	aDiag: ["a1", "b2", "c3"],
	// 	cDiag: ["a3", "b2", "c1"]
	// };

	// function xo checks if the targeted area is empty and ONLY then changes state. This prevents overwriting
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
		//grabbing all the cells' id's and storing them in this object
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
		// 1st winning option comparison
		if (comp.a1 === comp.a2 && comp.a1 === comp.a3 && comp.a1 !== "") {
			setTimeout(function() {
				let btn = document.createElement("BUTTON");
				btn.className = "btn btn-primary";
				btn.innerHTML = "Reset";
				document.querySelector(".parent").appendChild(btn);
				alert("WINNER");
			}, 100);
		}
		// 2nd winning option comparison
		else if (comp.b1 === comp.b2 && comp.b1 === comp.b3 && comp.b1 !== "") {
			alert("WINNER!");
		}
		// 3rd winning option comparison
		else if (comp.c1 === comp.c2 && comp.c1 === comp.c3 && comp.c1 !== "") {
			alert("WINNER!");
		}
		// 4th winning option comparison
		else if (comp.a1 === comp.b1 && comp.a1 === comp.c1 && comp.a1 !== "") {
			alert("WINNER!");
		}
		// 5th winning option comparison
		else if (comp.a2 === comp.b2 && comp.a2 === comp.c2 && comp.a2 !== "") {
			alert("WINNER!");
		}
		// 6th winning option comparison
		else if (comp.a3 === comp.b3 && comp.a3 === comp.c3 && comp.a3 !== "") {
			alert("WINNER!");
		}
		// 7th winning option comparison
		else if (comp.a1 === comp.b2 && comp.a1 === comp.c3 && comp.a1 !== "") {
			alert("WINNER!");
		}
		// 8th winning option comparison
		else if (comp.a3 === comp.b2 && comp.a3 === comp.c1 && comp.a3 !== "") {
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
