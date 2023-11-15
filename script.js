const extendHex = (shortHex) => {
  shortHex = shortHex.replace("#", "");

  if (shortHex.length !== 3 || !/^[0-9a-fA-F]{3}$/.test(shortHex)) {
    console.error("Invalid short hex code");
    return null;
  }

  const fullHex = shortHex
    .split("")
    .map(component => component.repeat(2))
    .join("");

  return `#${fullHex}`;
};

const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
