import React from 'react';
import PropTypes from 'prop-types';

function UserAddress({ address }) {
  return (
    <div>
      <p><strong>Address:</strong></p>
      <p>{address.street}</p>
      <p>{address.city}, {address.state} {address.zip}</p>
    </div>
  );
}

UserAddress.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserAddress;
