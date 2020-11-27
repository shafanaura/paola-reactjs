import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BodyComponent from "./components/BodyComponent";
import NavbarComponent from "./components/NavbarComponent";

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<NavbarComponent />
			<BodyComponent />
		</React.Fragment>
	);
};

export default App;
