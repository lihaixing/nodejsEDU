module.exports = function myConsole(msg, color, size, noLine) {
    let str = '%c'
    if (noLine) {
        str += msg
    } else {
        str += '-----------' + msg + '-----------'
    }
    let style = ''
    if (color) {
        style += 'color:' + color + ';'
    } else {
        style += 'color:red;'
    }
    if (size) {
        style += 'font-size:' + size + 'px'
    } else {
        style += 'font-size:20px'
    }
    console.log(str, style)
}