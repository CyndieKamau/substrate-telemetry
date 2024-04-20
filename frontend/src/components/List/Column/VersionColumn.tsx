import * as React from 'react';
import { ColumnProps } from './';
import { Node } from '../../../state';
import icon from '../../../icons/file-binary.svg';

export class VersionColumn extends React.Component<ColumnProps> {
    public static readonly label = 'Version';
    public static readonly icon = icon;
    public static readonly width = 154;
    public static readonly setting = 'version';
    public static readonly sortBy = ({ Version}: Node) => Version || '';
  
    private data: string;
    
  
    public shouldComponentUpdate(nextProps: ColumnProps) {
      return this.data !== nextProps.node.Version;
    }
  
    render() {
      const { Version } = this.props.node;
  
      this.data = Version;
  
      return (
        <td className="Column" >
         {Version}
        </td>
      );
    }
  }