import * as React from 'react';
import { Maybe } from '../../../common';
import { ColumnProps } from './';
import { Node } from '../../../state';
import { Tooltip, TooltipCopyCallback } from '../../';
import icon from '../../../icons/file-binary.svg';

export class CpuArchitectureColumn extends React.Component<ColumnProps> {
    public static readonly label = 'CPU Architecture';
    public static readonly icon = icon;
    public static readonly width = 154;
    public static readonly setting = 'cpuarch';
    public static readonly sortBy = ({ CpuArchitecture }: Node) => CpuArchitecture || '';
  
    private data: string;
    private copy: Maybe<TooltipCopyCallback>;
  
    public shouldComponentUpdate(nextProps: ColumnProps) {
      return this.data !== nextProps.node.CpuArchitecture;
    }
  
    render() {
      const { CpuArchitecture } = this.props.node;
  
      this.data = CpuArchitecture;
  
      return (
        <td className="Column" onClick={this.onClick}>
          <Tooltip text={CpuArchitecture} position="right" copy={this.onCopy} />
        </td>
      );
    }
  
    private onCopy = (copy: TooltipCopyCallback) => {
      this.copy = copy;
    };
  
    private onClick = (event: React.MouseEvent) => {
      event.stopPropagation();
  
      if (this.copy != null) {
        this.copy();
      }
    };
  }
  