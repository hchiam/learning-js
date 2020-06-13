console.log(
  `%cThis text will have blue text on a lightgrey background.%c
%cThis text will have lime text on a black bacground, with padding.%c
`,
  "color: blue; background: lightgrey;", // for after the 1st %c
  "", // for after the 2nd %c
  "color: lime; background: black; padding: 5px 10px;", // for after the 3rd %c
  "" // for after the 4th %c
);
