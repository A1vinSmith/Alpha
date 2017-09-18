'use strict';

const customData = require('../package.json');

const TEST  = {
    getCustomData () {
        console.log(customData);
        return customData
    },
};

export default TEST