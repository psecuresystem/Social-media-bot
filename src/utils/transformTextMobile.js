function transformTextMobile(text) {
    final_text = ''
    open_b = false
    close_b = true
    open_i = false
    close_i = true
    for(i = 0; i < text.length; i++) {
        let char = text[i]
        if(char == '*') {
            if(close_b) {
                if(open_i) {
                    final_text += '</i><bi>'
                    open_b = true
                    close_b = false
                } else {
                    final_text += '<b>'
                    open_b = true
                    close_b = false
                }
            } else if(open_b) {
                if(open_i) {
                    final_text += '</bi><i>'
                    open_b = false
                    close_b = true
                } else {
                    final_text += '</b>'
                    open_b = false
                    close_b = true
                }
            }
        } else if(char == '_') {
            if(close_i) {
                if(open_b === true) {
                    final_text += '</b><bi>'
                    open_i = true
                    close_i = false
                } else {
                    final_text += '<i>'
                    open_i = true
                    close_i = false
                }
            } else if(open_i) {
                if(open_b) {
                    final_text += '</bi><b>'
                    open_i = false
                    close_i = true
                } else {
                    final_text += '</i>'
                    open_i = false
                    close_i = true
                }
            }
        } else {
            final_text += char
        }
    }
    return final_text
}

module.exports = transformTextMobile