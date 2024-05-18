import React from 'react';
import UserProfile from './UserProfile';

function App() {
  const user = {
    name: 'Amoo Akolade',
    age: 28,
    email: 'azeezakolade1995@gmail.com',
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
    },
    hobbies: ['Reading', 'Traveling', 'Swimming'],
  };

  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile
        name={user.name}
        age={user.age}
        email={user.email}
        address={user.address}
        hobbies={user.hobbies}
      />
    </div>
  );
}

export default App;
