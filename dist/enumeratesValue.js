'use strict'

function getArrayableItems(param){
    if(Array.isArray(param)){
        return param
    }
}

module.export = {
    getArrayableItems,
}
