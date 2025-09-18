import { translateTexts } from "../API/translator";

// Collect all visible text nodes in DOM
function getTextNodes(root = document.body) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeValue.trim()) nodes.push(node);
  }
  return nodes;
}

// Translate the whole DOM
export async function translateDOM(lang) {
  const nodes = getTextNodes();
  const texts = nodes.map((n) => n.nodeValue);

  try {
    const translations = await translateTexts(texts, lang);
    translations.forEach((t, i) => {
      if (t) nodes[i].nodeValue = t;
    });
  } catch (err) {
    console.error("DOM translation error: ", err);
  }
}

// Watch DOM for new content (API data, user actions, etc.)
export function watchDOM(lang) {
  const observer = new MutationObserver(() => {
    translateDOM(lang);
  });
  observer.observe(document.body, { childList: true, subtree: true });
  return observer;
}
