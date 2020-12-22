import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/content/Content";
import Dialogs from "./components/dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/news/News";

const friends = [
  { name: "Sussana Ortega", id: "01" },
  { name: "Jared Leto", id: "02" },
  { name: "Robert Smith", id: "03" },
  { name: "Nataniela Mutti", id: "04" },
];

const massages = [
  {
    txt:
      " Laborum, molestias voluptates ducimus eligendi perspiciatis ab est adipisci mollitia ea itaque ipsam, cupiditate necessitatibus quo deserunt?",
    id: "01",
  },
  {
    txt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam officiis dolorem eos.",
    id: "02",
  },
  {
    txt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ex quidem cupiditate explicabo, architecto reiciendis illo dolorum expedita eius voluptatum beatae quibusdam et.",
    id: "03",
  },
  {
    txt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe debitis impedit ex nobis. Pariatur similique ut qui.",
    id: "04",
  },
  {
    txt:
      "Voluptas, quas doloribus? Illum quis aspernatur cumque inventore a voluptatibus dicta, est reiciendis libero aut corporis perspiciatis laudantium maiores neque quasi nam doloribus laboriosam, repellendus fuga deserunt.",
    id: "05",
  },
  {
    txt:
      "Vero aliquam eveniet aspernatur. Numquam consequuntur dolores cumque sint!",
    id: "06",
  },
  {
    txt:
      " Ipsam quis officiis doloribus, quod corrupti voluptatibus commodi obcaecati, quia ut aut hic deserunt fuga amet impedit sunt neque numquam harum temporibus eligendi. ",
    id: "07",
  },
  {
    txt:
      "Saepe ut deserunt earum voluptatum, odit, aliquid iste odio explicabo pariatur ipsum consequatur eos cum minus obcaecati delectus temporibus.",
    id: "08",
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Route path="/profile">
          <Content />
        </Route>
        <Route path="/dialogs">
          <Dialogs data={friends} massages={massages} />
        </Route>
        <Route path="/news">
          <News />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
