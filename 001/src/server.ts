/*

  This is simply a blue print of GET, POST, PUT & DELETE http methods.

  to better understand the HTTP Methods please read: 
   - 001/notes/what_are_http_methods.md

*/

import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = 8000;

//            ====================( GET METHOD )====================
app.get("/api/users", (req: Request, res: Response) => {
  // This route handles GET requests to '/api/users'
  // It sends back a list of users as JSON
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];
  res.json(users);
});
/* 
  Explanation: When a GET request is made to /api/users, this route responds by sending back a list of users as JSON. This route is commonly used to fetch data from the server.
*/
//            ====================( END GET METHOD )====================

//            ====================( POST METHOD )====================
app.post("/api/users", (req: Request, res: Response) => {
  // This route handles POST requests to '/api/users'
  // It expects a JSON object with user data in the request body
  // It adds the new user to the list and sends back the updated list of users
  const newUser = req.body;
  // Logic to add the new user to the database or list
  res.status(201).send("User created successfully");
});
/*
  Explanation: When a POST request is made to /api/users, this route expects a JSON object with user data in the request body. It then adds the new user to the database or list and sends back a success message. This route is commonly used to create new resources on the server.
*/
//            ====================( END POST METHOD )====================

//            ====================(PUT METHOD )====================
app.put("/api/users/:id", (req: Request, res: Response) => {
  // This route handles PUT requests to '/api/users/:id'
  // It expects an ID parameter in the URL and user data in the request body
  // It updates the user with the specified ID and sends back the updated user
  const userId = req.params.id;
  const updatedUserData = req.body;
  // Logic to update the user with the specified ID
  res.send("User updated successfully");
});
/*
  Explanation: When a PUT request is made to /api/users/:id, this route expects an ID parameter in the URL and user data in the request body. It then updates the user with the specified ID and sends back a success message. This route is commonly used to update existing resources on the server.
*/
//            ====================( END PUT METHOD )====================

//            ====================( DELETE METHOD )====================
app.delete("/api/users/:id", (req: Request, res: Response) => {
  // This route handles DELETE requests to '/api/users/:id'
  // It expects an ID parameter in the URL
  // It deletes the user with the specified ID and sends back a success message
  const userId = req.params.id;
  // Logic to delete the user with the specified ID
  res.send("User deleted successfully");
});
/*
  Explanation: When a DELETE request is made to /api/users/:id, this route expects an ID parameter in the URL. It then deletes the user with the specified ID and sends back a success message. This route is commonly used to remove resources from the server.
*/
//            ====================( END DELETE METHOD )====================

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
