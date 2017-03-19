import React from 'react';
import CourseList from '../containers/course-list';
import CourseDetails from '../containers/course-detail';


const App = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                    <CourseList />  
                    <CourseDetails />
            </div>
        </div>
    </div> 
);

export default App;


