import {
    RESET_STRING,
    SET_STRING,
} from "./string.types"

/**
 * @desc action creator to reset string to original state
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to reset string
 * @param {Object} [param.meta] - additional meta fields
 * @returns {{meta: {reducerName: String}, type: String}}
 */
export const resetStringAction = ({ reducerName, meta }) => ({
    type: RESET_STRING,
    meta: {
        reducerName,
        ...meta,
    },
})

/**
 * @desc action creator to set string
 * @param {Object} param - this is object param
 * @param {String} param.reducerName - reducer name to set string
 * @param {String} param.string - value to set reducer to
 * @param {Object} [param.meta] - additional meta fields
 * @throws {Error} Action payload must be of type String
 * @returns {{payload: String, meta: {reducerName: String}, type: String}}
 */
export const setStringAction = ({ reducerName, string, meta }) => {
    if (typeof string !== "string" || string instanceof String) {
        throw Error(`@wecreatesoftware/redux-higher-order-reducers(setStringAction) => Action payload[${JSON.stringify(string)}] must be of type String`)
    }

    return {
        type: SET_STRING,
        payload: string,
        meta: {
            reducerName,
            ...meta,
        },
    }
}
