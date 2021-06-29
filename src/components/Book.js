import React from 'react';
import ProtoType from "prop-types";

const Books = props => {
    // eslint-disable-next-line react/prop-types
    const { id, title, category } = props;
    return (
      <tr>
        <th>{id}</th>
        <th>{title}</th>
        <th>{category}</th>
      </tr>
    );
  };

Books.prototype = {
    id: ProtoType.number,
    title: ProtoType.string,
    category: ProtoType.string
};

Books.default = {
    id: 99,
    title: "title must fill here",
    category: "category must here",
    
};

export default Books;
