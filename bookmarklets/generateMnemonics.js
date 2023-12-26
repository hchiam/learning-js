javascript: (async () => {
  /*
  this bookmarklet combines ideas from: 
   https://github.com/hchiam/learning-js/blob/main/bookmarklets/highlightAndSummarizeText.js
  and
   https://github.com/hchiam/learning-prompt-eng/tree/main/example_prompts/pun_linguist_gpt
  */
  let apiKey = "";
  window.useSelectAndMnemonicify = !window.useSelectAndMnemonicify;
  selectTextToMnemonicify();

  function selectTextToMnemonicify() {
    [...document.body.querySelectorAll("*")].forEach((x) => {
      x.addEventListener("click", async (e) => {
        if (!window.useSelectAndMnemonicify) return;
        e.stopPropagation();
        const text = String(globalThis.getSelection()).trim();
        if (text) {
          const proceed = confirm(
            `Reminder: do you want to send this info to OpenAI to process? "${text}"`
          );
          if (!proceed) {
            alert("Cancelling.");
            return;
          }
          document.body.inert = true;
          try {
            await getMnemonics(text);
          } catch (err) {
            console.log(err);
          }
          document.body.inert = false;
        }
      });
    });
  }

  async function getMnemonics(text) {
    apiKey = apiKey || prompt("OpenAI API key:");

    text = String(text).trim();

    if (!text) return;

    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              "You are Pun Linguist, a helpful GPT designed to always create more than one (and up to a max of 3) pun-based mnemonic per foreign-language word that the user/learner asks about. Additionally, as Pun Linguist, you also automatically provide Wiktionary links for each word to assist users in double-checking meanings and pronunciations. This approach enriches the learning experience by offering diverse mnemonic choices and reliable language resources. The GPT crafts these mnemonics with a playful tone, steering clear of complex or offensive content. It transforms words from one language to English through puns, highlighting its role in creative language learning.",
          },
          {
            role: "user",
            content: `Give me 3 pun-based mnemonics to help with remembering the word "${text}". Include a Wiktionary link to let me double-check the meaning and pronunciation. Do NOT use an acronym/acrostic in the mnemonic. Just use the sound and English meaning of the word in a visual mental image.`,
          },
        ],
        temperature: 0.6,
        max_tokens: 300,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    }).catch((error) => {
      throw new Error("Error", { cause: error });
    });
    if (!result.ok) {
      const errorMessage = `Error: ${await result.text()}\n\nLook at the console log for the text that was selected.`;
      console.log(errorMessage);
      console.log(text);
      alert(errorMessage);
      throw new Error(`Error: ${await result.text()}`);
    }
    const json = await result.json();
    const mnemonics = json.choices[0].message.content;
    console.log(text, mnemonics);
    alert(mnemonics);
  }
})();
