'use strict'

function getArrayableItems(param){
    if(Array.isArray(param)){
        return param
    } else if(param instanceof Object){
        return Object.entries(param);
    }
}

function getValueFilterConcat(param){
    if(Array.isArray(param)){
        return param
    } else if(param instanceof Object){
        let result = []
        return Object.entries(param).forEach(val => result = val[1])
    }
}

module.exports = {
    getArrayableItems,
    getValueFilterConcat,
}
