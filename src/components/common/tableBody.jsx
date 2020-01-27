import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  rendorCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (id, column) => {
    return id + (column.path || column.key);
  };

  render() {
    const { id, data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item[id]}>
            {columns.map(column => (
              <td key={this.createKey(item[id], column)}>
                {this.rendorCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
