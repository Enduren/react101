import { useEffect, useState } from "react";
import "./App.css";
import { CustomButton } from "./components/button";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"; // Changed here

//Child Component that receives props
function Greetigs(greet) {
  return <h2>Hello, {greet.name}</h2>;
}
function UserGreetigs() {
  return <h2>Welcome Back! </h2>;
}

function GuessGreetigs() {
  return <h2>Please sign Up</h2>;
}

function CheckGreetigs({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreetigs />;
  }
  return <GuessGreetigs />;
}

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Function to toggle the login state
  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  //event handler
  const handleClick = () => {
    setCount(count + 1);
  };
  //use Effect hooks enables handling side effects like fetching data
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });

  //! create a list
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Date" },
    { id: 4, name: "Cherry" },
    { id: 5, name: "Elderberry" },
  ];

  //State for holding form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  //form handler for input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //form handling for submitting
  const handleSubmit = (event) => {
    event.preventDefault();
    // send some data to a server or perform some action
  };

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Contact() {
    return <h2>Contact</h2>;
  }

  return (
    //<> are react fragments
    <>
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<About />}></Route>
          <Route path="/" element={<Contact />}></Route>
        </Routes>
      </Router>

      <div className="container">
        <h1>Hello Dexx</h1>
        <h2>My First React App</h2>
        <CustomButton label={"New Button"} borderColor={"brown"} />
        <Greetigs name="Dwayne" />

        <h3>This is use state </h3>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Add +</button>
        <button onClick={() => setCount(count - 1)}>Minus -</button>
        <p>You clicked {count} times</p>

        <CheckGreetigs isLoggedIn={isLoggedIn} />
        {
          // ? = if : = else
          isLoggedIn ? (
            <button onClick={handleLogoutClick}>Logout</button>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )
        }

        <h2>Fruit List & Keys</h2>
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>
              {index + 1}.{item.name}
            </li>
          ))}
        </ul>

        <h2>Simple Form</h2>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">
              Name:
              <input type="text" name="name" id="" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="">
              Email:
              <input type="email" name="email" id="" onChange={handleChange} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
