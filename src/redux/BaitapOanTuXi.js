const stateDefault = {
    arrBet: [
        { id: 'keo', img: './img/btOanTuXi/keo.png', bet: false },
        { id: 'bua', img: './img/btOanTuXi/bua.png', bet: true },
        { id: 'bao', img: './img/btOanTuXi/bao.png', bet: false }
    ],
    result: "Winner!!",
    win: 0,
    totalPlay: 0,
    computer: { id: 'keo', img: './img/btOanTuXi/keo.png' }

}

const OanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'PICK': {
            let arrBetUpdate = [...state.arrBet];
            arrBetUpdate = arrBetUpdate.map((item, index) => {
                if (item.id === action.idBet) {
                    return { ...item, bet: true }
                }
                return { ...item, bet: false }
            })

            state.arrBet = arrBetUpdate;
            return { ...state }
        }
        case 'RANDOM': {

            let randomNumber = Math.floor(Math.random() * 3);
            let randomPick = state.arrBet[randomNumber]

            state.computer = randomPick

            return { ...state }
        }
        case 'END': {
            let player = state.arrBet.find(item => item.bet === true);
            let computer = state.computer;

            switch (player.id) {
                case 'keo':
                    if (computer.id === 'keo') {
                        state.result = 'DRAW !!';
                    } else if (computer.id === 'bua') {
                        state.result = 'Loser !!';
                    } else {
                        state.result = 'Winner !!';
                        state.win +=1;

                    };
                    break;


                case 'bua':
                    if (computer.id === 'bua') {
                        state.result = 'DRAW !!';
                    } else if (computer.id === 'bao') {
                        state.result = 'Loser !!';
                    } else {
                        state.result = 'Winner !!';
                        state.win +=1;

                    };
                    break;

                case 'bao':
                    if (computer.id === 'bao') {
                        state.result = 'DRAW !!';
                    } else if (computer.id === 'keo') {
                        state.result = 'Loser !!';
                    } else {
                        state.result = 'Winner !!';
                        state.win +=1;

                    };break;
                    
                    default:  state.result = 'Loser !!';
                  
            }
            state.totalPlay+=1;
        }
        return { ...state };
        default: return { ...state }

    }
}

export default OanTuXiReducer
