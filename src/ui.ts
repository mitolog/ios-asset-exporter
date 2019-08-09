import "./ui.css";
// import * as fs from "fs-extra";
// import * as path from "path";

window.onmessage = async event => {
  const jsonStr = event.data.pluginMessage;
  console.log(jsonStr);
  // const outputPath = path.join(process.cwd(), "figma.json");
  // fs.writeFileSync(outputPath, jsonStr);
};

document.getElementById("create").onclick = () => {
  const jsonStr = document.getElementById("json") as HTMLTextAreaElement;
  const jsonObj = JSON.parse(jsonStr.value);
  parent.postMessage({ pluginMessage: { type: "export", jsonObj } }, "*");
};

document.getElementById("cancel").onclick = () => {
  parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};
