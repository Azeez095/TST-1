import React from 'react';
import PropTypes from 'prop-types';

function UserHobbies({ hobbies }) {
  return (
    <div>
      <p><strong>Hobbies:</strong></p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

UserHobbies.propTypes = {
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserHobbies;
