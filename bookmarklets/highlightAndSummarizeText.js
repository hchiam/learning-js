javascript: (async () => {
  /*
  this bookmarklet combines ideas from: 
   https://github.com/hchiam/learning-js/blob/main/bookmarklets/highlightWhatYouClick.js 
  and: 
   https://gist.github.com/hchiam/3e42e912910a1e4394c3e62e39887b71
  and: 
   https://github.com/hchiam/learning-prompt-eng/blob/main/example_prompts/pages/index.js
  */
  let apiKey = "";
  window.useHighlightAndSummarize = !window.useHighlightAndSummarize;
  highlightTextToSummarize();

  function highlightTextToSummarize() {
    [...document.body.querySelectorAll("*")].forEach((x) => {
      x.addEventListener("click", async (e) => {
        if (!window.useHighlightAndSummarize) return;
        e.stopPropagation();
        x.style.background = "gold";
        x.style.color = "black";
        if (e.target.wasSummarized) {
          alert("Already summarized this (see console log).");
        } else {
          document.body.inert = true;
          try {
            await getSummary(e.target);
            e.target.wasSummarized = true;
          } catch (err) {
            e.target.wasSummarized = false;
          }
          document.body.inert = false;
        }
      });
      let outline = x.style.outline;
      x.addEventListener("mouseover", (e) => {
        if (!window.useHighlightAndSummarize) return;
        e.stopPropagation();
        x.style.outline = "solid 3px gold";
      });
      x.addEventListener("mouseout", (e) => {
        if (!window.useHighlightAndSummarize) return;
        e.stopPropagation();
        x.style.outline = outline;
      });
    });
  }

  async function getSummary(element) {
    apiKey = apiKey || prompt("OpenAI API key:");

    const text = limitTo3000Words(element.innerText);

    const result = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Summarize the following text into one sentence, then list any main headings or major points: \n\n---\n\n${text}\n\n---\n\n`,
        temperature: 0.6,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    }).catch(error => {
      throw new Error('Error', {cause: error});
    });
    if (!result.ok) {
      alert(`Error: ${await result.text()}\n\nLook at the console log for the text that was selected.`);
      console.log(element.innerText);
      throw new Error(`Error: ${await result.text()}`);
    }
    const json = await result.json();
    const summary = json.choices[0].text;
    console.log(element, summary);
    alert(summary);
  }

  function limitTo3000Words(text) {
    const words = text.split(" ");
    if (words.length > 3000) {
      return words.slice(0, 3000).join(" ");
    } else {
      return text;
    }
  }
})();
