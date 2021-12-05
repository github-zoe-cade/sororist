import ReactDOMServer from 'react-dom/server';
import { Background } from "components/basics/Background"

export default function generateBackground() {
if (typeof window === 'object') {
  const width = 200;
  const height = width * document.body.scrollHeight / document.body.clientWidth;

  const darkSVG =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 ${width} ${height}"><rect x="0" y="0" width="${width}" height="${height}" fill="#3B354D"/>${
      ReactDOMServer.renderToString(<Background colorScheme="dark" />)
    }</svg>`
  );

  const lightSVG =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 ${width} ${height}"><rect x="0" y="0" width="${width}" height="${height}" fill="#FCFCFF"/>${
      ReactDOMServer.renderToString(<Background colorScheme="light" />)
    }</svg>`
  );

  document.documentElement.style.setProperty('--backgroundUrlDark', `url(${darkSVG})`);
  document.documentElement.style.setProperty('--backgroundUrlLight', `url(${lightSVG})`);
}
}
