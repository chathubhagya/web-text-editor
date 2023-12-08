function applyFontColor() {
    var fontColor = document.getElementById('fontColorPicker').value;
    document.execCommand('foreColor', false, fontColor);
}
