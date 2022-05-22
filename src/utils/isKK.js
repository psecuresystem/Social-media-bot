function isKK(body) {
    if(!body) {
        return false
    }
    if(!body.toLowerCase().startsWith("*kingdom keys*")) {
        console.log('cond 1 met')
        return false
    }
    if(!(body.toLowerCase().includes('*text*:') || body.toLowerCase().includes('*text:*'))) {
        console.log('cond 3 met')
        return false
    }
    return true
}

module.exports = isKK