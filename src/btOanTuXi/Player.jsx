import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
    render() {
        console.log(this.props.arrBet);
        return (
            <div className="player ">
                <div className="think">
                    <img className="w-50 mt-3" src={this.props.arrBet.find(item=>item.bet).img} alt="..."></img>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./img/btOanTuXi/player.png" alt="player" />
                <div className="row">
                    {this.props.arrBet.map((item,index)=>{

                        let border ={};
                        if(item.bet){
                            border ={border:'3px solid red'}
                        }
                        return  <div className="col-4" key={index}>
                        <button style={border} className="btnItem" onClick={()=>{
                            this.props.Bet(item.id)
                        }}>
                            <img className="w-100" src={item.img}alt={item.id} />
                        </button>
    
                    </div>
                    })}
                   
                   
                </div>
            </div>
        )
    }
}

const mapStateToProp = state =>{
    return {
        arrBet:state.OanTuXiReducer.arrBet
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        Bet:(idBet)=>{
            dispatch({
                type:'PICK',
                idBet
            })
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(Player)