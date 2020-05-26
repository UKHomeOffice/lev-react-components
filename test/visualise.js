'use strict';

import fs from 'fs';
import { renderToString } from "react-dom/server";

const html = component => `<html>
<head>
  <title>Component Preview</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;">
  <div id="app">
    ${component}
  </div>
</body>
</html>`;

const visualise = (component, path) => afterAll(() => {
  if (process.env.VISUALISE) {
    fs.writeFileSync(path, html(renderToString(component)));
  }
});

export default visualise;
