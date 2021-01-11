import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";

const NavText = (props) => {
	return (
		<div>
			<Typography style={{ padding: 10, fontWeight: 300, color: "#192250" }}>
				{props.text}
			</Typography>
		</div>
	);
};

export default class NavbarComponent extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		axios.get(`https://randomuser.me/api`).then((res) => {
			const data = res.data.results;
			this.setState({ data });
		});
	}
	render() {
		const person = this.state;
		return (
			<div>
				<Container style={{ backgroundColor: "#932A8A", height: 8 }} />
				<AppBar
					position="static"
					style={{
						backgroundColor: "transparent",
						paddingTop: 9,
						paddingBottom: 9,
					}}
				>
					{person.data.map((person, i) => {
						return (
							<Toolbar>
								<Typography
									key={i}
									variant="h6"
									style={{ flexGrow: 1, color: "#192250" }}
								>
									{person.name.first}
								</Typography>
								<NavText text="ABOUT" />
								<NavText text="RESUMEE" />
								<NavText text="EDUCATION" />
								<NavText text="PORTFOLIO" />
							</Toolbar>
						);
					})}
				</AppBar>
			</div>
		);
	}
}
