function getCells(excelText) {
    return excelText.split('\n').filter(row => row.trim()).map(row => row.split('\t'));
}
