function getPercent (percent, number) {
    if (typeof percent === 'number' && typeof number === 'number') {
        return number / 100 * percent
    } else {
        return 'Invalid type of input value'
    }
}

module.exports = getPercent