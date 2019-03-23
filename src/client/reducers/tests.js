import { ACTION_TYPES } from '@/actions';
import immutable from 'immutable';

const initialState = immutable.fromJS({
    test: {}
});

function tests(state = initialState, action) {
    const stateJS = state.toJS();
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.TEST:
            stateJS.test = payload;
            break;
        default:
            stateJS;
    }
    return immutable.fromJS(stateJS);
}

export default tests;
