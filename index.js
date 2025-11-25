const express = require("express");
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

let transactions = [];

app.post("/transaction", (req, res) => {
    const { type, amount, description } = req.body;

    if (!type || !amount) {
        return res.status(400).json({ message: "Type and amount are required" });
    }

    const newTransaction = {
        id: transactions.length + 1,
        type,
        amount,
        description: description || "",
        date: new Date()
    };

    transactions.push(newTransaction);
    res.json(newTransaction);
});

app.get("/transactions", (req, res) => {
    res.json(transactions);
});

app.get("/summary", (req, res) => {
    let income = 0, expense = 0;

    transactions.forEach(t => {
        if (t.type === "income") income += t.amount;
        else if (t.type === "expense") expense += t.amount;
    });

    res.json({
        income,
        expense,
        balance: income - expense
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
