import * as React from 'react';
import { Maybe } from '../../../common';
import { ColumnProps } from './';
import { Node } from '../../../state';
import { Truncate, Tooltip, TooltipCopyCallback } from '../../';
import icon from '../../../icons/file-binary.svg';

export class OperatingSystemColumn extends React.Component<ColumnProps> {
    public static readonly label = 'OS';
    public static readonly icon = icon;
    public static readonly width = 154;
    public static readonly setting = 'os';
    public static readonly sortBy = ({ hash }: Node) => hash || '';
  
    private data: Maybe<string>;
    private copy: Maybe<TooltipCopyCallback>;
  
    public shouldComponentUpdate(nextProps: ColumnProps) {
      return this.data !== nextProps.node.hash;
    }
  
    render() {
      const { hash } = this.props.node;
  
      this.data = hash;
  
      return (
        <td className="Column" onClick={this.onClick}>
          <Tooltip text={hash} position="right" copy={this.onCopy} />
          <Truncate text={hash} chars={16} />
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