import packagejson from "./package.json" with { type: "json" };

document.getElementById("version").innerText = packagejson.version;
