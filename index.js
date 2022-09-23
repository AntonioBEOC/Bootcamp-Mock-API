const { Console } = require('console');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")

//MOCK DATA-----------------------------------------------
let myDB = [
    {
        name: 'Bluetooth headphones',
        category: 'Electronics',
        description: 'headphones that use bluetooth for wireless connectivity',
        price: 234

    },
    {
        name: 'Apple',
        category: 'fruits and vegetables',
        description: 'apple fruit',
        price: 1    
    },
    {
        name: 'Broom',
        category: 'House',
        description: 'a broom for cleaning',
        price: 10
    },
    {
        name: 'Monitor',
        category: 'Electronics',
        description: 'a 1080p hdmi monitor',
        price: 400
    }
];


//API ROUTES-------------------------------------------------
const router = express.Router();

router.get('/getProducts',(req,res)=>{
    res.send(myDB);
})

router.post('/insertProduct',(req,res) =>{

    console.log(req.body);
    myDB.push(JSON.parse(req.body));

    res.send(JSON.stringify(req.body))
    

});

router.post('/deleteProduct/:id', (req,res) =>{
    console.log(req.params.id);
})


//EXPRESS SERVER----------------------------------------------
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(bodyParser.json());

const server = app.listen(app.get('port'),() => {
    console.log(`server running on port: ${app.get('port')}`)
});


app.use('/', router);

