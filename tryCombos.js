let keepRunning = true;
async function tryCombos(arrayOfReels, callback = (combo)=>{}, combo = [], reelIndex = 0) {
    if (!keepRunning) return;

    const reel = arrayOfReels[reelIndex];
    for (let reelValue of reel) {
        const haveACombo = reelIndex === arrayOfReels.length - 1;
        if (haveACombo) {
            combo[reelIndex] = reelValue;
            await callback(combo);
        } else {
            combo[reelIndex] = reelValue;
            await tryCombos(arrayOfReels, callback, combo, reelIndex + 1);
        }
    }
}
async function sleep(ms) {
    await new Promise(r=>setTimeout(r, ms || 100));
}
exampleUsage();
async function exampleUsage() {
    const arrayOfReels = [['a','b','c'], [1,2,3]];

    const allCombos = [];

    await tryCombos(arrayOfReels, async (combo)=>{
        await sleep(100);
        console.log(combo.join(' '));
        allCombos.push(combo.join(' ')); // combo is a reference to an array, and may change
    });

    console.log(allCombos.join('\n'));
    console.log('DONE!');
};
