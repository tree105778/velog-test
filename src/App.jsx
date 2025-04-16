import { redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
 

export async function loader() {
  return redirect('/trending');
}
function App() {
  return (
    <>
      <Header />
     </>
  );
}

export default App;