import './assets/css/App.css';
import Content from './components/Content';


const App = () => <Content />;

export default App;

/* <a
href="#home"
onClick={() => handlePageChange('Home')}
//*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
//sort of like an if statement
//assigning the class name based on what the current page is
className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
>
Home
</a> */

// import "./assets/css/App.css"

// function App(){
//   return (
//     <div className='App'>
//       <h1>Hello</h1>
//     </div>
//   )
// }
// export default App;