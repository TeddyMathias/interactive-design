



$.ajax({
"url":"https://www.kimonolabs.com/api/8q7wmt2e?apikey=QwI8aP4TjOnQEK5SgFAlAveqRNmdIfjQ",
"crossDomain":true,
"dataType":"jsonp",
//Make a call to the Kimono API following the "url"
'success': function(response){
// If the call request was successful and the data was retrieved, this function will create a list displaying the data
var collection = response.results.collection1;
for (var i = 1; i < 500; i++){
// Traverses through every element in the entire collection
// adds the text and the links from the first property into the list
var randomCollection = collection[Math.floor(Math.random()*collection.length)];
var band = randomCollection.bandnames.text;
if(i == 6) {
$(".title").append('<h2>'+ band + '</h2>');
var band = band.replace(/\s+/g, '-');
var band = band.replace('&', 'and');
var band = band.replace('"', '');
var lang = ['fr', 'de'];
var lan = lang[Math.floor(Math.random() * lang.length)];
/*$("#player").append('<source id="voice-'+band+'" src="http://translate.google.com/translate_tts?tl='+lan+'&amp;q='+ band +'" type="audio/mpeg">');
*/
var worte = new SpeechSynthesisUtterance(band);
var stimmen = window.speechSynthesis.getVoices();
var voice = ['2','3', '4','5', '6','7',];
var vox = voice[Math.floor(Math.random() * voice.length)];
worte.voice = stimmen[vox];
var rhythm = Math.floor((Math.random() * 5000) + 100);
worte.pitch = 1;
worte.rate = 1;
var rhythm = Math.floor((Math.random() * 5000) + 100);
setInterval(function () {window.speechSynthesis.speak(worte)},rhythm);
}
// adds the text and the links from the first property into the list
}
}
})

$.ajax({
"url":"https://www.kimonolabs.com/api/2jex0l9w?apikey=QwI8aP4TjOnQEK5SgFAlAveqRNmdIfjQ",
"crossDomain":true,
"dataType":"jsonp",
//Make a call to the Kimono API following the "url"
'success': function(response){
// If the call request was successful and the data was retrieved, this function will create a list displaying the data
var collection = response.results.collection1;
for (var i = 1; i < 500; i++){
// Traverses through every element in the entire collection
// adds the text and the links from the first property into the list
var randomCollection = collection[Math.floor(Math.random()*collection.length)];
var music = randomCollection.ethnomusic.href;
if(i == 6) {
$("#music").append('<source src="'+ music +'" type="audio/mpeg">');
}
// adds the text and the links from the first property into the list
}
}
})

$.ajax({
"url":"https://www.kimonolabs.com/api/8qf5670i?apikey=QwI8aP4TjOnQEK5SgFAlAveqRNmdIfjQ",
"crossDomain":true,
"dataType":"jsonp",
//Make a call to the Kimono API following the "url"
'success': function(response){
// If the call request was successful and the data was retrieved, this function will create a list displaying the data
var collection = response.results.collection1;
for (var i = 1; i < 500; i++){
// Traverses through every element in the entire collection
// adds the text and the links from the first property into the list
var randomCollection = collection[Math.floor(Math.random()*collection.length)];
var bandPhoto = randomCollection.bandphoto.src;
if(i == 1) {
$('#cover').css('background-image', 'url(' + bandPhoto + ')');
}
// adds the text and the links from the first property into the list
}
}
})
function randomizeFonts() {
if (window.jQuery) {
elements = jQuery('div, p, td, li, span, button, a, strong, h1, h2, h3, h4, h5, h6');
families = jQuery.unique(elements.map(function() { return jQuery(this).css('font-family') }));
families.push("impact","helvetica","frijole","bangers");
elements.each(function() {
jQuery(this).css('font-family', families[Math.floor(Math.random()*families.length)]);
});
} else {
var jq = document.createElement('script'); jq.type = 'text/javascript';
jq.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(jq);
setTimeout(randomizeFonts, 0.1);
}
}
randomizeFonts();
$('#next').click(function() {
location.reload();
});


