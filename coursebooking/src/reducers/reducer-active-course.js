export default function (state = null, action) {
    switch (action.type) {
        case 'COURSE_SELECTED':
            return action.payload;           
        default:
            return state
    }   
}
