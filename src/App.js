import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard'
import apiTribePad from './api/apiTribePad';


function App() {

  const [jobs, setNewJobs] = useState([]);
  const [jobsTitle, setNewTitle] = useState([]);
  const [jobsRef, setNewRef] = useState([]);

  const getJobs = (term) => {
    return apiTribePad.get("https://bbc.uat-tribepad.com/members/oauth/api/job/search.json", {
      params: { keywords: term },
    });
  };


  const onSearchSubmit = (term) => {
    console.log("in app.js onSubmit term is ", term)
    getJobs(term).then((res) => {
      console.log('Job title: ', res.data.jobs.job[0].job_title);
      console.log('Reference is: ', res.data.jobs.job[0].reference);
      let jobtitle = res.data.jobs.job[0].job_title;
      let jobreference = res.data.jobs.job[0].reference;


      let newJobs = [
        ...jobs
      ]

      let newTitle = [
        ...jobtitle
      ]

      let newRef = [
        ...jobreference
      ]

      //need to pass these new pins in state as a prop to Mainborad where we will render them
      setNewJobs(newJobs);
      setNewTitle(newTitle)
      setNewRef(newRef)
    })

  }

  // onSearchSubmit("engineering");


  return (
    <div className="App">
      <Header onSubmit={onSearchSubmit} />
      <Mainboard jobs={jobs} jobsTitle={jobsTitle} jobsRef={jobsRef} />
    </div>
  );
}

export default App;
