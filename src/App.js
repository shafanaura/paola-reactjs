import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BodyComponent from "./components/BodyComponent";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<NavbarComponent />
			<BodyComponent />
			<FooterComponent />
		</React.Fragment>
	);
};

export default App;
