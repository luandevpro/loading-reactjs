import * as Types from "../constants/ActionTypes";

const appReducer = (state, action) => {
	switch (action.type) {
		case Types.ACTIVE_INDEX:
			return {
				...state,
				activeIndex:
					state.activeIndex + 1 === 6 ? 0 : state.activeIndex + 1,
			};
		default:
			return state;
	}
};

export default appReducer;
