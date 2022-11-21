import React from "react";
import ReactDOM from "react-dom";
import Top from "./components/top.jsx";
import Textpart from "./components/textpart.jsx";
import Director from "./components/director.jsx";
import Profs from "./components/profs.jsx";
import Team from "./components/team.jsx";
ReactDOM.render(
	<div>
		<Top />
		<Textpart />
		<Director />
		<Profs/>
		<Team />
	</div>
	,document.getElementById("root")
);
