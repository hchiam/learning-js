/**
Example:

wrapWordsInEeastAsianLanguages('zh', '這是一個很長句子的範例，當句子很長時，我需要用它來示範單字換行到句子中的新行。');

<span style="white-space: nowrap;">這是</span><span style="white-space: nowrap;">一個</span><span style="white-space: nowrap;">很長</span><span style="white-space: nowrap;">句子</span><span style="white-space: nowrap;">的</span><span style="white-space: nowrap;">範例</span><span style="white-space: nowrap;">，</span><span style="white-space: nowrap;">當</span><span style="white-space: nowrap;">句子</span><span style="white-space: nowrap;">很長</span><span style="white-space: nowrap;">時</span><span style="white-space: nowrap;">，</span><span style="white-space: nowrap;">我</span><span style="white-space: nowrap;">需要</span><span style="white-space: nowrap;">用</span><span style="white-space: nowrap;">它</span><span style="white-space: nowrap;">來</span><span style="white-space: nowrap;">示範</span><span style="white-space: nowrap;">單字</span><span style="white-space: nowrap;">換</span><span style="white-space: nowrap;">行</span><span style="white-space: nowrap;">到</span><span style="white-space: nowrap;">句子</span><span style="white-space: nowrap;">中的</span><span style="white-space: nowrap;">新</span><span style="white-space: nowrap;">行</span><span style="white-space: nowrap;">。</span>
*/

function wrapWordsInEeastAsianLanguages(languageCode, text) {
  var languageSegmenter = new Intl.Segmenter(languageCode, { granularity: "word" });
  var segments = Array.from(languageSegmenter.segment(text)).map(function(x){return x.segment;});
  var processedText = segments.map(x=>'<span style="white-space: nowrap;">' + x + '</span>').join('');
  return processedText;
}
