import * as React from 'react';
import { ColumnProps } from './';
import { Node } from '../../../state';
import icon from '../../../icons/file-binary.svg';

export class CpuColumn extends React.Component<ColumnProps> {
    public static readonly label = 'CPU Column';
    public static readonly icon = icon;
    public static readonly width = 154;
    public static readonly setting = 'cpucolumn';
    public static readonly sortBy = ({ Cpu }: Node) => Cpu || 0;
  
    private data: number;
  
    public shouldComponentUpdate(nextProps: ColumnProps) {
      return this.data !== nextProps.node.Cpu;
    }

    render() {
      const { Cpu } = this.props.node;
  
      this.data = Cpu;

      return (
        <td className="Column">
          {Cpu}
        </td>
      ); 
      
    }
  
    
  }
  