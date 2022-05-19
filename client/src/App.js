import { Sidebar, Sidenavbar } from './components'
import './App.css';
import { OrderDetails } from './pages';
// import { Button } from 'antd';
// import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/*<Button type="primary">Primary Button</Button>*/}
      <Sidenavbar />
      <OrderDetails/>
    </div>
  );
}

export default App;
