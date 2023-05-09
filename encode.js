function encode(x){return btoa(x.padEnd(Math.ceil(x.length/3)*3,' '))}

// mnemonic: btoa = beautiful to awful, atob = awful to beautiful https://stackoverflow.com/a/65207102
// using padEnd to avoid outputting strings that always end with "="
