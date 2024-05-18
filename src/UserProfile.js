import React from 'react';
import PropTypes from 'prop-types';
import UserAddress from './UserAddress';
import UserHobbies from './UserHobbies';

function UserProfile({ name, age, email, address, hobbies }) {
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <UserAddress address={address} />
      <UserHobbies hobbies={hobbies} />
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }).isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserProfile;
