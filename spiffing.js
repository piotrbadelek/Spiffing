"use strict";
/* 
    An implementation of spiffing (https://github.com/nderjung/Spiffing) in JavaScript
*/

function spiffingReplaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function spiffingProcessStylesheet(code) {
    console.time("SpiffingExecutionTime");
    code = spiffingReplaceAll(code, "colour", "color");
    code = spiffingReplaceAll(code, "grey", "gray");
    code = spiffingReplaceAll(code, "!please", "!important");
    code = spiffingReplaceAll(code, "transparency", "opacity");
    code = spiffingReplaceAll(code, "centre", "center");
    code = spiffingReplaceAll(code, "photograph", "image");
    code = spiffingReplaceAll(code, "capitalise", "capitalize");
    console.timeEnd("SpiffingExecutionTime");
    console.log("Thank you for using SpiffingJS!");
    return code;
}

function spiffingDeprocessStylesheet(code) {
    console.time("SpiffingExecutionTime");
    code = spiffingReplaceAll(code, "color", "colour");
    code = spiffingReplaceAll(code, "gray", "grey");
    code = spiffingReplaceAll(code, "!important", "!please");
    code = spiffingReplaceAll(code, "opacity", "transparency");
    code = spiffingReplaceAll(code, "center", "centre");
    code = spiffingReplaceAll(code, "image", "photograph");
    code = spiffingReplaceAll(code, "capitalize", "capitalise");
    console.timeEnd("SpiffingExecutionTime");
    console.log("Thank you for using SpiffingJS!");
    return code;
}