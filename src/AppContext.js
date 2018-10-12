import React, { Component } from "react";
import styled from "styled-components";
import { Provider } from "./contexts";
import { activeIndex } from "./reducers";

export default class AppContext extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0,
			activeIndexReducers: action =>
				this.setState(state => activeIndex(state, action)),
		};
	}
	render() {
		var { children } = this.props;
		return (
			<Provider value={this.state}>
				<ContainerWrapper>{children}</ContainerWrapper>
			</Provider>
		);
	}
}

export const ContainerWrapper = styled.div`
	margin-top: 200px;
	text-align: center;
`;
