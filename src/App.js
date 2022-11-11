import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav/Nav';
import AppRoute from './AppRoute';
import FormInput from './Components/FormInput/FormInput';
import Background from './Assets/Images/background.jpg'

function App() {
  return (
    <div className="App bg-dark">
      <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', height: '100vh' }} className='bg-opacity-50'>
        <div className="container">
          <h1 className="text-center fw-bold pt-5">What&apos;s the plan for today?</h1>
          <FormInput />
          <Nav />
          <AppRoute />
        </div>
        </div>
    </div>
  );
}

export default App;
