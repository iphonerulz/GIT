import React from 'react';
import './AddEvent.css';
import _ from "lodash";
import {  MDBRow, MDBCol, MDBIcon,  MDBInput, MDBBtn  } from "mdbreact";
import { Fragment } from "react";
import './Donate.css';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';


class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            time: '',
            place: '',
            description: '',
            errorMessage: ''
        };

        this.inputName = this.inputName.bind(this);
        this.inputDate = this.inputDate.bind(this);
        this.inputTime = this.inputTime.bind(this);
        this.inputPlace = this.inputPlace.bind(this);
        this.inputDescription = this.inputDescription.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isValidDate = this.isValidDate.bind(this);
        this.isValidTime = this.isValidTime.bind(this);
        this.alertMessage = this.alertMessage.bind(this);



    }


    addEvent() {
        const { name, date, time, place, description } = this.state;

        console.log("Submit ", {
            name,
            date,
            time,
            place,
            description
        })
        this.props.addNewEvent({
            name,
            date,
            time,
            place,
            description
        });
        const alert = this.alertMessage;
        alert();
    }

    inputName(event) {
        this.setState({
            ...this.state,
            name: event.target.value
        });
    }

    inputDate(event) {
        this.setState({
            ...this.state,
            date: event.target.value
        });
    }

    inputTime(event) {
        this.setState({
            ...this.state,
            time: event.target.value
        });
    }

    inputPlace(event) {
        this.setState({
            ...this.state,
            place: event.target.value
        });
    }


    inputDescription(event) {
        this.setState({
            ...this.state,
            description: event.target.value
        });
    }

    

    isValidTime(myTime) {
        let timeValue = myTime;
        if (timeValue === "" || timeValue.indexOf(":") < 0) {
            return false;
        }
        else {
            let sHours = timeValue.split(':')[0];
            let sMinutes = timeValue.split(':')[1];

            if (sHours === "" || isNaN(sHours) || parseInt(sHours) > 23) {
                return false;
            }
            if (sMinutes === "" || isNaN(sMinutes) || parseInt(sMinutes) > 59) {
                return false;
            }
        }
        return true;
    }

    isValidDate(dateString) {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
            return false;

        let parts = dateString.split("/");
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10);
        let year = parseInt(parts[2], 10);

        if (year < 2018 || year > 3000 || month === 0 || month > 12)
            return false;

        let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
            monthLength[1] = 29;

        return day > 0 && day <= monthLength[month - 1];
    }
    
    
    alertMessage=()=>{alert('The event has been created!')}



    handleSubmit() {

        let valid = true;

        const name = this.state.name;
        const date = this.state.date;
        const time = this.state.time;
        const place = this.state.place;
        const description = this.state.description;

        if (!name || !date || !time || !description || !place) {
            this.setState({
                ...this.state,
                errorMessage: "Please fill in all required fields to login."
            });
            valid = false;
        } else if (description.length > 150) {
            this.setState({
                ...this.state,
                errorMessage: "Your description is too long"
            });
            valid = false;
        } 
        else if (!this.isValidDate(date)) {
            this.setState({
                ...this.state,
                errorMessage: "Invalid date format"
            });
            valid = false;
        } 
        else if (!this.isValidTime(time)) {
            this.setState({
                ...this.state,
                errorMessage: "Invalid time format"
            });
            valid = false;
        }

        if (valid) {
            const add = this.addEvent;
            add();
        }


    }


    render() {

        const { errorMessage } = this.state.errorMessage;


        return (
            <div>
            <div className="add-event-container">
                <div className="add-event-title lead grey-text w-responsive text-center mx-auto mb-5" style={{  fontSize: 40, width: 'bold' }}><b>Create an event:</b></div>
                <hr/>

                
                {/* <div className="lead grey-text w-responsive text-center mx-auto mb-5">
                    Name: <input className="add-event-options" placeholder="Add a short, clear name" type='text'
                                 name='name'
                                 value={this.state.name} onChange={this.inputName} required/><br/>

                    Date: <input className="add-event-options" placeholder="DD/MM/YY" type='text' name='date'
                                 value={this.state.date} onChange={this.inputDate} required/><br/>
                    Time: <input className="add-event-options" placeholder="00:00" type='text' name='time'
                                 value={this.state.time} onChange={this.inputTime} required/><br/>
                    Location: <input className="add-event-options" placeholder="location" type='text' name='time'
                                 value={this.state.place} onChange={this.inputPlace} required/><br/>
                    Description: <input className="add-event-options description"
                                        placeholder="Tell people more about the event.."
                                        type='text'
                                        name='description'
                                        value={this.state.description} onChange={this.inputDescription} required/><br/>
                </div> */}
            <h1 className="h5 text-center mb-4">  </h1>
            <div>
                <span style={{color: "red"}} >{this.state.errorMessage}</span>
                </div>
            <MDBRow>
            
                <MDBCol md="6">
                    <form>

                        <div className="grey-text">
                            <MDBInput 
                                onChange={this.inputName}
                                label="Name"
                                icon="calendar-check"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            
                            
                            <MDBInput
                            onChange={this.inputDate}
<<<<<<< HEAD
                                label="DD/MM/YYYY"
=======
                                label="DD/MM/YY"
>>>>>>> 1170dbe06d8357237d788fb53572e6f436b385fa
                                icon="calendar-alt"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
<<<<<<< HEAD
                             <MDBInput
=======
                            <MDBInput
>>>>>>> 1170dbe06d8357237d788fb53572e6f436b385fa
                                onChange={this.inputTime}
                                label="00:00"
                                icon="clock"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                onChange={this.inputPlace}
                                label="Location"
                                icon="map-marked-alt"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                onChange={this.inputDescription}
                                type="textarea"
                                rows="3"
                                label="Description"
                                icon="pencil-alt"
                                success="right"
                            />
<<<<<<< HEAD
                           
=======
                            
>>>>>>> 1170dbe06d8357237d788fb53572e6f436b385fa
                        </div>
                        
                        </form>
                </MDBCol>
            </MDBRow>

        

                <hr/>
                <br/>
                {/* <div>
                    <button className="add-event-button" onClick={this.handleSubmit}>Add Event</button>
                </div> */}
                <Fragment>
                <MDBBtn outline color="secondary" onClick={this.handleSubmit}>
                     
                        
                    <MDBIcon icon="plus-square" className="mr-1" /> Create
                    </MDBBtn>
                </Fragment>
                <Fragment>
                <MDBBtn outline color="secondary" >
                     
                        <Link to="/events/">Back to Events </Link>
                     
                     </MDBBtn>
                     </Fragment>
                {/* <Link to="/events">
                               
                </Link> */}

            
            </div>
            <Footer/>
            </div>
        );
    }
}

export default AddEvent;