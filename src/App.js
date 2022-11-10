import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav/Nav';
import AppRoute from './AppRoute';
import FormInput from './Components/FormInput/FormInput';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-5 fw-bold">What&apos;s the plan for today?</h1>
        <FormInput />
        <Nav />
        <AppRoute />
      </div>
    </div>
  );
}

export default App;
