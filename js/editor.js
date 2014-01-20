$(document).ready(function () {
    var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        parserfile: ["parsepython.js"],
        autofocus: true,
        theme: "solarized dark",
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
                var output = $('#edoutput');
                var outf = function (text) {
                    output.text(output.text() + text);
                };
                Sk.configure({output: outf, read: builtinRead});
                if (e.ctrlKey) {
                    e.stop();
                    Sk.canvas = "mycanvas";
                    Sk.pre = "edoutput";
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
    
    $(":button").click(function () {
        var output = $('#edoutput');
        var outf = function (text) {
            output.text(output.text() + text);
        };
        Sk.configure({output: outf, read: builtinRead})
        Sk.canvas = "mycanvas";
        Sk.pre = "edoutput";
        Sk.importMainWithBody("<stdin>", false, editor.getValue());
        console.log("button clicked");
    });

    $("#toggledocs").click(function (e) {
        $("#quickdocs").toggle();
    });

   
    $('#clearoutput').click(function (e) {
        $('#edoutput').text('');
        $('#mycanvas').hide();
    });


    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    editor.focus();
});
