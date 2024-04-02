import React, { useState } from 'react';
import { BrowserRouter as Router, Route , Routes , Link} from 'react-router-dom';
// import { Switch } from 'react-router-dom'
import Navebar from './Components/Navebar.jsx';
import Footer from './Components/Footer.jsx';
import CSV_upload_page from './Components/Csv_page/CSV_upload_page.jsx';
import View_csv_page from './Components/Csv_page/View_csv_page.jsx';
import Visualized_data_page from './Components/Csv_page/Visualized_data_page.jsx';
import Introduction_page from './Components/Csv_page/Introduction_page.jsx';

function App() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <Router>
      <div className='h-[100vh] w-full bg-gradient-to-r from-lime-100 to-lime-800'>
        <Navebar />
        <Routes>
          <Route path="/" exact element={<Introduction_page/>} />
          <Route path="/page0" exact element={<CSV_upload_page/>} />
          <Route path="/page1" element={<View_csv_page/>} />
          <Route path="/page2" element={<Visualized_data_page/>} />
        </Routes>
        <Footer page={page} nextPage={nextPage} prevPage={prevPage} />
      </div>
    </Router>
  );
}

export default App;
