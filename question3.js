const express = require('express');  
const app = express();  
const PORT = 3000;  

//Define a route for /test  
app.get('/test', (req, res) => {  
    res.json({ message: 'Express is working! Claire Ann C. Gabato' });  
});  

// Start the server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});  