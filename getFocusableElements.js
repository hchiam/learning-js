/** (uses jQuery) */
function GetFocusableElements() {
    return $(':input,a,[contenteditable]') // note the ":" before input - https://github.com/hchiam/learning-jquery/tree/main#:~:text=%3Ainput,-and%20%3Abutton%20are
        .filter(':visible:not(:hidden):not(:disabled):not([tabindex="-1"]):not([contenteditable="false"])');
        // jQuery :visible checks visibility and opacity, while jQuery :hidden checks display:none and type="hidden" and 0-width/height
}
