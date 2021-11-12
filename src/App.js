import React from "react";
import "./App.css";

function greeting(title) {
  return title;
}
const title = "React";
const welcome = {
  greeting: "Hey ",
  title: title,
};

const App = () => {
  const stories = [
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
    {
      title: "Eloquent JavaScript",
      url: "https://eloquentjavascript.net/",
      author: "Marijn Haverbeke",
      num_comments: 3,
      points: 3,
      objectID: 2,
    },
    {
      title: "Twitter Bootsrap 4",
      url: "https://www.syncfusion.com/ebooks/twitterbootstrap4-succinctly/the-grids-the-grids-the-beautiful-grids",
      author: "Peter Shaw",
      num_comments: 2,
      points: 4,
      objectID: 3,
    },
  ];
  const [searchTerm, setsearchTerm] = React.useState('React');
  const handleSearch = (event) => {
    setsearchTerm(event.target.value)
  }
  const searchStories = stories.filter((story) => {

    return story.title.toLowerCase()
      .includes(searchTerm.toLowerCase())
  })
  return (
    <div>
      <h1>Hello World {title}</h1>
      <Search onSearch={handleSearch} searchTerm={searchTerm} search={searchTerm} />
      <h1>
        {welcome.greeting} {welcome.title} {greeting("Caroline")}
      </h1>
      <hr />
      <List list={searchStories} />
    </div>
  );
}
const Search = ({ onSearch, search, searchTerm }) => {

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input onChange={onSearch} id='search' type='text' value={search} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  )

}

const List = ({ list }) =>
  list.map(item => <ItemList key={item.objectID} item={item}/>);
  
const ItemList = ({item}) => (
      <div>
        <LinkTitle url={item.url} title={item.title}/>
        <NumofCommentAndPoints comments={item.num_comments} points={item.points}/>
      </div>
  )
// child of List return Link using props
function LinkTitle(props) {
  return (
    <span>
      <a href={props.url}>{props.title}</a>
    </span>)
}
// // // child of List return num of comments and Points
function NumofCommentAndPoints(props) {
  return (
    <ul>
      <li> num comments : {props.comments}</li>
      <li> num points : {props.points}</li>
    </ul>
  )
}

class Developper {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  getName() {
    return `${this.lastName} ${this.firstName}`
  }
}
//instanciation
const robin = new Developper('Robin', 'Wood');
// const denis = new Developper('Denis','Ben');

console.log(robin.firstName, robin.lastName);

const user = {
  firstName: 'Robin',
  pet: {
    name: 'trixy',
  }
}
// without desconstruction
// const firstName = user.firstName;
// const pet = user.pet.name;

// vs 

// with desconstruction
const { firstName,
  pet: { name,
  },
} = user

console.log(firstName + ' has a pet called ' + name);


export default App;

//What happens if your return null instead of the JSX?
// I think, no error in the page. I found an empty page
