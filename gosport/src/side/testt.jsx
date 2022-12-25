import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Testt extends Component {
    state = {  } 
    style1={
        'background-color':'red'
    }
    style2={
        'background-color':'blue'
    }
    style3={
        'background-color':'black'
    }
    render() { 
        return (
            <div>
            <h1>test</h1>
            <div className='d-flex'>
                <div className='col' style={this.style1}>123</div>
                <div className='col' style={this.style2}>456</div>
                <div className='col' style={this.style3}>789</div>
            </div>
            </div>
        );
    }
}
 
export default Testt;