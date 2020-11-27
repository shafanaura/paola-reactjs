import React, { Component } from "react";

class App extends Component {
	state = {
		pictures: [],
	};

	// ------ OLD API CALL  ------ //

	componentDidMount() {
		fetch(`https://randomuser.me/api/`)
			.then((results) => {
				return results.json();
			})
			.then((data) => {
				let pictures = data.results.map((person) => {
					return (
						<div>
							<img src={person.picture.large} />
							<p>
								{person.name.first} {person.name.last}
							</p>
						</div>
					);
				});
				this.setState({ pictures: pictures });
				console.log(this.state.pictures);
			});
	}

	render() {
		// ------  THE RETURN BLOCK  ------ //

		return (
			<div className="App">
				{/* HEADER */}

				<header className="App-header">
					<h1>30 days of React</h1>
					<h2>Day Twelve / Person Generator</h2>
				</header>

				{/* COMPONENTS */}

				{this.state.pictures}
			</div>
		);
	}
}

export default App;
