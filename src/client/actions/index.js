import Tests from './tests';


const ERRORS = {
    ERROR_401: 'ERROR_401',
    ERROR_500: 'ERROR_500'
};
const LOADING = {
    GLOBAL_LOADING_START: 'GLOBAL_LOADING_START',
    GLOBAL_LOADING_END: 'GLOBAL_LOADING_END'
};

function wrapExceptionHandler(actions) {
    const retActions = {};
    Object.keys(actions).forEach((key) => {
        const handler = actions[key];
        retActions[key] = async function (...args) {
            try {
                const result = await handler.apply(this, args);
                return result;
            } catch (response) {
                let type = ERRORS.ERROR_500;
                switch (response.code) {
                    case 401:
                    case '-401':
                        type = ERRORS.ERROR_401;
                        break;
                    default:
                        type = ERRORS.ERROR_500;
                }
                return {
                    type,
                    payload: response
                };
            }
        };
    });
    return retActions;
}

module.exports = wrapExceptionHandler({
    ...Tests.ACTION
});

module.exports.ACTION_TYPES = {
    ...ERRORS,
    ...LOADING,
    ...Tests.ACTION_TYPES
};