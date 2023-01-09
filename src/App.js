import './App.css';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form1 from './components/Form1';

function App() {
  return (
    <div class="row">
      <div class="col-lg-7 grid-margin stretch-card">
        <div class="card">
          <Control />

          <ListStudent />
        </div>
      </div>
        <Form1/>
    </div>
  );
}

export default App;
