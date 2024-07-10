function GetNextTabbable(jQueryElement, offset = 1) {
    const tabbables = $(':input, *[tabindex][tabindex!="-1"]').filter(':visible');
    const index = tabbables.index(jQueryElement);
    return tabbables.eq(index + offset);
}
