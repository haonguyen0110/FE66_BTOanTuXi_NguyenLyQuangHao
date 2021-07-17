import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                    <div className="display-4 text-warning" style={{fontWeight:900}}> {this.props.result}</div>
                    <div className="display-4 text-success"> Win:
                     <span className="text-warning">{this.props.win}</span>
                     </div>
                    <div className="display-4 text-success"> Total Play:
                    <span className="text-warning">{this.props.totalPlay}</span>
                     </div>
            </div>
        )
    }
}

const mapStateToProp = state =>{
    return {
        result:state.OanTuXiReducer.result ,
        win:state.OanTuXiReducer.win ,
        totalPlay:state.OanTuXiReducer.totalPlay  ,
    }
}

export default connect(mapStateToProp)(KetQuaTroChoi)