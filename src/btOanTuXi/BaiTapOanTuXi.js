import React,{ Component } from 'react'
import './BaiTapOanTuXi.styles.css'
import Player from './Player'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import { connect } from 'react-redux'
class BaiTapOanTuXi extends Component {

    render() {

        return (
            <div className="gameOanTuXi">
              
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player/>
                    </div>
    
                    <div className="col-4">
                        <KetQuaTroChoi/>
                        <button onClick={()=>{
                            this.props.playGame()
                        }} className="btn btn-success p-3 mt-4 display-4" style={{fontWeight:900}}>Play Game</button>
                    </div>
    
                    <div className="col-4">
                    <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProp =(dispatch) =>{
    return{
        playGame: ()=>{
            let count=1;
            let randomComputerPick= setInterval(()=>{
                dispatch({
                    type: 'RANDOM'
                })
                count ++;
                if(count >=20){
                    clearInterval(randomComputerPick)
                    dispatch({
                        type:'END',
                    })
                }
            },100)
            
        }
    }
}

export default connect(null,mapDispatchToProp)(BaiTapOanTuXi)



