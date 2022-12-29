import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Testt extends Component {
    state = {
        a: <option value="">西屯區</option>,
        b: <option value="">南屯區</option>,
        c: <option value="">北屯區</option>,
        chun: '1',
        bae: '2',
        kaoh: '3'
    }
    change2 = (e) => {
        if (e.target.value === this.state.chun) {
            console.log("台中");
            let newstate = { ...this.state };
            newstate.a = <option value="">西屯區</option>;
            newstate.b = <option value="">南屯區</option>;
            newstate.c = <option value="">北屯區</option>;
            this.setState(newstate);
        } else if (e.target.value === this.state.bae) {
            console.log("台北");
            let newstate = { ...this.state };
            newstate.a = <option value="">大安區</option>;
            newstate.b = <option value="">士林區</option>;
            newstate.c = '';
            this.setState(newstate);
        } else if (e.target.value === this.state.kaoh) {
            console.log("高雄");
            let newstate = { ...this.state };
            newstate.a = <option value="">大社區</option>;
            newstate.b = <option value="">三民區</option>;
            newstate.c = '';
            this.setState(newstate);
        }

    }
    render() {
        return (
            <div>
                <h1>test</h1>
                <input type="date" />
                <div>
                    <select name="" id="" onChange={(e)=>this.change2(e)}>
                        <option value={this.state.chun}>台中市</option>
                        <option value={this.state.bae}>台北市</option>
                        <option value={this.state.kaoh}>高雄市</option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        {this.state.a}
                        {this.state.b}
                        {this.state.c}
                    </select>
                </div>
            </div>
        );
    }
}

export default Testt;