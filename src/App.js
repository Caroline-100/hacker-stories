import React from "react";
import "./App.css";

// building hook 
const useSemiPersistentState = (key, initialState) => {
  const [value, setvalue] = React.useState(localStorage.getItem(key) || initialState);
  console.log(localStorage.getItem(key));

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }
    , [value, key])

  return [value, setvalue]
}


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
  const [searchTerm, setsearchTerm] = useSemiPersistentState(
    'search'
    , 'React'
  );
  const handleSearch = event => {
    setsearchTerm(event.target.value)
  }
  const searchStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>

      <h1>Hello World {title}</h1>
      <InputWithLabel id="search" label='Search' value={searchTerm} onInputChange={handleSearch} />
      <Search onSearch={handleSearch} searchTerm={searchTerm} search={searchTerm} />
      <h1>
        {welcome.greeting} {welcome.title} {greeting("Caroline")}
      </h1>
      <hr />
      <List list={searchStories} />
    </>
  );
}
const InputWithLabel = ({ id, label, value, onInputChange, type }) => {
  return (

    <>
      <label htmlFor={id}>{label}</label>
      &nbsp;
      <input id={id} type={type} value={value} onChange={onInputChange}
      />
    </>
  )

}

const Search = ({ onSearch, search, searchTerm }) => {

  return (
    <>
      <label htmlFor="search" value={searchTerm}>Search: </label>
      <input onChange={onSearch} id='search' type='text' value={search} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </>
  )

}

const List = ({ list }) =>
  list.map(item => <ItemList key={item.objectID} item={item} />);

const ItemList = ({ item }) => (

  <>
    <LinkTitle url={item.url} title={item.title} />

    < NumofCommentAndPoints author={item.author} comments={item.num_comments} points={item.points} />
  </>
)
// child of List 
const LinkTitle = ({ url, title }) => {
  return (
    <span>
      <a href={url}>{title}</a>
    </span>)
}
// child of List 
const NumofCommentAndPoints = ({ author, comments: numberOfComments, points }) => {
  return (
    <ul>
      <li> author : {author}</li>
      <li> num comments : {numberOfComments}</li>
      <li> num points : {points}</li>
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

const profile = {
  firstName: 'Robin',
  lastName: 'Wood',
}
const address = {
  country: 'Island',
  city: 'Akureyri',
  code: '18433',
}

const user_2 = {
  ...profile,
  gender: 'male',
  ...address
}
console.log(user_2);
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
