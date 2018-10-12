import React from "react";
import { Consumer } from "../contexts";
import Loading from "../components/Loading";

export default props => (
	<Consumer>
		{value => (
			<Loading
				{...props}
				activeIndex={value.activeIndex}
				activeIndexReducers={value.activeIndexReducers}
			>
				{props.children}
			</Loading>
		)}
	</Consumer>
);
