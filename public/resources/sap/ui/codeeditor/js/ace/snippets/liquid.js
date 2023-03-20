ace.define("ace/snippets/liquid",[],function(t,n,e){"use strict";n.snippetText='\n# liquid specific snippets\nsnippet ife\n\t{% if ${1:condition} %}\n\n\t{% else %}\n\n\t{% endif %}\nsnippet if\n\t{% if ${1:condition} %}\n\t\t\n\t{% endif %}\nsnippet for\n\t{% for in ${1:iterator} %}\n\n\t{% endfor %}\nsnippet capture\n\t{% capture ${1} %}\n\n\t{% endcapture %}\nsnippet comment\n\t{% comment %}\n\t  ${1:comment}\n\t{% endcomment %}\n\n# Include html.snippets\n# Some useful Unicode entities\n# Non-Breaking Space\nsnippet nbs\n\t&nbsp;\n# ←\nsnippet left\n\t&#x2190;\n# →\nsnippet right\n\t&#x2192;\n# ↑\nsnippet up\n\t&#x2191;\n# ↓\nsnippet down\n\t&#x2193;\n# ↩\nsnippet return\n\t&#x21A9;\n# ⇤\nsnippet backtab\n\t&#x21E4;\n# ⇥\nsnippet tab\n\t&#x21E5;\n# ⇧\nsnippet shift\n\t&#x21E7;\n# ⌃\nsnippet ctrl\n\t&#x2303;\n# ⌅\nsnippet enter\n\t&#x2305;\n# ⌘\nsnippet cmd\n\t&#x2318;\n# ⌥\nsnippet option\n\t&#x2325;\n# ⌦\nsnippet delete\n\t&#x2326;\n# ⌫\nsnippet backspace\n\t&#x232B;\n# ⎋\nsnippet esc\n\t&#x238B;\n# Generic Doctype\nsnippet doctype HTML 4.01 Strict\n\t<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n\t"http://www.w3.org/TR/html4/strict.dtd">\nsnippet doctype HTML 4.01 Transitional\n\t<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"\n\t"http://www.w3.org/TR/html4/loose.dtd">\nsnippet doctype HTML 5\n\t<!DOCTYPE HTML>\nsnippet doctype XHTML 1.0 Frameset\n\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n\t"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\nsnippet doctype XHTML 1.0 Strict\n\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n\t"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\nsnippet doctype XHTML 1.0 Transitional\n\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n\t"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\nsnippet doctype XHTML 1.1\n\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"\n\t"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\n# HTML Doctype 4.01 Strict\nsnippet docts\n\t<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n\t"http://www.w3.org/TR/html4/strict.dtd">\n# HTML Doctype 4.01 Transitional\nsnippet doct\n\t<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"\n\t"http://www.w3.org/TR/html4/loose.dtd">\n# HTML Doctype 5\nsnippet doct5\n\t<!DOCTYPE html>\n# XHTML Doctype 1.0 Frameset\nsnippet docxf\n\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"\n\t"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">\n# XHTML Doctype 1.0 Strict\nsnippet docxs\n\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n\t"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n# XHTML Doctype 1.0 Transitional\nsnippet docxt\n\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n\t"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n# XHTML Doctype 1.1\nsnippet docx\n\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"\n\t"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\n# html5shiv\nsnippet html5shiv\n\t\x3c!--[if lte IE 8]>\n\t\t<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"><\/script>\n\t<![endif]--\x3e\nsnippet html5printshiv\n\t\x3c!--[if lte IE 8]>\n\t\t<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"><\/script>\n\t<![endif]--\x3e\n# Attributes\nsnippet attr\n\t${1:attribute}="${2:property}"\nsnippet attr+\n\t${1:attribute}="${2:property}" attr+${3}\nsnippet .\n\tclass="${1}"${2}\nsnippet #\n\tid="${1}"${2}\nsnippet alt\n\talt="${1}"${2}\nsnippet charset\n\tcharset="${1:utf-8}"${2}\nsnippet data\n\tdata-${1}="${2:$1}"${3}\nsnippet for\n\tfor="${1}"${2}\nsnippet height\n\theight="${1}"${2}\nsnippet href\n\thref="${1:#}"${2}\nsnippet lang\n\tlang="${1:en}"${2}\nsnippet media\n\tmedia="${1}"${2}\nsnippet name\n\tname="${1}"${2}\nsnippet rel\n\trel="${1}"${2}\nsnippet scope\n\tscope="${1:row}"${2}\nsnippet src\n\tsrc="${1}"${2}\nsnippet title=\n\ttitle="${1}"${2}\nsnippet type\n\ttype="${1}"${2}\nsnippet value\n\tvalue="${1}"${2}\nsnippet width\n\twidth="${1}"${2}\n# Elements\nsnippet a\n\t<a href="${1:#}">${2:$1}</a>\nsnippet a.\n\t<a class="${1}" href="${2:#}">${3:$1}</a>\nsnippet a#\n\t<a id="${1}" href="${2:#}">${3:$1}</a>\nsnippet a:ext\n\t<a href="http://${1:example.com}">${2:$1}</a>\nsnippet a:mail\n\t<a href="mailto:${1:joe@example.com}?subject=${2:feedback}">${3:email me}</a>\nsnippet abbr\n\t<abbr title="${1}">${2}</abbr>\nsnippet address\n\t<address>\n\t\t${1}\n\t</address>\nsnippet area\n\t<area shape="${1:rect}" coords="${2}" href="${3}" alt="${4}" />\nsnippet area+\n\t<area shape="${1:rect}" coords="${2}" href="${3}" alt="${4}" />\n\tarea+${5}\nsnippet area:c\n\t<area shape="circle" coords="${1}" href="${2}" alt="${3}" />\nsnippet area:d\n\t<area shape="default" coords="${1}" href="${2}" alt="${3}" />\nsnippet area:p\n\t<area shape="poly" coords="${1}" href="${2}" alt="${3}" />\nsnippet area:r\n\t<area shape="rect" coords="${1}" href="${2}" alt="${3}" />\nsnippet article\n\t<article>\n\t\t${1}\n\t</article>\nsnippet article.\n\t<article class="${1}">\n\t\t${2}\n\t</article>\nsnippet article#\n\t<article id="${1}">\n\t\t${2}\n\t</article>\nsnippet aside\n\t<aside>\n\t\t${1}\n\t</aside>\nsnippet aside.\n\t<aside class="${1}">\n\t\t${2}\n\t</aside>\nsnippet aside#\n\t<aside id="${1}">\n\t\t${2}\n\t</aside>\nsnippet audio\n\t<audio src="${1}>${2}</audio>\nsnippet b\n\t<b>${1}</b>\nsnippet base\n\t<base href="${1}" target="${2}" />\nsnippet bdi\n\t<bdi>${1}</bdo>\nsnippet bdo\n\t<bdo dir="${1}">${2}</bdo>\nsnippet bdo:l\n\t<bdo dir="ltr">${1}</bdo>\nsnippet bdo:r\n\t<bdo dir="rtl">${1}</bdo>\nsnippet blockquote\n\t<blockquote>\n\t\t${1}\n\t</blockquote>\nsnippet body\n\t<body>\n\t\t${1}\n\t</body>\nsnippet br\n\t<br />${1}\nsnippet button\n\t<button type="${1:submit}">${2}</button>\nsnippet button.\n\t<button class="${1:button}" type="${2:submit}">${3}</button>\nsnippet button#\n\t<button id="${1}" type="${2:submit}">${3}</button>\nsnippet button:s\n\t<button type="submit">${1}</button>\nsnippet button:r\n\t<button type="reset">${1}</button>\nsnippet canvas\n\t<canvas>\n\t\t${1}\n\t</canvas>\nsnippet caption\n\t<caption>${1}</caption>\nsnippet cite\n\t<cite>${1}</cite>\nsnippet code\n\t<code>${1}</code>\nsnippet col\n\t<col />${1}\nsnippet col+\n\t<col />\n\tcol+${1}\nsnippet colgroup\n\t<colgroup>\n\t\t${1}\n\t</colgroup>\nsnippet colgroup+\n\t<colgroup>\n\t\t<col />\n\t\tcol+${1}\n\t</colgroup>\nsnippet command\n\t<command type="command" label="${1}" icon="${2}" />\nsnippet command:c\n\t<command type="checkbox" label="${1}" icon="${2}" />\nsnippet command:r\n\t<command type="radio" radiogroup="${1}" label="${2}" icon="${3}" />\nsnippet datagrid\n\t<datagrid>\n\t\t${1}\n\t</datagrid>\nsnippet datalist\n\t<datalist>\n\t\t${1}\n\t</datalist>\nsnippet datatemplate\n\t<datatemplate>\n\t\t${1}\n\t</datatemplate>\nsnippet dd\n\t<dd>${1}</dd>\nsnippet dd.\n\t<dd class="${1}">${2}</dd>\nsnippet dd#\n\t<dd id="${1}">${2}</dd>\nsnippet del\n\t<del>${1}</del>\nsnippet details\n\t<details>${1}</details>\nsnippet dfn\n\t<dfn>${1}</dfn>\nsnippet dialog\n\t<dialog>\n\t\t${1}\n\t</dialog>\nsnippet div\n\t<div>\n\t\t${1}\n\t</div>\nsnippet div.\n\t<div class="${1}">\n\t\t${2}\n\t</div>\nsnippet div#\n\t<div id="${1}">\n\t\t${2}\n\t</div>\nsnippet dl\n\t<dl>\n\t\t${1}\n\t</dl>\nsnippet dl.\n\t<dl class="${1}">\n\t\t${2}\n\t</dl>\nsnippet dl#\n\t<dl id="${1}">\n\t\t${2}\n\t</dl>\nsnippet dl+\n\t<dl>\n\t\t<dt>${1}</dt>\n\t\t<dd>${2}</dd>\n\t\tdt+${3}\n\t</dl>\nsnippet dt\n\t<dt>${1}</dt>\nsnippet dt.\n\t<dt class="${1}">${2}</dt>\nsnippet dt#\n\t<dt id="${1}">${2}</dt>\nsnippet dt+\n\t<dt>${1}</dt>\n\t<dd>${2}</dd>\n\tdt+${3}\nsnippet em\n\t<em>${1}</em>\nsnippet embed\n\t<embed src=${1} type="${2} />\nsnippet fieldset\n\t<fieldset>\n\t\t${1}\n\t</fieldset>\nsnippet fieldset.\n\t<fieldset class="${1}">\n\t\t${2}\n\t</fieldset>\nsnippet fieldset#\n\t<fieldset id="${1}">\n\t\t${2}\n\t</fieldset>\nsnippet fieldset+\n\t<fieldset>\n\t\t<legend><span>${1}</span></legend>\n\t\t${2}\n\t</fieldset>\n\tfieldset+${3}\nsnippet figcaption\n\t<figcaption>${1}</figcaption>\nsnippet figure\n\t<figure>${1}</figure>\nsnippet footer\n\t<footer>\n\t\t${1}\n\t</footer>\nsnippet footer.\n\t<footer class="${1}">\n\t\t${2}\n\t</footer>\nsnippet footer#\n\t<footer id="${1}">\n\t\t${2}\n\t</footer>\nsnippet form\n\t<form action="${1}" method="${2:get}" accept-charset="utf-8">\n\t\t${3}\n\t</form>\nsnippet form.\n\t<form class="${1}" action="${2}" method="${3:get}" accept-charset="utf-8">\n\t\t${4}\n\t</form>\nsnippet form#\n\t<form id="${1}" action="${2}" method="${3:get}" accept-charset="utf-8">\n\t\t${4}\n\t</form>\nsnippet h1\n\t<h1>${1}</h1>\nsnippet h1.\n\t<h1 class="${1}">${2}</h1>\nsnippet h1#\n\t<h1 id="${1}">${2}</h1>\nsnippet h2\n\t<h2>${1}</h2>\nsnippet h2.\n\t<h2 class="${1}">${2}</h2>\nsnippet h2#\n\t<h2 id="${1}">${2}</h2>\nsnippet h3\n\t<h3>${1}</h3>\nsnippet h3.\n\t<h3 class="${1}">${2}</h3>\nsnippet h3#\n\t<h3 id="${1}">${2}</h3>\nsnippet h4\n\t<h4>${1}</h4>\nsnippet h4.\n\t<h4 class="${1}">${2}</h4>\nsnippet h4#\n\t<h4 id="${1}">${2}</h4>\nsnippet h5\n\t<h5>${1}</h5>\nsnippet h5.\n\t<h5 class="${1}">${2}</h5>\nsnippet h5#\n\t<h5 id="${1}">${2}</h5>\nsnippet h6\n\t<h6>${1}</h6>\nsnippet h6.\n\t<h6 class="${1}">${2}</h6>\nsnippet h6#\n\t<h6 id="${1}">${2}</h6>\nsnippet head\n\t<head>\n\t\t<meta http-equiv="content-type" content="text/html; charset=utf-8" />\n\n\t\t<title>${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`}</title>\n\t\t${2}\n\t</head>\nsnippet header\n\t<header>\n\t\t${1}\n\t</header>\nsnippet header.\n\t<header class="${1}">\n\t\t${2}\n\t</header>\nsnippet header#\n\t<header id="${1}">\n\t\t${2}\n\t</header>\nsnippet hgroup\n\t<hgroup>\n\t\t${1}\n\t</hgroup>\nsnippet hgroup.\n\t<hgroup class="${1}>\n\t\t${2}\n\t</hgroup>\nsnippet hr\n\t<hr />${1}\nsnippet html\n\t<html>\n\t${1}\n\t</html>\nsnippet xhtml\n\t<html xmlns="http://www.w3.org/1999/xhtml">\n\t${1}\n\t</html>\nsnippet html5\n\t<!DOCTYPE html>\n\t<html>\n\t\t<head>\n\t\t\t<meta http-equiv="content-type" content="text/html; charset=utf-8" />\n\t\t\t<title>${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`}</title>\n\t\t\t${2:meta}\n\t\t</head>\n\t\t<body>\n\t\t\t${3:body}\n\t\t</body>\n\t</html>\nsnippet xhtml5\n\t<!DOCTYPE html>\n\t<html xmlns="http://www.w3.org/1999/xhtml">\n\t\t<head>\n\t\t\t<meta http-equiv="content-type" content="application/xhtml+xml; charset=utf-8" />\n\t\t\t<title>${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`}</title>\n\t\t\t${2:meta}\n\t\t</head>\n\t\t<body>\n\t\t\t${3:body}\n\t\t</body>\n\t</html>\nsnippet i\n\t<i>${1}</i>\nsnippet iframe\n\t<iframe src="${1}" frameborder="0"></iframe>${2}\nsnippet iframe.\n\t<iframe class="${1}" src="${2}" frameborder="0"></iframe>${3}\nsnippet iframe#\n\t<iframe id="${1}" src="${2}" frameborder="0"></iframe>${3}\nsnippet img\n\t<img src="${1}" alt="${2}" />${3}\nsnippet img.\n\t<img class="${1}" src="${2}" alt="${3}" />${4}\nsnippet img#\n\t<img id="${1}" src="${2}" alt="${3}" />${4}\nsnippet input\n\t<input type="${1:text/submit/hidden/button/image}" name="${2}" id="${3:$2}" value="${4}" />${5}\nsnippet input.\n\t<input class="${1}" type="${2:text/submit/hidden/button/image}" name="${3}" id="${4:$3}" value="${5}" />${6}\nsnippet input:text\n\t<input type="text" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:submit\n\t<input type="submit" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:hidden\n\t<input type="hidden" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:button\n\t<input type="button" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:image\n\t<input type="image" name="${1}" id="${2:$1}" src="${3}" alt="${4}" />${5}\nsnippet input:checkbox\n\t<input type="checkbox" name="${1}" id="${2:$1}" />${3}\nsnippet input:radio\n\t<input type="radio" name="${1}" id="${2:$1}" />${3}\nsnippet input:color\n\t<input type="color" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:date\n\t<input type="date" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:datetime\n\t<input type="datetime" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:datetime-local\n\t<input type="datetime-local" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:email\n\t<input type="email" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:file\n\t<input type="file" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:month\n\t<input type="month" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:number\n\t<input type="number" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:password\n\t<input type="password" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:range\n\t<input type="range" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:reset\n\t<input type="reset" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:search\n\t<input type="search" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:time\n\t<input type="time" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:url\n\t<input type="url" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet input:week\n\t<input type="week" name="${1}" id="${2:$1}" value="${3}" />${4}\nsnippet ins\n\t<ins>${1}</ins>\nsnippet kbd\n\t<kbd>${1}</kbd>\nsnippet keygen\n\t<keygen>${1}</keygen>\nsnippet label\n\t<label for="${2:$1}">${1}</label>\nsnippet label:i\n\t<label for="${2:$1}">${1}</label>\n\t<input type="${3:text/submit/hidden/button}" name="${4:$2}" id="${5:$2}" value="${6}" />${7}\nsnippet label:s\n\t<label for="${2:$1}">${1}</label>\n\t<select name="${3:$2}" id="${4:$2}">\n\t\t<option value="${5}">${6:$5}</option>\n\t</select>\nsnippet legend\n\t<legend>${1}</legend>\nsnippet legend+\n\t<legend><span>${1}</span></legend>\nsnippet li\n\t<li>${1}</li>\nsnippet li.\n\t<li class="${1}">${2}</li>\nsnippet li+\n\t<li>${1}</li>\n\tli+${2}\nsnippet lia\n\t<li><a href="${2:#}">${1}</a></li>\nsnippet lia+\n\t<li><a href="${2:#}">${1}</a></li>\n\tlia+${3}\nsnippet link\n\t<link rel="${1}" href="${2}" title="${3}" type="${4}" />${5}\nsnippet link:atom\n\t<link rel="alternate" href="${1:atom.xml}" title="Atom" type="application/atom+xml" />${2}\nsnippet link:css\n\t<link rel="stylesheet" href="${2:style.css}" type="text/css" media="${3:all}" />${4}\nsnippet link:favicon\n\t<link rel="shortcut icon" href="${1:favicon.ico}" type="image/x-icon" />${2}\nsnippet link:rss\n\t<link rel="alternate" href="${1:rss.xml}" title="RSS" type="application/atom+xml" />${2}\nsnippet link:touch\n\t<link rel="apple-touch-icon" href="${1:favicon.png}" />${2}\nsnippet map\n\t<map name="${1}">\n\t\t${2}\n\t</map>\nsnippet map.\n\t<map class="${1}" name="${2}">\n\t\t${3}\n\t</map>\nsnippet map#\n\t<map name="${1}" id="${2:$1}>\n\t\t${3}\n\t</map>\nsnippet map+\n\t<map name="${1}">\n\t\t<area shape="${2}" coords="${3}" href="${4}" alt="${5}" />${6}\n\t</map>${7}\nsnippet mark\n\t<mark>${1}</mark>\nsnippet menu\n\t<menu>\n\t\t${1}\n\t</menu>\nsnippet menu:c\n\t<menu type="context">\n\t\t${1}\n\t</menu>\nsnippet menu:t\n\t<menu type="toolbar">\n\t\t${1}\n\t</menu>\nsnippet meta\n\t<meta http-equiv="${1}" content="${2}" />${3}\nsnippet meta:compat\n\t<meta http-equiv="X-UA-Compatible" content="IE=${1:7,8,edge}" />${3}\nsnippet meta:refresh\n\t<meta http-equiv="refresh" content="text/html;charset=UTF-8" />${3}\nsnippet meta:utf\n\t<meta http-equiv="content-type" content="text/html;charset=UTF-8" />${3}\nsnippet meter\n\t<meter>${1}</meter>\nsnippet nav\n\t<nav>\n\t\t${1}\n\t</nav>\nsnippet nav.\n\t<nav class="${1}">\n\t\t${2}\n\t</nav>\nsnippet nav#\n\t<nav id="${1}">\n\t\t${2}\n\t</nav>\nsnippet noscript\n\t<noscript>\n\t\t${1}\n\t</noscript>\nsnippet object\n\t<object data="${1}" type="${2}">\n\t\t${3}\n\t</object>${4}\n# Embed QT Movie\nsnippet movie\n\t<object width="$2" height="$3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"\n\t codebase="http://www.apple.com/qtactivex/qtplugin.cab">\n\t\t<param name="src" value="$1" />\n\t\t<param name="controller" value="$4" />\n\t\t<param name="autoplay" value="$5" />\n\t\t<embed src="${1:movie.mov}"\n\t\t\twidth="${2:320}" height="${3:240}"\n\t\t\tcontroller="${4:true}" autoplay="${5:true}"\n\t\t\tscale="tofit" cache="true"\n\t\t\tpluginspage="http://www.apple.com/quicktime/download/" />\n\t</object>${6}\nsnippet ol\n\t<ol>\n\t\t${1}\n\t</ol>\nsnippet ol.\n\t<ol class="${1}>\n\t\t${2}\n\t</ol>\nsnippet ol#\n\t<ol id="${1}>\n\t\t${2}\n\t</ol>\nsnippet ol+\n\t<ol>\n\t\t<li>${1}</li>\n\t\tli+${2}\n\t</ol>\nsnippet opt\n\t<option value="${1}">${2:$1}</option>\nsnippet opt+\n\t<option value="${1}">${2:$1}</option>\n\topt+${3}\nsnippet optt\n\t<option>${1}</option>\nsnippet optgroup\n\t<optgroup>\n\t\t<option value="${1}">${2:$1}</option>\n\t\topt+${3}\n\t</optgroup>\nsnippet output\n\t<output>${1}</output>\nsnippet p\n\t<p>${1}</p>\nsnippet param\n\t<param name="${1}" value="${2}" />${3}\nsnippet pre\n\t<pre>\n\t\t${1}\n\t</pre>\nsnippet progress\n\t<progress>${1}</progress>\nsnippet q\n\t<q>${1}</q>\nsnippet rp\n\t<rp>${1}</rp>\nsnippet rt\n\t<rt>${1}</rt>\nsnippet ruby\n\t<ruby>\n\t\t<rp><rt>${1}</rt></rp>\n\t</ruby>\nsnippet s\n\t<s>${1}</s>\nsnippet samp\n\t<samp>\n\t\t${1}\n\t</samp>\nsnippet script\n\t<script type="text/javascript" charset="utf-8">\n\t\t${1}\n\t<\/script>\nsnippet scriptsrc\n\t<script src="${1}.js" type="text/javascript" charset="utf-8"><\/script>\nsnippet newscript\n\t<script type="application/javascript" charset="utf-8">\n\t\t${1}\n\t<\/script>\nsnippet newscriptsrc\n\t<script src="${1}.js" type="application/javascript" charset="utf-8"><\/script>\nsnippet section\n\t<section>\n\t\t${1}\n\t</section>\nsnippet section.\n\t<section class="${1}">\n\t\t${2}\n\t</section>\nsnippet section#\n\t<section id="${1}">\n\t\t${2}\n\t</section>\nsnippet select\n\t<select name="${1}" id="${2:$1}">\n\t\t${3}\n\t</select>\nsnippet select.\n\t<select name="${1}" id="${2:$1}" class="${3}>\n\t\t${4}\n\t</select>\nsnippet select+\n\t<select name="${1}" id="${2:$1}">\n\t\t<option value="${3}">${4:$3}</option>\n\t\topt+${5}\n\t</select>\nsnippet small\n\t<small>${1}</small>\nsnippet source\n\t<source src="${1}" type="${2}" media="${3}" />\nsnippet span\n\t<span>${1}</span>\nsnippet strong\n\t<strong>${1}</strong>\nsnippet style\n\t<style type="text/css" media="${1:all}">\n\t\t${2}\n\t</style>\nsnippet sub\n\t<sub>${1}</sub>\nsnippet summary\n\t<summary>\n\t\t${1}\n\t</summary>\nsnippet sup\n\t<sup>${1}</sup>\nsnippet table\n\t<table border="${1:0}">\n\t\t${2}\n\t</table>\nsnippet table.\n\t<table class="${1}" border="${2:0}">\n\t\t${3}\n\t</table>\nsnippet table#\n\t<table id="${1}" border="${2:0}">\n\t\t${3}\n\t</table>\nsnippet tbody\n\t<tbody>\n\t\t${1}\n\t</tbody>\nsnippet td\n\t<td>${1}</td>\nsnippet td.\n\t<td class="${1}">${2}</td>\nsnippet td#\n\t<td id="${1}">${2}</td>\nsnippet td+\n\t<td>${1}</td>\n\ttd+${2}\nsnippet textarea\n\t<textarea name="${1}" id=${2:$1} rows="${3:8}" cols="${4:40}">${5}</textarea>${6}\nsnippet tfoot\n\t<tfoot>\n\t\t${1}\n\t</tfoot>\nsnippet th\n\t<th>${1}</th>\nsnippet th.\n\t<th class="${1}">${2}</th>\nsnippet th#\n\t<th id="${1}">${2}</th>\nsnippet th+\n\t<th>${1}</th>\n\tth+${2}\nsnippet thead\n\t<thead>\n\t\t${1}\n\t</thead>\nsnippet time\n\t<time datetime="${1}" pubdate="${2:$1}>${3:$1}</time>\nsnippet title\n\t<title>${1:`substitute(Filename(\'\', \'Page Title\'), \'^.\', \'\\u&\', \'\')`}</title>\nsnippet tr\n\t<tr>\n\t\t${1}\n\t</tr>\nsnippet tr+\n\t<tr>\n\t\t<td>${1}</td>\n\t\ttd+${2}\n\t</tr>\nsnippet track\n\t<track src="${1}" srclang="${2}" label="${3}" default="${4:default}>${5}</track>${6}\nsnippet ul\n\t<ul>\n\t\t${1}\n\t</ul>\nsnippet ul.\n\t<ul class="${1}">\n\t\t${2}\n\t</ul>\nsnippet ul#\n\t<ul id="${1}">\n\t\t${2}\n\t</ul>\nsnippet ul+\n\t<ul>\n\t\t<li>${1}</li>\n\t\tli+${2}\n\t</ul>\nsnippet var\n\t<var>${1}</var>\nsnippet video\n\t<video src="${1} height="${2}" width="${3}" preload="${5:none}" autoplay="${6:autoplay}>${7}</video>${8}\nsnippet wbr\n\t<wbr />${1}\n';n.scope="liquid"});(function(){ace.require(["ace/snippets/liquid"],function(t){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=t}})})();
//# sourceMappingURL=liquid.js.map