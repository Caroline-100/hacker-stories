// import logo from "./logo.svg";
import "./App.css";

function greeting (title) {
  return title
}
const title = "React";
const welcome = {
  greeting:'Hey ',
  title : title,
}
function App() {
  return (
    <div>
      <h1>Hello World {title}</h1>
      <label
      htmlFor='search'>Search :
      </label>
        <input id='search' type='text'
        />
        <h1>
          {welcome.greeting} {welcome.title} {greeting('Caroline')}
        </h1>
    </div>
  );
}

export default App;
