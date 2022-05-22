function transformTextWeb(text) {
    final_text = ''
    open_b = false
    close_b = true
    open_i = false
    close_i = true
    for(i = 0; i < text.length; i++) {
        let char = text[i]
        if(char == '*') {
            if(close_b) {
                final_text += '<b>'
                open_b = true
                close_b = false
            } else if(open_b) {
                final_text += '</b>'
                open_b = false
                close_b = true
            }
        } else if(char == '_') {
            if(close_i) {
                final_text += '<i>'
                open_i = true
                close_i = false
            } else if(open_i) {
                final_text += '</i>'
                open_i = false
                close_i = true
            }
        } else {
            final_text += char
        }
    }
    return final_text
}

module.exports = transformTextWeb