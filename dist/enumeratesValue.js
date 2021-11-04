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
        let obj = Object.entries(param)
        obj.forEach(val => result.push(val[1]))
        return result
    }
}

module.exports = {
    getArrayableItems,
    getValueFilterConcat,
}
