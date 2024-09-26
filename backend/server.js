const express = require('express');
const app = express();
const port = 5001;

app.get('/',async(req,res)=>{
    res.sendFile('./frontend/src/pages/LoginPage.js')
}
)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

