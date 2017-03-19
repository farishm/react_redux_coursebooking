import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCourse} from '../actions/index'


class CourseList extends Component {

    renderList() {
        return this.props.courses.map((course) => {
            return (
                <tr  key={course.id}>
                    <td onClick={() => this.props.selectCourse(course)}> {course.title}</td>
                    <td>{course.reference}</td>
                    <td>{course.duration}</td>
                    <td>{course.fees}</td>
                    <td>{course.status}</td>
                    <td>{course.location}</td>
                    <td>{course.totalplaces}</td>
                    <td>{course.availableplaces}</td>
                 </tr>
              
            );
        });
    }

    render() {
        return (

            <div className="panel panel-default panel-table">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col col-xs-7">
                            <label className="control-label">Course List - Click on the titles to view course details.</label>
                        </div>
                        <div className="col col-xs-3  text-left">
                            &nbsp;
                        </div>
                        <div className="col col-xs-2 text-right">
                            &nbsp;
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead style={{ backgroundcolor: 'lightgrey' }}>
                                <tr>
                                    <th>Title</th>
                                    <th>Reference</th>
                                    <th>Duration - Weeks</th>
                                    <th>Fees - £</th>
                                    <th>Status</th>
                                    <th>Location</th>
                                    <th>Total Places</th>
                                    <th>Available Places</th>  
                                </tr>
                            </thead>
                            <tbody>                               
                                {this.renderList()}       
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectCourse: selectCourse}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(CourseList);

 