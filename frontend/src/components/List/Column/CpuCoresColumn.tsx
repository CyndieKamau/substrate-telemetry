import * as React from 'react';
import { ColumnProps } from './';
import { Node } from '../../../state';
import icon from '../../../icons/file-binary.svg';

export class CpuCoresColumn extends React.Component<ColumnProps> {
    public static readonly label = 'CPU Cores';
    public static readonly icon = icon;
    public static readonly width = 154;
    public static readonly setting = 'cpucores';
    public static readonly sortBy = ({ CpuCores }: Node) => CpuCores || 0;
  
    private data: number;
  
    public shouldComponentUpdate(nextProps: ColumnProps) {
      return this.data !== nextProps.node.CpuCores;
    }
  
    render() {
      const { CpuCores } = this.props.node;
  
      this.data = CpuCores;
  
      return (
        <td className="Column">
          {CpuCores}
        </td>
      );
    }
  }
  