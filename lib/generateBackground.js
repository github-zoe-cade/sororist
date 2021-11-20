import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";
import { random } from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.34";

const width = 200;
const height = width * document.body.scrollHeight / document.body.clientWidth;

const svg = SVG()
  .viewbox(0, 0, width, height)
  .attr("preserveAspectRatio", "xMidYMid slice");

const numPoints = 100;

// svg.rect(width, height).fill("#1D1934");

for (let i = 0; i < numPoints; i++) {
  const x = random(-10, width - 10);
  const y = random(0, height - 10);

  svg
    .circle(random(1, 10))
    .cx(x)
    .cy(y)
    .fill(random(["#7257FA", "#FFD53D", "#F25C54"]));
}

let blob = new Blob([svg.svg()], { type: "image/svg+xml" });
let url = URL.createObjectURL(blob);
let body = document.querySelector("body");
body.style.backgroundImage = `url(${url})`;
body.addEventListener("load", () => URL.revokeObjectURL(url), { once: true });
