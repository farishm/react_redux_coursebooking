export const selectCourse = (course) => { 
    console.log("You clicked on course: ", course.title);   
    return {
        type: 'COURSE_SELECTED',
        payload: course
    }
};
