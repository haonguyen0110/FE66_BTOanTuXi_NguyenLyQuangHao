import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    
    render() {
        
        return (
            <div className="text-center player">
                
                <div className="think">
                <img  className="w-50 mt-3" src={this.props.computer.img} alt="..."></img>
      
                </div>
                  <div className="speech-bubble"></div>
                  <img src="./img/btOanTuXi/playerComputer.png" alt="..." style={{width:200,height:200}}/>
            </div>
          )
    }
}

const mapStateToProp = state =>{
    return {
        computer: state.OanTuXiReducer.computer
    }
}

export default connect(mapStateToProp)(Computer)