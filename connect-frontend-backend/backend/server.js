import express from "express"; // Import express

const app = express(); // Create app

// // Send response on root
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// Create API
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first joke",
      content: "... finished.",
    },
    {
      id: 2,
      title: "second joke",
      content: "... finished.",
    },
    {
      id: 3,
      title: "third joke",
      content: "... finished.",
    },
    {
      id: 4,
      title: "fourth joke",
      content: "... finished.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000; // Create port

// Listen to port
app.listen(port, () => {
  console.log(`Serve at https//localhost:${port}`);
});
