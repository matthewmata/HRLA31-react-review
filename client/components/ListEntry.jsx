import React, { Component } from 'react';

// export default class ListEntry extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         test
//       </div>
//     )
//   }
// }

const ListEntry = ({ todo }) => (
  <div>
    {todo}
  </div>
)

export default ListEntry;