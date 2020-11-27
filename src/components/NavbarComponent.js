import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	root: {
		// paddingTop: 0,
	},
	title: {
		flexGrow: 1,
		color: "#192250",
	},
}));

const NavText = (props) => {
	return (
		<div>
			<Typography style={{ padding: 10, fontWeight: 300, color: "#192250" }}>
				{props.text}
			</Typography>
		</div>
	);
};

export default function NavbarComponent() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container style={{ backgroundColor: "#932A8A", height: 8 }} />
			<AppBar
				position="static"
				style={{
					backgroundColor: "transparent",
					paddingTop: 20,
					paddingBottom: 20,
				}}
			>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Rachel Smith
					</Typography>
					<NavText text="ABOUT" />
					<NavText text="RESUME" />
					<NavText text="EDUCATION" />
					<NavText text="PORTFOLIO" />
				</Toolbar>
			</AppBar>
		</div>
	);
}
