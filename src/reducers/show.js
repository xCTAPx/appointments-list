import { onShow } from "../actions/index";

const showValue = (state = false, action) => {
    switch (action.type) {
        case "SHOW":
            return !state;
        default:
            return state;
    }
}

export default showValue;