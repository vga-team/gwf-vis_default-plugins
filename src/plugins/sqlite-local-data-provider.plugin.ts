import type { GWFVisDataProviderPlugin, GWFVisPlugin } from "gwf-vis-host";
import { html, css, LitElement } from "lit";
import initSqlJs from "sql.js";
import sqlJsWasmUrl from "sql.js/dist/sql-wasm.wasm?url";

export default class GWFVisPluginSqliteLocalDataProvider
  extends LitElement
  implements
    GWFVisPlugin,
    GWFVisDataProviderPlugin<string, initSqlJs.QueryExecResult | undefined>
{
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    * {
      box-sizing: border-box;
    }
  `;

  #SQL?: initSqlJs.SqlJsStatic;

  obtainDataProviderIdentifiers = () => ["sqlite-local"];

  obtainHeader = () => `<i>sqlite-local</i> Data Provider`;

  notifyLoadingCallback?: () => () => void;

  async queryData(
    _identifier: string,
    dataSource: string,
    queryObject: string
  ) {
    if (this.#SQL && dataSource && queryObject) {
      const loadingEndCallback = this.notifyLoadingCallback?.();
      const dbUrl = dataSource;
      const dbBuffer = await fetch(dbUrl).then((response) =>
        response.arrayBuffer()
      );
      const db = new this.#SQL.Database(new Uint8Array(dbBuffer));
      const result = db.exec(queryObject)?.[0];
      loadingEndCallback?.();
      return result;
    }
    return undefined;
  }

  async hostFirstLoadedHandler() {
    const loadingEndCallback = this.notifyLoadingCallback?.();
    this.#SQL = await initSqlJs({
      locateFile: () => sqlJsWasmUrl,
    });
    loadingEndCallback?.();
  }

  render() {
    return html`<i>sqlite-local</i> Data Provider`;
  }
}
