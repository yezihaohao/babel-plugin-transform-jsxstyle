/*
 * File: sass.js
 * Desc: sass handler
 * File Created: 2019-09-01 17:27:32
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
const sass = require('sass');

export default content => {
    let result;
    try {
        result = sass.renderSync({ data: content }).css.toString();;
    } catch (error) {
        result = 'error';
    }
    return result;
};

