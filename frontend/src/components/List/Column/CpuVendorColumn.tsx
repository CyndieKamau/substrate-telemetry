import * as React from 'react';
import { ColumnProps } from './';
import { Node } from '../../../state';
import icon from '../../../icons/file-binary.svg';

export class CpuVendorColumn extends React.Component<ColumnProps> {
    public static readonly label = 'CPU Vendor';
    public static readonly icon = icon;
    public static readonly width = 154;
    public static readonly setting = 'vendor';
    public static readonly sortBy = ({ CpuVendor }: Node) => CpuVendor || '';
  
    private data: string;
  
    public shouldComponentUpdate(nextProps: ColumnProps) {
      return this.data !== nextProps.node.CpuVendor;
    }
  
    render() {
      const { CpuVendor } = this.props.node;
  
      this.data = CpuVendor;
  
      return (
        <td className="Column">
          {CpuVendor}
        </td>
      );
    }
  }
  