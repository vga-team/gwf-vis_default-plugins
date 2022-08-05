/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { GloablInfoDict } from "./utils/gwf-vis-plugin";
export namespace Components {
    interface GwfVisPluginCurrentSelection {
        "fetchingDataDelegate": (query: any) => any;
        "globalInfoDict": GloablInfoDict;
        "leaflet": typeof globalThis.L;
        "obtainHeader": () => Promise<string>;
        "updatingGlobalInfoDelegate": (gloablInfoDict: GloablInfoDict) => void;
    }
    interface GwfVisPluginDataFetcher {
        "fetchData": (query: any) => Promise<any>;
        "fetchingDataDelegate": (query: any) => Promise<any>;
        "globalInfoDict": GloablInfoDict;
        "leaflet": typeof globalThis.L;
        "updatingGlobalInfoDelegate": (gloablInfoDict: GloablInfoDict) => void;
    }
    interface GwfVisPluginGeojsonLayer {
        "active": boolean;
        "addingToMapDelegate": (layer: L.Layer, name: string, type: 'base-layer' | 'overlay', active?: boolean) => void;
        "datasetName": string;
        "fetchingDataDelegate": (query: any) => any;
        "globalInfoDict": GloablInfoDict;
        "leaflet": typeof globalThis.L;
        "name": string;
        "options"?: L.GeoJSONOptions;
        "removingFromMapDelegate": (layer: L.Layer) => void;
        "type": 'base-layer' | 'overlay';
        "updatingGlobalInfoDelegate": (gloablInfoDict: GloablInfoDict) => void;
        "variableName": string;
    }
    interface GwfVisPluginMetadata {
        "fetchingDataDelegate": (query: any) => any;
        "globalInfoDict": GloablInfoDict;
        "leaflet": typeof globalThis.L;
        "obtainHeader": () => Promise<string>;
        "updatingGlobalInfoDelegate": (gloablInfoDict: GloablInfoDict) => void;
    }
    interface GwfVisPluginTileLayer {
        "active": boolean;
        "addingToMapDelegate": (layer: L.Layer, name: string, type: 'base-layer' | 'overlay', active?: boolean) => void;
        "fetchingDataDelegate": (query: any) => any;
        "globalInfoDict": GloablInfoDict;
        "leaflet": typeof globalThis.L;
        "name": string;
        "options"?: L.TileLayerOptions;
        "removingFromMapDelegate": (layer: L.Layer) => void;
        "type": 'base-layer' | 'overlay';
        "updatingGlobalInfoDelegate": (gloablInfoDict: GloablInfoDict) => void;
        "urlTemplate": string;
    }
}
declare global {
    interface HTMLGwfVisPluginCurrentSelectionElement extends Components.GwfVisPluginCurrentSelection, HTMLStencilElement {
    }
    var HTMLGwfVisPluginCurrentSelectionElement: {
        prototype: HTMLGwfVisPluginCurrentSelectionElement;
        new (): HTMLGwfVisPluginCurrentSelectionElement;
    };
    interface HTMLGwfVisPluginDataFetcherElement extends Components.GwfVisPluginDataFetcher, HTMLStencilElement {
    }
    var HTMLGwfVisPluginDataFetcherElement: {
        prototype: HTMLGwfVisPluginDataFetcherElement;
        new (): HTMLGwfVisPluginDataFetcherElement;
    };
    interface HTMLGwfVisPluginGeojsonLayerElement extends Components.GwfVisPluginGeojsonLayer, HTMLStencilElement {
    }
    var HTMLGwfVisPluginGeojsonLayerElement: {
        prototype: HTMLGwfVisPluginGeojsonLayerElement;
        new (): HTMLGwfVisPluginGeojsonLayerElement;
    };
    interface HTMLGwfVisPluginMetadataElement extends Components.GwfVisPluginMetadata, HTMLStencilElement {
    }
    var HTMLGwfVisPluginMetadataElement: {
        prototype: HTMLGwfVisPluginMetadataElement;
        new (): HTMLGwfVisPluginMetadataElement;
    };
    interface HTMLGwfVisPluginTileLayerElement extends Components.GwfVisPluginTileLayer, HTMLStencilElement {
    }
    var HTMLGwfVisPluginTileLayerElement: {
        prototype: HTMLGwfVisPluginTileLayerElement;
        new (): HTMLGwfVisPluginTileLayerElement;
    };
    interface HTMLElementTagNameMap {
        "gwf-vis-plugin-current-selection": HTMLGwfVisPluginCurrentSelectionElement;
        "gwf-vis-plugin-data-fetcher": HTMLGwfVisPluginDataFetcherElement;
        "gwf-vis-plugin-geojson-layer": HTMLGwfVisPluginGeojsonLayerElement;
        "gwf-vis-plugin-metadata": HTMLGwfVisPluginMetadataElement;
        "gwf-vis-plugin-tile-layer": HTMLGwfVisPluginTileLayerElement;
    }
}
declare namespace LocalJSX {
    interface GwfVisPluginCurrentSelection {
        "fetchingDataDelegate"?: (query: any) => any;
        "globalInfoDict"?: GloablInfoDict;
        "leaflet"?: typeof globalThis.L;
        "updatingGlobalInfoDelegate"?: (gloablInfoDict: GloablInfoDict) => void;
    }
    interface GwfVisPluginDataFetcher {
        "fetchingDataDelegate"?: (query: any) => Promise<any>;
        "globalInfoDict"?: GloablInfoDict;
        "leaflet"?: typeof globalThis.L;
        "updatingGlobalInfoDelegate"?: (gloablInfoDict: GloablInfoDict) => void;
    }
    interface GwfVisPluginGeojsonLayer {
        "active"?: boolean;
        "addingToMapDelegate"?: (layer: L.Layer, name: string, type: 'base-layer' | 'overlay', active?: boolean) => void;
        "datasetName"?: string;
        "fetchingDataDelegate"?: (query: any) => any;
        "globalInfoDict"?: GloablInfoDict;
        "leaflet"?: typeof globalThis.L;
        "name"?: string;
        "options"?: L.GeoJSONOptions;
        "removingFromMapDelegate"?: (layer: L.Layer) => void;
        "type"?: 'base-layer' | 'overlay';
        "updatingGlobalInfoDelegate"?: (gloablInfoDict: GloablInfoDict) => void;
        "variableName"?: string;
    }
    interface GwfVisPluginMetadata {
        "fetchingDataDelegate"?: (query: any) => any;
        "globalInfoDict"?: GloablInfoDict;
        "leaflet"?: typeof globalThis.L;
        "updatingGlobalInfoDelegate"?: (gloablInfoDict: GloablInfoDict) => void;
    }
    interface GwfVisPluginTileLayer {
        "active"?: boolean;
        "addingToMapDelegate"?: (layer: L.Layer, name: string, type: 'base-layer' | 'overlay', active?: boolean) => void;
        "fetchingDataDelegate"?: (query: any) => any;
        "globalInfoDict"?: GloablInfoDict;
        "leaflet"?: typeof globalThis.L;
        "name"?: string;
        "options"?: L.TileLayerOptions;
        "removingFromMapDelegate"?: (layer: L.Layer) => void;
        "type"?: 'base-layer' | 'overlay';
        "updatingGlobalInfoDelegate"?: (gloablInfoDict: GloablInfoDict) => void;
        "urlTemplate"?: string;
    }
    interface IntrinsicElements {
        "gwf-vis-plugin-current-selection": GwfVisPluginCurrentSelection;
        "gwf-vis-plugin-data-fetcher": GwfVisPluginDataFetcher;
        "gwf-vis-plugin-geojson-layer": GwfVisPluginGeojsonLayer;
        "gwf-vis-plugin-metadata": GwfVisPluginMetadata;
        "gwf-vis-plugin-tile-layer": GwfVisPluginTileLayer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gwf-vis-plugin-current-selection": LocalJSX.GwfVisPluginCurrentSelection & JSXBase.HTMLAttributes<HTMLGwfVisPluginCurrentSelectionElement>;
            "gwf-vis-plugin-data-fetcher": LocalJSX.GwfVisPluginDataFetcher & JSXBase.HTMLAttributes<HTMLGwfVisPluginDataFetcherElement>;
            "gwf-vis-plugin-geojson-layer": LocalJSX.GwfVisPluginGeojsonLayer & JSXBase.HTMLAttributes<HTMLGwfVisPluginGeojsonLayerElement>;
            "gwf-vis-plugin-metadata": LocalJSX.GwfVisPluginMetadata & JSXBase.HTMLAttributes<HTMLGwfVisPluginMetadataElement>;
            "gwf-vis-plugin-tile-layer": LocalJSX.GwfVisPluginTileLayer & JSXBase.HTMLAttributes<HTMLGwfVisPluginTileLayerElement>;
        }
    }
}
