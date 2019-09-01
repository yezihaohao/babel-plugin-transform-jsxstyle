/*
 * File: less.js
 * Desc: less handler
 * File Created: 2019-09-01 17:27:37
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
import less from 'less';
import deasync from 'deasync';

export default content => {
    let result = '';
    let done = false;
    less.render(content).then(
        function(output) {
            result = output.css;
            done = true;
        },
        function(error) {
            result = 'error';
            done = true;
        }
    );
    deasync.loopWhile(() => !done);
    return result;
};
