const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const users = {
    "roberci@email.com": "123",
    "nugnu@email.com": "123",
}

const patients = [
    "zé",
    "romero brito",
    "ariano suassuna",
    "demi lovato",
    "chumbo",
    "os cara",
    "cindy lauper",
    "para man kkkk"
]


app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    let status;
    const actualPassword = users[email] || undefined;
    if (actualPassword !== undefined && actualPassword === password) {
        status = 200;
    }
    else {
        status = 400;
    }
    // console.log(status, email);
    return res.sendStatus(status);
});

app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    let status;
    if (!(email in users)) {
        status = 200;
        users[email] = password;
    }
    else {
        status = 400;
    }
    console.log(users);

    return res.sendStatus(status);
});

app.get('/', (req, res) => {
    return res.json({ message: 'server is up and running...' });
});

app.get('/patients', (req, res) => {
    return res.json({ patients });
})



app.listen(3333);
