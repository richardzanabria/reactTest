import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './layouts/Home';
import Payment from './layouts/Payment/Payment';
import NoPage from './layouts/NoPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="shipping" element={<Payment initStage={0} />} />
          <Route path="checkout" element={<Payment initStage={1} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
