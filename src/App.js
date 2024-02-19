import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './screens/Home';
import Payment from './screens/Payment/Payment';
import NoPage from './screens/NoPage';
import { useEffect } from "react";

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
