import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BgImg from "../assets/img/bg.png";
import axios from "axios";

export default class BodyComponent extends Component {
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
		// console.log(person.data);
		return (
			<div>
				<Card>
					<CardMedia
						style={{ height: 470 }}
						image={BgImg}
						title="Contemplative Reptile"
					>
						{person.data.map((person, i) => {
							return (
								<div key={i} className="card mb-3">
									<Grid container direction="row" justify="center">
										<div>
											<img
												src={person.picture.large}
												class="card-img"
												style={{ height: 380, paddingTop: 20 }}
											/>
										</div>
										<div style={{ paddingTop: 60 }}>
											<CardContent
												style={{
													backgroundColor: "#FFF",
													width: 380,
													height: 380,
												}}
											>
												<Typography
													variant="h4"
													color="textSecondary"
													gutterBottom
												>
													{person.name.first} {person.name.last}
												</Typography>
												<Typography
													color="textSecondary"
													style={{ marginTop: -10, paddingBottom: 20 }}
												>
													Developer
												</Typography>
												<Grid
													container
													direction="row"
													justify="flex-start"
													alignItems="flex-start"
												>
													<div style={{ minWidth: 100, maxWidth: 100 }}>
														<Grid
															container
															direction="row"
															justify="space-between"
															alignItems="flex-start"
														>
															<div>
																<Typography color="textSecondary">
																	Date of birth
																</Typography>
																<Typography color="textSecondary">
																	Gender
																</Typography>
																<Typography color="textSecondary">
																	Phone
																</Typography>
																<Typography color="textSecondary">
																	Email
																</Typography>
																<Typography color="textSecondary">
																	Location
																</Typography>
															</div>
															<div>
																<Typography>:</Typography>
																<Typography>:</Typography>
																<Typography>:</Typography>
																<Typography>:</Typography>
																<Typography>:</Typography>
															</div>
														</Grid>
													</div>
													<div style={{ minWidth: 240, maxWidth: 240 }}>
														<Typography color="textSecondary">
															{person.dob.date}
														</Typography>
														<Typography color="textSecondary">
															{person.gender}
														</Typography>
														<Typography color="textSecondary">
															{person.cell}
														</Typography>
														<Typography color="textSecondary">
															{person.email}
														</Typography>
														<Typography color="textSecondary">
															{person.location.street.name}{" "}
															{person.location.city} {person.location.state}{" "}
															{person.location.country}{" "}
															{person.location.postcode}
														</Typography>
													</div>
												</Grid>
											</CardContent>
										</div>
									</Grid>
								</div>
							);
						})}
					</CardMedia>
				</Card>
			</div>
		);
	}
}
