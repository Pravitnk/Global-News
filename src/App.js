import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes
} from "react-router-dom";

const App =()=> {
  const pagesize = 9;
  const [Progress, setProgress] = useState(0);


    return (
      <div>
        <Router>
          <Navbar />

          <LoadingBar
            color='#f11946'
            height={3}
            Progress={Progress}
          // onLoaderFinished={() => setProgress(0)}
          />

          {/* <News setProgress={setProgress} pagesize={pagesize} country="in" category="sports" /> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route exact path="/category/general" element={<News setProgress={setProgress} key="general" pagesize={pagesize} country="in" category="general" />}> </Route>
            <Route exact path="/category/business" element={<News setProgress={setProgress} key="business" pagesize={pagesize} country="in" category="business" />}> </Route>
            <Route exact path="/category/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize={pagesize} country="in" category="entertainment" />}> </Route>
            <Route exact path="/category/health" element={<News setProgress={setProgress} key="health" pagesize={pagesize} country="in" category="health" />}> </Route>
            <Route exact path="/category/science" element={<News setProgress={setProgress} key="science" pagesize={pagesize} country="in" category="science" />}> </Route>
            <Route exact path="/category/sports" element={<News setProgress={setProgress} key="sports" pagesize={pagesize} country="in" category="sports" />}> </Route>
            <Route exact path="/category/technology" element={<News setProgress={setProgress} key="technology" pagesize={pagesize} country="in" category="technology" />}> </Route>

          </Routes>
        </Router>
      </div>
    )
  
}

export default App;
