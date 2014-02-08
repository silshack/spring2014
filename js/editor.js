
$(document).ready(function () {
  function main(idmod){
    function strip(html)
    {
      var tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
      //console.log('stripping');
    }
    var strippedtext = strip($('#code' + idmod).text());
    $('#code' + idmod).text(strippedtext.substr(1));
    var editor = CodeMirror.fromTextArea(document.getElementById('code' + idmod), {
        parserfile: ["parsepython.js"],
        autofocus: true,
        theme: "monokai",
        //path: "static/env/codemirror/js/",
        lineNumbers: true,
        textWrapping: false,
        indentUnit: 4,
        height: "160px",
        fontSize: "9pt",
        autoMatchParens: true,
        parserConfig: {'pythonVersion': 2, 'strictErrors': true},
        onKeyEvent: function (editor, e) {
            if (e.keyCode === 13 && e.type === "keydown") {
                var output = $('#edoutput' + idmod);
                var outf = function (text) {
                    output.text(output.text() + text);
                };
                Sk.configure({output: outf, read: builtinRead});
                if (e.ctrlKey) {
                    e.stop();
                    $('#edoutput'+idmod).text('');
                    Sk.canvas = "mycanvas" +idmod;
                    Sk.pre = "edoutput" +idmod;
                    Sk.importMainWithBody("<stdin>", false, editor.getValue());
                }
                else if (e.shiftKey) {
                    e.stop();
                    Sk.importMainWithBody("<stdin>", false, editor.selection());
                }
            }
            // $(":button").click(function () {
            //     var output = $('#edoutput');
            //     var outf = function (text) {
            //         output.text(output.text() + text);
            //     };
            //     Sk.configure({output: outf, read: builtinRead})
            //     Sk.canvas = "mycanvas";
            //     Sk.pre = "edoutput";
            //     Sk.importMainWithBody("<stdin>", false, editor.getValue());
            //     console.log("button clicked");
            // });
        }

    });
    $("#btn"+idmod).click(function () {
        var output = $("#edoutput" + idmod);
        var outf = function (text) {
            output.text(output.text() + text);
        };
        $("#edoutput" + idmod).text('');
        $("#mycanvas"+ +idmod).hide();
        Sk.configure({output: outf, read: builtinRead})
        Sk.canvas = "mycanvas" +idmod;
        Sk.pre = "edoutput" +idmod;
        Sk.importMainWithBody("<stdin>", false, editor.getValue());
        //console.log("button clicked");
    });

   
    $('#clearoutput' +idmod).click(function (e) {
        $('#edoutput' +idmod).text('');
        $('#mycanvas' +idmod).hide();
    });
    

    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    editor.focus();
    
  };
  for(var i=0,len=idmods.length; i<len; i++){
      main(idmods[i])
    }
});
