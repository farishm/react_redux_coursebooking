import React, {Component} from 'react';
import {connect} from 'react-redux';



class CourseDetail extends Component {
    render() {        
        if (!this.props.course) {
            return ( <div className="panel panel-default">
                <div className="panel-heading"> SELECT THE TITLE OF THE COURSE FROM THE LIST TO VIEW DESCRIPTION...</div>  
            </div>);
        }
        return (
            <div className="panel panel-default">
                <div className="panel-heading"> Course: {this.props.course.title} details</div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-12 text-left">
                            {this.props.course.description}
                        </div>
                        <div className="col-sm-12 text-left">
                            &nbsp;
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        course: state.activeCourse
    };
}

export default connect(mapStateToProps)(CourseDetail);


