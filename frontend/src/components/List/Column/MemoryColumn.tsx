import * as React from 'react';
import { ColumnProps } from './';
import { Node } from '../../../state';
import icon from '../../../icons/file-binary.svg';

export class MemoryColumn extends React.Component<ColumnProps> {
    public static readonly label = 'Memory';
    public static readonly icon = icon;
    public static readonly width = 154;
    public static readonly setting = 'memory';
    public static readonly sortBy = ({ Memory }: Node) => Memory|| '';
  
    private data: string;

  
    public shouldComponentUpdate(nextProps: ColumnProps) {
      return this.data !== nextProps.node.Memory;
    }
  
    render() {
      const { Memory} = this.props.node;
  
      this.data = Memory;
  
      return (
        <td className="Column">
          {Memory} 
        </td>
      );
    }
  }