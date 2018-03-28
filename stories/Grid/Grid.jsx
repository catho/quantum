import React from 'react';

const Grid = () => (
  <React.Fragment>
    <p>
      If you are familiar with bootstrap 3, you can easily understand ours.
    </p>
    <p>
      <table>
        <thead>
          <tr>
            <th>Grid</th>
            <th><a href="https://getbootstrap.com/docs/3.3/css/#grid">Bootstrap</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>phone</td>
            <td>xs</td>
          </tr>
          <tr>
            <td>tablet</td>
            <td>sm</td>
          </tr>
          <tr>
            <td>desktop</td>
            <td>md</td>
          </tr>
          <tr>
            <td>large</td>
            <td>lg</td>
          </tr>
          <tr>
            <td>hd</td>
            <td> - </td>
          </tr>
        </tbody>
      </table>

    </p>
    <h2>How it works</h2>
    <hr />
  </React.Fragment>
);

export default Grid;
