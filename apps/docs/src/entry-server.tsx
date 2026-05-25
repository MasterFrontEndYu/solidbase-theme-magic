// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";
import { getHtmlProps } from "@kobalte/solidbase/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html {...getHtmlProps()}>
        ...
      </html>
    )}
  />
));