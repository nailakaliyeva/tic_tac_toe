import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: "X"
		};
	}

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
		let winner = {
			aHor: document.querySelectorAll(".aHor"),
			bHor: document.querySelectorAll(".bHor"),
			cHor: document.querySelectorAll(".cHor"),
			a1Virt: document.querySelectorAll(".a1Virt"),
			a2Virt: document.querySelectorAll(".a2Virt"),
			a3Virt: document.querySelectorAll(".a3Virt"),
			a1Diag: document.querySelectorAll(".a1Diag"),
			a3Diag: document.querySelectorAll(".a3Diag")
		};
		// let winningOptions = {
		// 	a1: document.querySelector("#a1").style,
		// 	a2: document.querySelector("#a2").style,
		// 	a3: document.querySelector("#a3").style,
		// 	b1: document.querySelector("#b1").style,
		// 	b2: document.querySelector("#b2").style,
		// 	b3: document.querySelector("#b3").style,
		// 	c1: document.querySelector("#c1").style,
		// 	c2: document.querySelector("#c2").style,
		// 	c3: document.querySelector("#c3").style
		// };
		// 1st winning option comparison
		if (comp.a1 === comp.a2 && comp.a1 === comp.a3 && comp.a1 !== "") {
			setTimeout(function() {
				// winningOptions.a1.backgroundColor = "blue";
				// winningOptions.a2.backgroundColor = "blue";
				// winningOptions.a3.backgroundColor = "blue";

				winner.aHor.map(item => {
					return (item.style.backgroundColor = "blue");
				});

				let btn = document.createElement("BUTTON");
				btn.className = "btn btn-primary";
				btn.innerHTML = "Reset";
				document.querySelector(".parent").appendChild(btn);
				btn.onclick = () => {
					window.location.reload();
				};
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
					<div
						className="cell aHor a1Virt a1Diag"
						id="a1"
						onClick={e => this.xo(e)}
					/>
					<div
						className="cell aHor a2Virt"
						id="a2"
						onClick={e => this.xo(e)}
					/>
					<div
						className="cell aHor a3Virt a3Diag"
						id="a3"
						onClick={e => this.xo(e)}
					/>
				</div>
				<div className="bs">
					<div
						className="cell bHor a1Virt"
						id="b1"
						onClick={e => this.xo(e)}
					/>
					<div
						className="cell bHor a2Virt a1Diag a3Diag"
						id="b2"
						onClick={e => this.xo(e)}
					/>
					<div
						className="cell bHor a3Virt"
						id="b3"
						onClick={e => this.xo(e)}
					/>
				</div>
				<div className="cs">
					<div
						className="cell cHor a1Virt a3Diag"
						id="c1"
						onClick={e => this.xo(e)}
					/>
					<div
						className="cell cHor a2Virt"
						id="c2"
						onClick={e => this.xo(e)}
					/>
					<div
						className="cell cHor a3Virt a1Diag"
						id="c3"
						onClick={e => this.xo(e)}
					/>
				</div>
			</div>
		);
	}
}
