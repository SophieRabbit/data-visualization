const TEST = 'TEST';

function tests() {
    return {
        type: 'TEST',
        payload: {
            data: []
        }
    };
}

export default {
    ACTION_TYPES: {
        TEST
    },
    ACTION: {
        tests
    }
};
