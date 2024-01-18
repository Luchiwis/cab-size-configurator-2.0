//module used to Show the data in a more readable way for the user based on constants

import * as constants from './constants.js';

export function prettify(data) {
    return constants.PRETTIFY[data] || data;
}