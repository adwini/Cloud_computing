ace.define("ace/mode/rust_highlight_rules",[],function(e,t,r){"use strict";var o=e("../lib/oop");var n=e("./text_highlight_rules").TextHighlightRules;var i=/\\(?:[nrt0'"\\]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\})/.source;var s=/[a-zA-Z_\xa1-\uffff][a-zA-Z0-9_\xa1-\uffff]*/.source;var a=function(){this.$rules={start:[{token:"variable.other.source.rust",regex:"'"+s+"(?![\\'])"},{token:"string.quoted.single.source.rust",regex:"'(?:[^'\\\\]|"+i+")'"},{token:"identifier",regex:"r#"+s+"\\b"},{stateName:"bracketedComment",onMatch:function(e,t,r){r.unshift(this.next,e.length-1,t);return"string.quoted.raw.source.rust"},regex:/r#*"/,next:[{onMatch:function(e,t,r){var o="string.quoted.raw.source.rust";if(e.length>=r[1]){if(e.length>r[1])o="invalid";r.shift();r.shift();this.next=r.shift()}else{this.next=""}return o},regex:/"#*/,next:"start"},{defaultToken:"string.quoted.raw.source.rust"}]},{token:"string.quoted.double.source.rust",regex:'"',push:[{token:"string.quoted.double.source.rust",regex:'"',next:"pop"},{token:"constant.character.escape.source.rust",regex:i},{defaultToken:"string.quoted.double.source.rust"}]},{token:["keyword.source.rust","text","entity.name.function.source.rust"],regex:"\\b(fn)(\\s+)((?:r#)?"+s+")"},{token:"support.constant",regex:s+"::"},{token:"keyword.source.rust",regex:"\\b(?:abstract|alignof|as|async|await|become|box|break|catch|continue|const|crate|default|do|dyn|else|enum|extern|for|final|if|impl|in|let|loop|macro|match|mod|move|mut|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\\b"},{token:"storage.type.source.rust",regex:"\\b(?:Self|isize|usize|char|bool|u8|u16|u32|u64|u128|f16|f32|f64|i8|i16|i32|i64|i128|str|option|either|c_float|c_double|c_void|FILE|fpos_t|DIR|dirent|c_char|c_schar|c_uchar|c_short|c_ushort|c_int|c_uint|c_long|c_ulong|size_t|ptrdiff_t|clock_t|time_t|c_longlong|c_ulonglong|intptr_t|uintptr_t|off_t|dev_t|ino_t|pid_t|mode_t|ssize_t)\\b"},{token:"variable.language.source.rust",regex:"\\bself\\b"},{token:"comment.line.doc.source.rust",regex:"//!.*$"},{token:"comment.line.double-dash.source.rust",regex:"//.*$"},{token:"comment.start.block.source.rust",regex:"/\\*",stateName:"comment",push:[{token:"comment.start.block.source.rust",regex:"/\\*",push:"comment"},{token:"comment.end.block.source.rust",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.source.rust"}]},{token:"keyword.operator",regex:/\$|[-=]>|[-+%^=!&|<>]=?|[*/](?![*/])=?/},{token:"punctuation.operator",regex:/[?:,;.]/},{token:"paren.lparen",regex:/[\[({]/},{token:"paren.rparen",regex:/[\])}]/},{token:"constant.language.source.rust",regex:"\\b(?:true|false|Some|None|Ok|Err)\\b"},{token:"support.constant.source.rust",regex:"\\b(?:EXIT_FAILURE|EXIT_SUCCESS|RAND_MAX|EOF|SEEK_SET|SEEK_CUR|SEEK_END|_IOFBF|_IONBF|_IOLBF|BUFSIZ|FOPEN_MAX|FILENAME_MAX|L_tmpnam|TMP_MAX|O_RDONLY|O_WRONLY|O_RDWR|O_APPEND|O_CREAT|O_EXCL|O_TRUNC|S_IFIFO|S_IFCHR|S_IFBLK|S_IFDIR|S_IFREG|S_IFMT|S_IEXEC|S_IWRITE|S_IREAD|S_IRWXU|S_IXUSR|S_IWUSR|S_IRUSR|F_OK|R_OK|W_OK|X_OK|STDIN_FILENO|STDOUT_FILENO|STDERR_FILENO)\\b"},{token:"meta.preprocessor.source.rust",regex:"\\b\\w\\(\\w\\)*!|#\\[[\\w=\\(\\)_]+\\]\\b"},{token:"constant.numeric.source.rust",regex:/\b(?:0x[a-fA-F0-9_]+|0o[0-7_]+|0b[01_]+|[0-9][0-9_]*(?!\.))(?:[iu](?:size|8|16|32|64|128))?\b/},{token:"constant.numeric.source.rust",regex:/\b(?:[0-9][0-9_]*)(?:\.[0-9][0-9_]*)?(?:[Ee][+-][0-9][0-9_]*)?(?:f32|f64)?\b/}]};this.normalizeRules()};a.metaData={fileTypes:["rs","rc"],foldingStartMarker:"^.*\\bfn\\s*(\\w+\\s*)?\\([^\\)]*\\)(\\s*\\{[^\\}]*)?\\s*$",foldingStopMarker:"^\\s*\\}",name:"Rust",scopeName:"source.rust"};o.inherits(a,n);t.RustHighlightRules=a});ace.define("ace/mode/folding/cstyle",[],function(e,t,r){"use strict";var o=e("../../lib/oop");var n=e("../../range").Range;var i=e("./fold_mode").FoldMode;var s=t.FoldMode=function(e){if(e){this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start));this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end))}};o.inherits(s,i);(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/;this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/;this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/;this._getFoldWidgetBase=this.getFoldWidget;this.getFoldWidget=function(e,t,r){var o=e.getLine(r);if(this.singleLineBlockCommentRe.test(o)){if(!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return""}var n=this._getFoldWidgetBase(e,t,r);if(!n&&this.startRegionRe.test(o))return"start";return n};this.getFoldWidgetRange=function(e,t,r,o){var n=e.getLine(r);if(this.startRegionRe.test(n))return this.getCommentRegionBlock(e,n,r);var i=n.match(this.foldingStartMarker);if(i){var s=i.index;if(i[1])return this.openingBracketBlock(e,i[1],r,s);var a=e.getCommentFoldRange(r,s+i[0].length,1);if(a&&!a.isMultiLine()){if(o){a=this.getSectionRange(e,r)}else if(t!="all")a=null}return a}if(t==="markbegin")return;var i=n.match(this.foldingStopMarker);if(i){var s=i.index+i[0].length;if(i[1])return this.closingBracketBlock(e,i[1],r,s);return e.getCommentFoldRange(r,s,-1)}};this.getSectionRange=function(e,t){var r=e.getLine(t);var o=r.search(/\S/);var i=t;var s=r.length;t=t+1;var a=t;var u=e.getLength();while(++t<u){r=e.getLine(t);var c=r.search(/\S/);if(c===-1)continue;if(o>c)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=i){break}else if(l.isMultiLine()){t=l.end.row}else if(o==c){break}}a=t}return new n(i,s,a,e.getLine(a).length)};this.getCommentRegionBlock=function(e,t,r){var o=t.search(/\s*$/);var i=e.getLength();var s=r;var a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;var u=1;while(++r<i){t=e.getLine(r);var c=a.exec(t);if(!c)continue;if(c[1])u--;else u++;if(!u)break}var l=r;if(l>s){return new n(s,o,l,t.length)}}}).call(s.prototype)});ace.define("ace/mode/rust",[],function(e,t,r){"use strict";var o=e("../lib/oop");var n=e("./text").Mode;var i=e("./rust_highlight_rules").RustHighlightRules;var s=e("./folding/cstyle").FoldMode;var a=function(){this.HighlightRules=i;this.foldingRules=new s;this.$behaviour=this.$defaultBehaviour};o.inherits(a,n);(function(){this.lineCommentStart="//";this.blockComment={start:"/*",end:"*/",nestable:true};this.$quotes={'"':'"'};this.$id="ace/mode/rust"}).call(a.prototype);t.Mode=a});(function(){ace.require(["ace/mode/rust"],function(e){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=e}})})();
//# sourceMappingURL=mode-rust.js.map