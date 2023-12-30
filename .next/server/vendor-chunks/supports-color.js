"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color";
exports.ids = ["vendor-chunks/supports-color"];
exports.modules = {

/***/ "(ssr)/./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst hasFlag = __webpack_require__(/*! has-flag */ \"(ssr)/./node_modules/has-flag/index.js\");\nconst env = process.env;\nlet forceColor;\nif (hasFlag(\"no-color\") || hasFlag(\"no-colors\") || hasFlag(\"color=false\")) {\n    forceColor = false;\n} else if (hasFlag(\"color\") || hasFlag(\"colors\") || hasFlag(\"color=true\") || hasFlag(\"color=always\")) {\n    forceColor = true;\n}\nif (\"FORCE_COLOR\" in env) {\n    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;\n}\nfunction translateLevel(level) {\n    if (level === 0) {\n        return false;\n    }\n    return {\n        level,\n        hasBasic: true,\n        has256: level >= 2,\n        has16m: level >= 3\n    };\n}\nfunction supportsColor(stream) {\n    if (forceColor === false) {\n        return 0;\n    }\n    if (hasFlag(\"color=16m\") || hasFlag(\"color=full\") || hasFlag(\"color=truecolor\")) {\n        return 3;\n    }\n    if (hasFlag(\"color=256\")) {\n        return 2;\n    }\n    if (stream && !stream.isTTY && forceColor !== true) {\n        return 0;\n    }\n    const min = forceColor ? 1 : 0;\n    if (process.platform === \"win32\") {\n        // Node.js 7.5.0 is the first version of Node.js to include a patch to\n        // libuv that enables 256 color output on Windows. Anything earlier and it\n        // won't work. However, here we target Node.js 8 at minimum as it is an LTS\n        // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows\n        // release that supports 256 colors. Windows 10 build 14931 is the first release\n        // that supports 16m/TrueColor.\n        const osRelease = os.release().split(\".\");\n        if (Number(process.versions.node.split(\".\")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {\n            return Number(osRelease[2]) >= 14931 ? 3 : 2;\n        }\n        return 1;\n    }\n    if (\"CI\" in env) {\n        if ([\n            \"TRAVIS\",\n            \"CIRCLECI\",\n            \"APPVEYOR\",\n            \"GITLAB_CI\"\n        ].some((sign)=>sign in env) || env.CI_NAME === \"codeship\") {\n            return 1;\n        }\n        return min;\n    }\n    if (\"TEAMCITY_VERSION\" in env) {\n        return /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n    }\n    if (env.COLORTERM === \"truecolor\") {\n        return 3;\n    }\n    if (\"TERM_PROGRAM\" in env) {\n        const version = parseInt((env.TERM_PROGRAM_VERSION || \"\").split(\".\")[0], 10);\n        switch(env.TERM_PROGRAM){\n            case \"iTerm.app\":\n                return version >= 3 ? 3 : 2;\n            case \"Apple_Terminal\":\n                return 2;\n        }\n    }\n    if (/-256(color)?$/i.test(env.TERM)) {\n        return 2;\n    }\n    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n        return 1;\n    }\n    if (\"COLORTERM\" in env) {\n        return 1;\n    }\n    if (env.TERM === \"dumb\") {\n        return min;\n    }\n    return min;\n}\nfunction getSupportLevel(stream) {\n    const level = supportsColor(stream);\n    return translateLevel(level);\n}\nmodule.exports = {\n    supportsColor: getSupportLevel,\n    stdout: getSupportLevel(process.stdout),\n    stderr: getSupportLevel(process.stderr)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLQyxtQkFBT0EsQ0FBQztBQUNuQixNQUFNQyxVQUFVRCxtQkFBT0EsQ0FBQztBQUV4QixNQUFNRSxNQUFNQyxRQUFRRCxHQUFHO0FBRXZCLElBQUlFO0FBQ0osSUFBSUgsUUFBUSxlQUNYQSxRQUFRLGdCQUNSQSxRQUFRLGdCQUFnQjtJQUN4QkcsYUFBYTtBQUNkLE9BQU8sSUFBSUgsUUFBUSxZQUNsQkEsUUFBUSxhQUNSQSxRQUFRLGlCQUNSQSxRQUFRLGlCQUFpQjtJQUN6QkcsYUFBYTtBQUNkO0FBQ0EsSUFBSSxpQkFBaUJGLEtBQUs7SUFDekJFLGFBQWFGLElBQUlHLFdBQVcsQ0FBQ0MsTUFBTSxLQUFLLEtBQUtDLFNBQVNMLElBQUlHLFdBQVcsRUFBRSxRQUFRO0FBQ2hGO0FBRUEsU0FBU0csZUFBZUMsS0FBSztJQUM1QixJQUFJQSxVQUFVLEdBQUc7UUFDaEIsT0FBTztJQUNSO0lBRUEsT0FBTztRQUNOQTtRQUNBQyxVQUFVO1FBQ1ZDLFFBQVFGLFNBQVM7UUFDakJHLFFBQVFILFNBQVM7SUFDbEI7QUFDRDtBQUVBLFNBQVNJLGNBQWNDLE1BQU07SUFDNUIsSUFBSVYsZUFBZSxPQUFPO1FBQ3pCLE9BQU87SUFDUjtJQUVBLElBQUlILFFBQVEsZ0JBQ1hBLFFBQVEsaUJBQ1JBLFFBQVEsb0JBQW9CO1FBQzVCLE9BQU87SUFDUjtJQUVBLElBQUlBLFFBQVEsY0FBYztRQUN6QixPQUFPO0lBQ1I7SUFFQSxJQUFJYSxVQUFVLENBQUNBLE9BQU9DLEtBQUssSUFBSVgsZUFBZSxNQUFNO1FBQ25ELE9BQU87SUFDUjtJQUVBLE1BQU1ZLE1BQU1aLGFBQWEsSUFBSTtJQUU3QixJQUFJRCxRQUFRYyxRQUFRLEtBQUssU0FBUztRQUNqQyxzRUFBc0U7UUFDdEUsMEVBQTBFO1FBQzFFLDJFQUEyRTtRQUMzRSw2RUFBNkU7UUFDN0UsZ0ZBQWdGO1FBQ2hGLCtCQUErQjtRQUMvQixNQUFNQyxZQUFZbkIsR0FBR29CLE9BQU8sR0FBR0MsS0FBSyxDQUFDO1FBQ3JDLElBQ0NDLE9BQU9sQixRQUFRbUIsUUFBUSxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQy9DQyxPQUFPSCxTQUFTLENBQUMsRUFBRSxLQUFLLE1BQ3hCRyxPQUFPSCxTQUFTLENBQUMsRUFBRSxLQUFLLE9BQ3ZCO1lBQ0QsT0FBT0csT0FBT0gsU0FBUyxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQUk7UUFDNUM7UUFFQSxPQUFPO0lBQ1I7SUFFQSxJQUFJLFFBQVFoQixLQUFLO1FBQ2hCLElBQUk7WUFBQztZQUFVO1lBQVk7WUFBWTtTQUFZLENBQUNzQixJQUFJLENBQUNDLENBQUFBLE9BQVFBLFFBQVF2QixRQUFRQSxJQUFJd0IsT0FBTyxLQUFLLFlBQVk7WUFDNUcsT0FBTztRQUNSO1FBRUEsT0FBT1Y7SUFDUjtJQUVBLElBQUksc0JBQXNCZCxLQUFLO1FBQzlCLE9BQU8sZ0NBQWdDeUIsSUFBSSxDQUFDekIsSUFBSTBCLGdCQUFnQixJQUFJLElBQUk7SUFDekU7SUFFQSxJQUFJMUIsSUFBSTJCLFNBQVMsS0FBSyxhQUFhO1FBQ2xDLE9BQU87SUFDUjtJQUVBLElBQUksa0JBQWtCM0IsS0FBSztRQUMxQixNQUFNNEIsVUFBVXZCLFNBQVMsQ0FBQ0wsSUFBSTZCLG9CQUFvQixJQUFJLEVBQUMsRUFBR1gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFFekUsT0FBUWxCLElBQUk4QixZQUFZO1lBQ3ZCLEtBQUs7Z0JBQ0osT0FBT0YsV0FBVyxJQUFJLElBQUk7WUFDM0IsS0FBSztnQkFDSixPQUFPO1FBRVQ7SUFDRDtJQUVBLElBQUksaUJBQWlCSCxJQUFJLENBQUN6QixJQUFJK0IsSUFBSSxHQUFHO1FBQ3BDLE9BQU87SUFDUjtJQUVBLElBQUksOERBQThETixJQUFJLENBQUN6QixJQUFJK0IsSUFBSSxHQUFHO1FBQ2pGLE9BQU87SUFDUjtJQUVBLElBQUksZUFBZS9CLEtBQUs7UUFDdkIsT0FBTztJQUNSO0lBRUEsSUFBSUEsSUFBSStCLElBQUksS0FBSyxRQUFRO1FBQ3hCLE9BQU9qQjtJQUNSO0lBRUEsT0FBT0E7QUFDUjtBQUVBLFNBQVNrQixnQkFBZ0JwQixNQUFNO0lBQzlCLE1BQU1MLFFBQVFJLGNBQWNDO0lBQzVCLE9BQU9OLGVBQWVDO0FBQ3ZCO0FBRUEwQixPQUFPQyxPQUFPLEdBQUc7SUFDaEJ2QixlQUFlcUI7SUFDZkcsUUFBUUgsZ0JBQWdCL0IsUUFBUWtDLE1BQU07SUFDdENDLFFBQVFKLGdCQUFnQi9CLFFBQVFtQyxNQUFNO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkdXNhLW5leHQvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanM/N2JiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5jb25zdCBoYXNGbGFnID0gcmVxdWlyZSgnaGFzLWZsYWcnKTtcblxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnY7XG5cbmxldCBmb3JjZUNvbG9yO1xuaWYgKGhhc0ZsYWcoJ25vLWNvbG9yJykgfHxcblx0aGFzRmxhZygnbm8tY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9ZmFsc2UnKSkge1xuXHRmb3JjZUNvbG9yID0gZmFsc2U7XG59IGVsc2UgaWYgKGhhc0ZsYWcoJ2NvbG9yJykgfHxcblx0aGFzRmxhZygnY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9dHJ1ZScpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpKSB7XG5cdGZvcmNlQ29sb3IgPSB0cnVlO1xufVxuaWYgKCdGT1JDRV9DT0xPUicgaW4gZW52KSB7XG5cdGZvcmNlQ29sb3IgPSBlbnYuRk9SQ0VfQ09MT1IubGVuZ3RoID09PSAwIHx8IHBhcnNlSW50KGVudi5GT1JDRV9DT0xPUiwgMTApICE9PSAwO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVMZXZlbChsZXZlbCkge1xuXHRpZiAobGV2ZWwgPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGxldmVsLFxuXHRcdGhhc0Jhc2ljOiB0cnVlLFxuXHRcdGhhczI1NjogbGV2ZWwgPj0gMixcblx0XHRoYXMxNm06IGxldmVsID49IDNcblx0fTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihzdHJlYW0pIHtcblx0aWYgKGZvcmNlQ29sb3IgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MTZtJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj1mdWxsJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTI1NicpKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoc3RyZWFtICYmICFzdHJlYW0uaXNUVFkgJiYgZm9yY2VDb2xvciAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgbWluID0gZm9yY2VDb2xvciA/IDEgOiAwO1xuXG5cdGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG5cdFx0Ly8gTm9kZS5qcyA3LjUuMCBpcyB0aGUgZmlyc3QgdmVyc2lvbiBvZiBOb2RlLmpzIHRvIGluY2x1ZGUgYSBwYXRjaCB0b1xuXHRcdC8vIGxpYnV2IHRoYXQgZW5hYmxlcyAyNTYgY29sb3Igb3V0cHV0IG9uIFdpbmRvd3MuIEFueXRoaW5nIGVhcmxpZXIgYW5kIGl0XG5cdFx0Ly8gd29uJ3Qgd29yay4gSG93ZXZlciwgaGVyZSB3ZSB0YXJnZXQgTm9kZS5qcyA4IGF0IG1pbmltdW0gYXMgaXQgaXMgYW4gTFRTXG5cdFx0Ly8gcmVsZWFzZSwgYW5kIE5vZGUuanMgNyBpcyBub3QuIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0IFdpbmRvd3Ncblx0XHQvLyByZWxlYXNlIHRoYXQgc3VwcG9ydHMgMjU2IGNvbG9ycy4gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGUgZmlyc3QgcmVsZWFzZVxuXHRcdC8vIHRoYXQgc3VwcG9ydHMgMTZtL1RydWVDb2xvci5cblx0XHRjb25zdCBvc1JlbGVhc2UgPSBvcy5yZWxlYXNlKCkuc3BsaXQoJy4nKTtcblx0XHRpZiAoXG5cdFx0XHROdW1iZXIocHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KCcuJylbMF0pID49IDggJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMF0pID49IDEwICYmXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMDU4NlxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDE0OTMxID8gMyA6IDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NJJyBpbiBlbnYpIHtcblx0XHRpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJ10uc29tZShzaWduID0+IHNpZ24gaW4gZW52KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG5cdFx0cmV0dXJuIC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwO1xuXHR9XG5cblx0aWYgKGVudi5DT0xPUlRFUk0gPT09ICd0cnVlY29sb3InKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuXHRcdHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuXHRcdFx0Y2FzZSAnaVRlcm0uYXBwJzpcblx0XHRcdFx0cmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuXHRcdFx0Y2FzZSAnQXBwbGVfVGVybWluYWwnOlxuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdC8vIE5vIGRlZmF1bHRcblx0XHR9XG5cdH1cblxuXHRpZiAoLy0yNTYoY29sb3IpPyQvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnZ0MjIwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcblx0Y29uc3QgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSk7XG5cdHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdXBwb3J0c0NvbG9yOiBnZXRTdXBwb3J0TGV2ZWwsXG5cdHN0ZG91dDogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3Rkb3V0KSxcblx0c3RkZXJyOiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRlcnIpXG59O1xuIl0sIm5hbWVzIjpbIm9zIiwicmVxdWlyZSIsImhhc0ZsYWciLCJlbnYiLCJwcm9jZXNzIiwiZm9yY2VDb2xvciIsIkZPUkNFX0NPTE9SIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJ0cmFuc2xhdGVMZXZlbCIsImxldmVsIiwiaGFzQmFzaWMiLCJoYXMyNTYiLCJoYXMxNm0iLCJzdXBwb3J0c0NvbG9yIiwic3RyZWFtIiwiaXNUVFkiLCJtaW4iLCJwbGF0Zm9ybSIsIm9zUmVsZWFzZSIsInJlbGVhc2UiLCJzcGxpdCIsIk51bWJlciIsInZlcnNpb25zIiwibm9kZSIsInNvbWUiLCJzaWduIiwiQ0lfTkFNRSIsInRlc3QiLCJURUFNQ0lUWV9WRVJTSU9OIiwiQ09MT1JURVJNIiwidmVyc2lvbiIsIlRFUk1fUFJPR1JBTV9WRVJTSU9OIiwiVEVSTV9QUk9HUkFNIiwiVEVSTSIsImdldFN1cHBvcnRMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdGRvdXQiLCJzdGRlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/supports-color/index.js\n");

/***/ })

};
;