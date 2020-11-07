import './App.scss';
import Header from './Components/Header/Header';
import UserPageContainer from './Components/UserPage/UserPageContainer';
import TicketPageContainer from './Components/TicketPage/TicketPageContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <UserPageContainer />
        <TicketPageContainer />
      </div>
    </div>
  );
}

export default App;
