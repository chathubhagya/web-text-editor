
document.execCommand('defaultParagraphSeparator', false, 'p');

// Formatting functions
function applyBold() {
    document.execCommand('bold', false, null);
}
function applyUnderline() {
    document.execCommand('underline', false, null);
}
function applyItalic() {
    document.execCommand('italic', false, null);
}

function applyFontColor() {
    var fontColor = document.getElementById('fontColorPicker').value;
    document.execCommand('foreColor', false, fontColor);
}

function alignText(align) {
    document.execCommand('justify' + align, false, null);
}