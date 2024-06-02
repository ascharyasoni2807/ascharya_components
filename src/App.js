import AccordionParent from "./accordion/Accordion";
import "./App.css";
import Carousel from "./caraousel/Caraousel";
import Autocomplete from "./debounce_autocomplete/AutoComplete";
import Dropdown from "./dropdown/DropDown";
import UserList from "./fetch_data/FetchData";
import MyLazyLoadingComponent from "./lazy_component/LazyComponent";
import LoadOnScroll from "./load_scroll/LoadScroll";
import ModalButton from "./modal/Modal";
import StarRating from "./rating/StarRatings";
import ReplyComment from "./reply_comment/ReplyCommnet";
import Stopwatch from "./stopwatch/Stopwatch";
import TabButtons from "./tab_buttons/TabButtons";
import ToDoList from "./todo/ToDoList";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Autocomplete />
        <Carousel />
        <StarRating />
        <Stopwatch />
        <ModalButton />
        <AccordionParent />
        <TabButtons />
        <ToDoList />
        <UserList />
        <ReplyComment />
        <MyLazyLoadingComponent />
        <Dropdown />
        <LoadOnScroll />
      </div>
    </div>
  );
}

export default App;
