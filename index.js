const express = require('express');
const app = express();

const { sendMail } = require("./mail")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/mail", async (req, res) => {
    try {
        const { email, message } = req.body;
        await sendMail({ email, message });
        return res.json({ status: "success", message: "Mail has been sent successfully" });
    }
    catch (error) {
        return res.json({ status: "error", error: error.message })
    }
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
