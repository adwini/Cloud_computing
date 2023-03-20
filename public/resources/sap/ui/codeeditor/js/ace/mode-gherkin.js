ace.define("ace/mode/gherkin_highlight_rules",[],function(e,t,n){var r=e("../lib/oop");var i=e("./text_highlight_rules").TextHighlightRules;var o="\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";var a=function(){var e=[{name:"en",labels:"Feature|Background|Scenario(?: Outline)?|Examples",keywords:"Given|When|Then|And|But"}];var t=e.map(function(e){return e.labels}).join("|");var n=e.map(function(e){return e.keywords}).join("|");this.$rules={start:[{token:"constant.numeric",regex:"(?:(?:[1-9]\\d*)|(?:0))"},{token:"comment",regex:"#.*$"},{token:"keyword",regex:"(?:"+t+"):|(?:"+n+")\\b"},{token:"keyword",regex:"\\*"},{token:"string",regex:'"{3}',next:"qqstring3"},{token:"string",regex:'"',next:"qqstring"},{token:"text",regex:"^\\s*(?=@[\\w])",next:[{token:"text",regex:"\\s+"},{token:"variable.parameter",regex:"@[\\w]+"},{token:"empty",regex:"",next:"start"}]},{token:"comment",regex:"<[^>]+>"},{token:"comment",regex:"\\|(?=.)",next:"table-item"},{token:"comment",regex:"\\|$",next:"start"}],qqstring3:[{token:"constant.language.escape",regex:o},{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:o},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],"table-item":[{token:"comment",regex:/$/,next:"start"},{token:"comment",regex:/\|/},{token:"string",regex:/\\./},{defaultToken:"string"}]};this.normalizeRules()};r.inherits(a,i);t.GherkinHighlightRules=a});ace.define("ace/mode/gherkin",[],function(e,t,n){var r=e("../lib/oop");var i=e("./text").Mode;var o=e("./gherkin_highlight_rules").GherkinHighlightRules;var a=function(){this.HighlightRules=o;this.$behaviour=this.$defaultBehaviour};r.inherits(a,i);(function(){this.lineCommentStart="#";this.$id="ace/mode/gherkin";this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t);var i="  ";var o=this.getTokenizer().getLineTokens(t,e);var a=o.tokens;if(t.match("[ ]*\\|")){r+="| "}if(a.length&&a[a.length-1].type=="comment"){return r}if(e=="start"){if(t.match("Scenario:|Feature:|Scenario Outline:|Background:")){r+=i}else if(t.match("(Given|Then).+(:)$|Examples:")){r+=i}else if(t.match("\\*.+")){r+="* "}}return r}}).call(a.prototype);t.Mode=a});(function(){ace.require(["ace/mode/gherkin"],function(e){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=e}})})();
//# sourceMappingURL=mode-gherkin.js.map