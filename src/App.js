
import React, {useEffect, useState} from 'react';

import axios from 'axios';


const App = ()=>{

  const [tasks, setTasks] = useState([])
  const [friends, setFriends] = useState([])

 // real access to your application on local
  useEffect(()=>{

    // Laravel fecthing
    axios
      .get("http://localhost:8000/api/tasks")
      .then((res) => setTasks(res.data));


    axios
      .get("http://localhost:8000/api/friends")
      .then((res) => setFriends(res.data));

  }, [])
  console.log(tasks);
  console.log(friends);


  // For the tasks
  function completeStatus(status) {
    if (status === "1") {
      return "Task is now completed";
    }
    return "Task is being processed";
  }

  // For the friend list
  function completeRequest(status) {
    if (status === "1") {
      return "Friend request is now completed";
    }
    return "Friend request is being processed";
  }

  return(
    <div>
      <section>
        <h1>Welcome to the Laravel API fething content</h1>
        <h2>Made by C3PO group</h2>
        <hr></hr>
      </section>
      <section>
        <h1>Laravel Task</h1>
        <ul>
          <table>
            {/*have the first state then mapping over task so will we will get every data in the array*/}
            {tasks?.tasks?.map((task) => (
              // Initializing access with the key with the given parameter task.id
              <div key = {task.id}>
                <h3>Task name: {task.task}</h3>
                <tr>
                <th><p>Completion?: <span>{completeStatus(task.completed)}</span></p></th> {/*After the . then its the table name from db*/}
                <th><p>Created at: <span>{task.created_at}</span></p></th>
                <th><p>Updated at: <span>{task.updated_at}</span></p></th>
                </tr>
              </div>
            ))}
          </table>
        </ul>
      </section>
      <section>
      <h1>Laravel Friend list</h1>
      <ul>
          <table>
            {/*have the first state then mapping over friend so will we will get every data in the array*/}
            {friends?.friends?.map((friend) => (
              // Initializing access with the key with the given parameter friend.id
              <div key={friend.id}>
                <h3>Friend name: {friend.friend}</h3>
                <tr>
                <th><p>Completion?: <span>{completeRequest(friend.friend_request)}</span></p></th> {/*After the . then its the table name from db*/}
                <th><p>Created at: <span>{friend.created_at}</span></p></th>
                <th><p>Updated at: <span>{friend.updated_at}</span></p></th>
                </tr>
              </div>
            ))}
          </table>
        </ul>
      </section>
    </div>
  )

};


export default App;