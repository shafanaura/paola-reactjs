import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BgImg from "../assets/img/bg.png";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 450,
	},
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card>
			<CardMedia
				className={classes.media}
				image={BgImg}
				title="Contemplative Reptile"
			>
				<Typography>dadawawd</Typography>
			</CardMedia>
		</Card>
	);
}
