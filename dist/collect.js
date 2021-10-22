'use strict'

let item = []

function collect(args) {
    item = args
	return {
        'all' : all(),
        'avg' : avg()
    }
}

const all = () => {
    return item
}

const avg = () => {
    return item.reduce((acc, curr) => acc + curr) / item.length
}


module.exports = {
    collect,
}
