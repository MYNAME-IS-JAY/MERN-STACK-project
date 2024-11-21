const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const {UserModel} = require('./src/model/UserModel')

const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection
async function main() {
  await mongoose.connect(
    'mongodb+srv://deshmukhjayant2004:jayantdeshmukh@the-grand-react-app.qk142.mongodb.net/The-Grand-react-app?retryWrites=true&w=majority&appName=The-Grand-react-app'
  );

  app.get('/', (req, res) => {
    res.send('The Grand Recipe App Server is running!');
  });
}

main()
  .then(() => console.log('Mongodb Connected Successfully!'))
  .catch((err) => console.log(err));


app.post('/signup', async (req, res) => {
  const { email, password, firstname, lastname, image } = req.body;

  try {
    
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new UserModel({
      email,
      password: hashedPassword,
      firstname,
      lastname,
      image,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Signin route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      'your_jwt_secret_key', // Replace with a secure secret key
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        image: user.image,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Existing routes
const ItemRoutes = require('./src/routes/itemRoute');
const CategoryRoutes = require('./src/routes/categoryRoute');

app.use('/api', ItemRoutes);
app.use('/api', CategoryRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
