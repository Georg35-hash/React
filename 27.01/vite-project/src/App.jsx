import BasicForm from './components/BasicForm';
import ControlledInput from './components/ControlledInput';
import EmailForm from './components/EmailForm';
import SimpleForm from './components/SimpleForm';
import WatchForm from './components/WatchForm';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <ControlledInput /><hr />
      <BasicForm /><hr />
      <SimpleForm /><hr />
      <WatchForm /><hr />
      <EmailForm /><hr />
    </div>
  );
}

export default App;
