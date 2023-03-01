import { Component, Host, h, ComponentInterface, Method, Prop, State } from '@stencil/core';
import { GwfVisPlugin, GloablInfo } from '../../utils/gwf-vis-plugin';
import { ColorSchemeDefinition, generateColorScale, generateGradientCSSString, obtainVariableColorSchemeDefinition } from '../../utils/color';
import { ScaleQuantize, ScaleSequential } from 'd3';

@Component({
  tag: 'gwf-vis-plugin-legend',
  styleUrl: 'gwf-vis-plugin-legend.css',
  shadow: true,
})
export class GwfVisPluginLegend implements ComponentInterface, GwfVisPlugin {
  static readonly __PLUGIN_TAG_NAME__ = 'gwf-vis-plugin-legend';

  @State() currentVaribaleName: string;
  @State() currentMinValue: number;
  @State() currentMaxValue: number;
  @State() currentColorDefiniton: ColorSchemeDefinition;
  @State() currentColorScale: ScaleQuantize<any, never> | ScaleSequential<any, never>;
  @State() currentDimensions: { [dimension: string]: number };

  @Prop() delegateOfFetchingData: (query: any) => any;
  @Prop() globalInfo: GloablInfo;
  @Prop() delegateOfUpdatingGlobalInfo: (gloablInfoDict: GloablInfo) => void;
  @Prop() dataSource: string;
  @Prop() variableName?: string;
  @Prop() dimensions?: { [dimension: string]: number };
  @Prop() colorScheme?: { [variableName: string]: ColorSchemeDefinition };
  @Prop() fractionDigits: number = 2;

  async componentWillRender() {
    this.currentVaribaleName = this.variableName || this.globalInfo?.variableName;
    this.currentDimensions = this.dimensions || this.globalInfo?.dimensionDict;
    if (this.currentVaribaleName && this.currentDimensions) {
      [{ 'min(value)': this.currentMinValue, 'max(value)': this.currentMaxValue }] = (await this.delegateOfFetchingData?.({
        type: 'values',
        from: this.dataSource,
        with: {
          variable: this.currentVaribaleName,
        },
        for: ['min(value)', 'max(value)'],
      })) || [{ 'min(value)': undefined, 'max(value)': undefined }];
    }
    this.currentColorDefiniton = obtainVariableColorSchemeDefinition(this.colorScheme, this.currentVaribaleName);
    this.currentColorScale = generateColorScale(this.currentColorDefiniton);
  }

  @Method()
  async obtainHeader() {
    return 'Legend';
  }

  render() {
    return (
      <Host>
        <div part="content">
          <div>
            <b>Variable: </b>
            {this.currentVaribaleName ?? 'N/A'}
          </div>
          {this.currentColorDefiniton?.type === 'quantize' ? this.renderQuantize() : this.renderSequential()}
        </div>
      </Host>
    );
  }

  private renderQuantize() {
    const colorScale = this.currentColorScale as ScaleQuantize<any> | undefined;
    if (!colorScale) {
      return;
    }
    const extents = colorScale.range().map(color => colorScale.invertExtent(color));
    const ticks = extents?.length > 0 ? [extents[0][0], ...extents.map(extent => extent[1])] : undefined;
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'nowrap', height: '1em', margin: `0 ${(0.5 / (ticks?.length ?? 1)) * 100}%` }}>
          {colorScale?.range()?.map(color => (
            <div style={{ flex: '1', height: '100%', background: color ?? '' }}></div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
          {ticks?.map(tick => (
            <div style={{ flex: '1', height: '100%', margin: '0 0.5em', textAlign: 'center' }}>{tick?.toFixed(this.fractionDigits)}</div>
          ))}
        </div>
      </div>
    );
  }

  private renderSequential() {
    return (
      <div>
        <div
          style={{
            height: '1rem',
            background: generateGradientCSSString(this.currentColorScale),
          }}
        ></div>
        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <div style={{ flex: '1', whiteSpace: 'nowrap' }}>{this.currentMinValue?.toFixed(this.fractionDigits) ?? 'N/A'}</div>
          <div style={{ flex: 'auto', width: '1rem' }}></div>
          <div style={{ flex: '1', whiteSpace: 'nowrap' }}>{this.currentMaxValue?.toFixed(this.fractionDigits) ?? 'N/A'}</div>
        </div>
      </div>
    );
  }
}
