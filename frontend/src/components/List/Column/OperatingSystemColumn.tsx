import * as React from 'react';
import { ColumnProps } from './';
import { Node } from '../../../state';
import icon from '../../../icons/file-binary.svg';

export class OperatingSystemColumn extends React.Component<ColumnProps> {
    public static readonly label = 'OS';
    public static readonly icon = icon;
    public static readonly width = 154;
    public static readonly setting = 'os';
    public static readonly sortBy = ({ OperatingSystem }: Node) => OperatingSystem || '';
  
    private data: string;
    
  
    public shouldComponentUpdate(nextProps: ColumnProps) {
      return this.data !== nextProps.node.hash;
    }
  
    render() {
      const { OperatingSystem } = this.props.node;
  
      this.data = OperatingSystem;
  
      return (
        <td className="Column">
          {OperatingSystem} 
        </td>
      );
    }
  }