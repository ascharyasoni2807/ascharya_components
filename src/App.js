import AccordionParent from "./accordion/Accordion";
import "./App.css";
// import Calculator from "./calculator/Calculator";
import Carousel from "./caraousel/Caraousel";
import Autocomplete from "./debounce_autocomplete/AutoComplete";
import Dropdown from "./dropdown/DropDown";
import UserList from "./fetch_data/FetchData";
import UserForm from "./forms/Forms";
import MyLazyLoadingComponent from "./lazy_component/LazyComponent";
import LoadOnScroll from "./load_scroll/LoadScroll";
import ModalButton from "./modal/Modal";
import PaginationList from "./pagination/PaginationList";
import StarRating from "./rating/StarRatings";
import ReplyComment from "./reply_comment/ReplyCommnet";
import Stopwatch from "./stopwatch/Stopwatch";
import TabButtons from "./tab_buttons/TabButtons";
import Game from "./tic_tac_toe/TicTacToe";
import ToDoList from "./todo/ToDoList";

function App() {
  return (
    <div className="App">
      <div className="App">
        <StarRating />
        <UserForm />
        <Carousel />
        <AccordionParent />
        <ToDoList />
        <ReplyComment />
        <ModalButton />
        <Game />
        <Dropdown />
        <Autocomplete />
        <Stopwatch />
        <TabButtons />
        <PaginationList />
        <UserList />
        <MyLazyLoadingComponent />

        <LoadOnScroll />
      </div>
    </div>
  );
}

export default App;
