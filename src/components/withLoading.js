import React, { Fragment } from "react";
import styled from "styled-components";
import { FaCircle } from "react-icons/fa";

const withLoading = opacity => props => (
	<Fragment>
		<ColorWrapper opacity={`${opacity}`} {...props}>
			<FaCircle />
		</ColorWrapper>
	</Fragment>
);

export const ColorWrapper = styled.span`
	color: rgba(0, 116, 152, ${props => props.opacity});
	font-size: 26px;
	margin: 0 5px;
`;
export const WithLoading0 = withLoading(0);
export const WithLoading1 = withLoading(0.1);
export const WithLoading2 = withLoading(0.2);
export const WithLoading3 = withLoading(0.3);
export const WithLoading4 = withLoading(0.4);
export const WithLoading5 = withLoading(0.5);
export const WithLoading6 = withLoading(0.6);
export const WithLoading7 = withLoading(0.7);
export const WithLoading8 = withLoading(0.8);
export const WithLoading9 = withLoading(0.9);
export const WithLoading10 = withLoading(1);

export const Loading0 = () => (
	<Fragment>
		<WithLoading10 />
		<WithLoading7 />
		<WithLoading0 />
	</Fragment>
);

export const Loading1 = () => (
	<Fragment>
		<WithLoading9 />
		<WithLoading8 />
		<WithLoading1 />
	</Fragment>
);

export const Loading2 = () => (
	<Fragment>
		<WithLoading7 />
		<WithLoading9 />
		<WithLoading3 />
	</Fragment>
);

export const Loading3 = () => (
	<Fragment>
		<WithLoading4 />
		<WithLoading1 />
		<WithLoading5 />
	</Fragment>
);

export const Loading4 = () => (
	<Fragment>
		<WithLoading2 />
		<WithLoading9 />
		<WithLoading7 />
	</Fragment>
);

export const Loading5 = () => (
	<Fragment>
		<WithLoading0 />
		<WithLoading6 />
		<WithLoading1 />
	</Fragment>
);
