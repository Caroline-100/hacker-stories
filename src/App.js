// import logo from "./logo.svg";
import "./App.css";

function greeting(title) {
  return title;
}
const title = "React";
const welcome = {
  greeting: "Hey ",
  title: title,
};
//Render an array
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
// const arrayNumbers = [1,2,34,5,6];
const arrayNumbs = list.map(function (item) {
  return <li key={item.objectID}>{item.author}</li>;
});

function App() {
  return (
    <div>
      <h1>Hello World {title}</h1>
      <label htmlFor="search">Search :</label>
      <input id="search" type="text" />
      <h1>
        {welcome.greeting} {welcome.title} {greeting("Caroline")}
      </h1>
      <hr />
      <ul>{arrayNumbs}</ul>
      <ul>
        {list.map(function (item) {
          return <li key={item.objectID}>{item.num_comments}</li>;
        })}
      </ul>
      <hr />
      {list.map(function (item) {
        return (
          <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
