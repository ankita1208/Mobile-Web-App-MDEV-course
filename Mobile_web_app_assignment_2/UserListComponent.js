import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore';

// Functional component named UserListComponent
const UserListComponent = () => {
  // State variables using the useState hook
  const [users, setUsers] = useState([]); // Array to store user data from Firestore
  const [newUserName, setNewUserName] = useState(''); // State variable to store new user name input

  // useEffect hook to fetch users from Firestore when the component mounts
  useEffect(() => {
    // Async function to get users from Firestore
    const getUsers = async () => {
      const db = getFirestore(); // Get Firestore instance
      const usersRef = collection(db, 'users'); // Reference to the 'users' collection in Firestore
      const querySnapshot = await getDocs(usersRef); // Get documents from the 'users' collection
      const userList = [];
      querySnapshot.forEach((doc) => {
        userList.push({ id: doc.id, ...doc.data() }); // Extract user data and add it to the userList array
      });
      setUsers(userList); // Update the users state with the fetched user data
    };

    getUsers(); // Call the async function to fetch users when the component mounts
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  // Function to handle adding a new user to Firestore
  const handleAddUser = async () => {
    const db = getFirestore(); // Get Firestore instance
    const newUserRef = doc(collection(db, 'users')); // Reference to a new document in the 'users' collection

    try {
      // Set document data for the new user in Firestore
      await setDoc(newUserRef, {
        displayName: newUserName, // New user's display name
        // Other user data fields if needed
      });

      // Refresh the user list after adding a new user
      getUsers(); // Call the getUsers function to update the user list with the new user
      setNewUserName(''); // Clear the input field after adding the user
    } catch (error) {
      console.error('Error adding document: ', error); // Log error if document creation fails
    }
  };

  // Render the component JSX
  return (
    <div className="user-list-widget">  
      <h3>User List</h3> 
      <ul>
        {users.map((user) => ( 
          <li key={user.id}>{user.displayName}</li> 
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter new user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)} /* Input field to enter new user name */
        />
        <button onClick={handleAddUser}>Add User</button> /* Button to add the new user */
      </div>
    </div>
  );
};

export default UserListComponent; // Export the UserListComponent for use in other parts of the application
