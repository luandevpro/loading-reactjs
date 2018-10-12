import React, { Component } from "react";
import styled from "styled-components";
import * as Types from "../constants/ActionTypes";

export default class Loading extends Component {
	componentDidMount() {
		this.setinterval = setInterval(() => {
			this.props.activeIndexReducers({
				type: Types.ACTIVE_INDEX,
			});
		}, 150);
	}
	componentWillUnmount() {
		clearInterval(this.setinterval);
	}
	render() {
		var { children, activeIndex } = this.props;
		return <LoadingWrapper>{children[activeIndex]}</LoadingWrapper>;
	}
}

export const LoadingWrapper = styled.div``;
