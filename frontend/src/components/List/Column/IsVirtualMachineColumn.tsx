import * as React from 'react';
import { ColumnProps } from './';
import { Node } from '../../../state';
import icon from '../../../icons/file-binary.svg';

export class IsVirtualMachineColumn extends React.Component<ColumnProps> {
    public static readonly label = 'Virtual Machine';
    public static readonly icon = icon;
    public static readonly width = 154;
    public static readonly setting = 'virtualmachine';
    public static readonly sortBy = ({ VirtualMachine }: Node) => VirtualMachine || false;
  
    private data: boolean;

  
    public shouldComponentUpdate(nextProps: ColumnProps) {
      return this.data !== nextProps.node.VirtualMachine;
    }
  
    render() {
      const { VirtualMachine } = this.props.node;
  
      this.data = VirtualMachine;
  
      return (
        <td className="Column">
          {VirtualMachine}
        </td>
      );
    }
  }