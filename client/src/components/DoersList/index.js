import React from 'react';

const DoersList = ({ dutyDoer }) => {
  return(
    <td>
      {dutyDoer &&
        dutyDoer.map(doer => (
          {doer.name}
        ))
      }
    </td>
  )
};

export default DoersList;