figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === "export") {
    const nodes = [];
    console.log(msg.jsonObj);
    // for (let i = 0; i < msg.count; i++) {
    //   const rect = figma.createRectangle();
    //   rect.x = i * 150;
    //   rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
    //   figma.currentPage.appendChild(rect);
    //   nodes.push(rect);
    // }

    // figma.currentPage.selection = nodes;
    // figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // const currentPageStr = JSON.stringify(figma.currentPage, [
  //   "id",
  //   "children",
  //   "name"
  // ]);
  // console.log(figma.currentPage);
  // const parsed = JSON.parse(currentPageStr) as PageNode;
  // parsed.name = "hoge";
  // //console.log(parsed);
  // figma.currentPage = parsed;

  // figma.currentPageをjsonで保存(figit save)しておき、
  // 予め持っていたdev/master fileと差分を確認(figit diff)し、pull rebaseしておく
  // rebaseの際は結局取り込んでいい変更かどうかは当該デザイナに託される
  // dev/masterにPRをだす (normal designer)
  // PRを許可したらdev/masterにマージ (boss designer)

  //figma.ui.postMessage(currentPageStr);

  //figma.closePlugin();
};
