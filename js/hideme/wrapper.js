function betterLoadJS(src, callback) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onreadystatechange = s.onload = function () {
        var state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    document.getElementsByTagName('head')[0].appendChild(s);
}

if(!window.$ && !window.OTSLoaded)
{
   window.OTSLoaded = true;
   betterLoadJS("http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js",betterLoadJS("/spring2014/js/OTS.js", function(){
    window.OTSLoaded = true;
   }) );
} else if (!window.OTSLoaded){
  window.OTSLoaded = true;
  betterLoadJS("http://gerbal.github.io/js/OTS.js", function(){
    window.OTSLoaded = true;
   })
};


