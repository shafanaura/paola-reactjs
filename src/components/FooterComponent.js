import React from "react";
import { loadCSS } from "fg-loadcss";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > .fa": {
			margin: theme.spacing(2),
		},
	},
}));

export default function FooterComponent() {
	const classes = useStyles();

	React.useEffect(() => {
		const node = loadCSS(
			"https://use.fontawesome.com/releases/v5.12.0/css/all.css",
			document.querySelector("#font-awesome-css"),
		);

		return () => {
			node.parentNode.removeChild(node);
		};
	}, []);

	return (
		<div className={classes.root}>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				style={{
					height: 60,
					backgroundColor: "#192250",
				}}
			>
				<Grid
					container
					direction="row"
					justify="space-evenly"
					alignItems="center"
					style={{
						maxWidth: 300,
					}}
				>
					<Icon className="fab fa-linkedin-in" style={{ color: "#FFF" }} />
					<Icon className="fab fa-facebook-f" style={{ color: "#FFF" }} />
					<Icon className="fab fa-twitter" style={{ color: "#FFF" }} />
					<Icon className="fab fa-google-plus-g" style={{ color: "#FFF" }} />
					<Icon className="fab fa-instagram" style={{ color: "#FFF" }} />
				</Grid>
			</Grid>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				style={{ height: 40 }}
			>
				<Typography color="textSecondary">&copy; 2018 By Paola.id</Typography>
			</Grid>
		</div>
	);
}
