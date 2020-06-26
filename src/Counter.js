import React, {Component} from "react";

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h1>바뀌지 않는 값 : {fixedNumber}</h1>
                <button onClick={() => {

                    // this.setState(prev => ({
                    //     number: prev.number + 1
                    // }));

                    // this.setState({number: number + 1}, ()=>{
                    //     console.log('setState 실행', this.state)
                    // })

                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
