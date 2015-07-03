define("ace/snippets/n9dot",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "snippet {\n\
guard [^{]|^\n\
	{{${1}}}\n\
snippet {;\n\
guard [^{]|^\n\
	{{;${1}}}\n\
snippet {:\n\
guard [^{]|^\n\
	{{:${1} = ${2}}}\n\
snippet {?\n\
guard [^{]|^\n\
	{{?${1}}}\n\
		${2}\n\
	{{?}}\n\
snippet {?:\n\
guard [^{]|^\n\
	{{?${1} :${2:value}}}\n\
		${3}\n\
	{{?}}	\n\
snippet {??\n\
guard [^{]|^\n\
	{{??${1}}}\n\
		${2}\n\
snippet {??:\n\
guard [^{]|^\n\
	{{??${1} :${2:value}}}\n\
		${3}\n\
snippet {@\n\
guard [^{]|^\n\
	{{@${1} :${2:item}}}\n\
		${3}\n\
	{{@}}\n\
snippet {@@\n\
guard [^{]|^\n\
	{{@@}}\n\
		${1:,}\n\
snippet {?#\n\
guard [^{]|^\n\
	{{?#${1}}}\n\
		${2}\n\
	{{?}}\n\
snippet {?#:\n\
guard [^{]|^\n\
	{{?#${1} :${2:meta}}}\n\
		${3}\n\
	{{?}}\n\
snippet {#\n\
guard [^{]|^\n\
	{{#${1}}}\n\
snippet {#.\n\
guard [^{]|^\n\
	{{#${1}.${2}}}\n\
\n\
snippet <\n\
	<${1:div}>${2}</${1:div}>\n\
snippet <s\n\
	<span${1}>${2}</span>\n\
snippet <sc\n\
	<span class=\"${1}\"${2}>${3}</span>\n\
snippet <d\n\
	<div${1}>${2}</div>\n\
snippet <dc\n\
	<div class=\"${1}\"${2}>${3}</div>\n\
snippet <a\n\
	<a href=\"${1}\"${2}>${3}</a>\n\
snippet <ac\n\
	<a href=\"${1}\" class=\"${2}\"${3}>${4}</a>\n\
snippet <b\n\
	<button${1}>${2}</button>\n\
snippet <bc\n\
	<button class=\"${1}\"${2}>${3}</button>";
exports.scope = "n9dot";

});
