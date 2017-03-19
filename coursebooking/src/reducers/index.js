//Combine all reducers here  toi build the Store of the application...
//Store is just one big javascript object which is the whole application's State or Data...
import {combineReducers} from 'redux';
import CourseReducer from './reducer-courses';
import ActiveCourseReducer from './reducer-active-course';

const allReducers = combineReducers({
    courses:CourseReducer,
    activeCourse: ActiveCourseReducer
});

export default allReducers
