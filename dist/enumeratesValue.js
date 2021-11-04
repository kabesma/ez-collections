'use strict'

function getArrayableItems(param){
    if(Array.isArray(param)){
        return param
    } else if(param instanceof Object){
        return Object.entries(param);
    }
}

module.exports = {
    getArrayableItems,
}
