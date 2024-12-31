





const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./models/Register");
const LoginModel = require("./models/Login");
const ActivityInfo = require("./models/Activity"); 
const progressInfo=require("./models/progress");
const   DataInfo =require("./models/Data");
const   GoalInfo =require("./models/Goal");
const   ProfileInfo =require("./models/profile")
const app = express();


app.use(cors());
app.use(express.json()); 


mongoose.connect("mongodb://127.0.0.1:27017/healthy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
 
    const existingUser = await RegisterModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }


    const newUser = new RegisterModel({ username, email, password });
    await newUser.save();

    res.json(newUser); 
  } catch (err) {
    res.status(500).json({ message: "Error saving user", error: err });
  }
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
  
    const user = await RegisterModel.findOne({ username, password });
    if (user) {
     
      const loginEntry = new LoginModel({ username, password });
      await loginEntry.save();

      res.json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error during login", error: err });
  }
});

app.post("/home", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const profileData = new ActivityInfo(req.body);
    await profileData.save();

    res.status(200).json({ message: "Profile saved successfully", profileData });
  } catch (error) {
    console.error("Error saving profile:", error);
    res.status(500).json({ message: "Error saving profile", error });
  }
});


app.post("/progress", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const progressData = new progressInfo(req.body);
    await progressData.save();

    res.status(200).json({ message: "Profile saved successfully", progressData });
  } catch (error) {
    console.error("Error saving profile:", error);
    res.status(500).json({ message: "Error saving profile", error });
  }
});

app.post("/value", async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const graphData = new DataInfo(req.body);
    await graphData.save();
    res.status(200).json({ message: "Data saved successfully", graphData });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error });
  }
});



app.post('/goal', (req, res) => {
  const { Steps, Running, Sleep, targetWeight, water } = req.body;

  console.log("Received data:", { Steps, Running, Sleep, targetWeight, water });
  

  res.status(200).json({ message: "Goals saved successfully!" });
});


app.post("/popup", async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const profileData = new ProfileInfo(req.body);
    await profileData.save();
    res.status(200).json({ message: "Data saved successfully", profileData });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error });
  }
});

app.get("/data", (req, res) => {
  DataInfo.find()
  .then(datas=>res.json(datas))
  .catch(err=>res.json(err))
});


app.get("/get-popup", (req, res) => {
  ProfileInfo.find()
  .then(profiles=>res.json(profiles))
  .catch(err=>res.json(err))
});




app.get("/getactivity-info",  (req, res) => {
  ActivityInfo.find()
  .then(activityinfos=>res.json(activityinfos))
  .catch(err=>res.json(err))
});

app.get('/getgoals', (req, res) => {
  
  const goals = [
    { label: "Running", value: "0km", icon: "🏃" },
    { label: "Sleeping", value: "0hrs", icon: "😴" },
    { label: "Weight Loss", value: "0kg", icon: "🔥" }
  ];
  res.json(goals);
});


app.get("/getprogress-info", (req, res) => {
  progressInfo.find()
    .then(progressInfos => {
      res.json(progressInfos); 
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching progress info", error: err });
    });
});



app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
