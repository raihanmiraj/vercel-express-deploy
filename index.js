let express = require("express")
let cors = require("cors")
let app = express();
app.use(cors())
app.use(express.json())
let port = process.env.PORT || 5000;
let { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { default: axios } = require("axios");
let uri = "mongodb+srv:url";
 
// let client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

async function run() {
  try {

   app.get("/test", async (req, res) => {
      try {



        res.send({
          success: true,
          message: "Server running"
        });
      } catch (error) {
        res.sendStatus(500);
      }
    });



  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);









app.get("/", (req, res) => {
  res.send("user server running")
})


app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})