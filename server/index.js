const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });

});

app.get("/getAllCustomers", (req, res) => {
    fs.readFile(__dirname + "/customers.json", 'utf8', function (err, data) {
        console.log(data);
        res.json({ text: data });
    })
});

app.get("/getAccounts/:customer_id", (req, res) => {
    fs.readFile(__dirname + "/accounts.json", 'utf8', function (err, data) {
        let output = [];
        let accs = JSON.parse(data);

        accs.map((acc) => {
            if (acc.customer_id === req.params.customer_id) {
                output.push(acc);
            } 
        })
        console.log(output);
        res.json({text: JSON.stringify(output)});
    })
});

app.get("/getAllAccounts", (req, res) => {
    fs.readFile(__dirname + "/accounts.json", 'utf8', function (err, data) {
        console.log(data);
        res.json({ text: data });
    })
});

app.get("/getAllContests", (req, res) => {
    fs.readFile(__dirname + "/contests.json", 'utf8', function (err, data) {
        console.log(data);
        res.json({ text: data });
    })
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});