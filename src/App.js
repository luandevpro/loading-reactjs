import React, { Component, Fragment } from "react";
import AppContext from "./AppContext";
import LoadingContainer from "./containers/LoadingContainer";
import {
	Loading0,
	Loading1,
	Loading2,
	Loading3,
	Loading4,
	Loading5,
} from "./components/withLoading";

class App extends Component {
	render() {
		return (
			<AppContext>
				<LoadingContainer>
					<Loading0 />
					<Loading1 />
					<Loading2 />
					<Loading3 />
					<Loading4 />
					<Loading5 />
				</LoadingContainer>
			</AppContext>
		);
	}
}

export default App;
