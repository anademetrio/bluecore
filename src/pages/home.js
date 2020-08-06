import React, { Component } from 'react';
import Page1 from '../components/page1_component';
import Page2 from '../components/page2_component';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display_page_1: true
        }
    }
    prevPage(){
        this.setState({display_page_1: true});
    }
    nextPage(){
        this.setState({display_page_1: false})
    }
    render() {
        return (
            <div>
                <div className="container">
                    { this.state.display_page_1 ? <Page1/> : <Page2/> }  
                </div>
                <footer>
                    <div className="pagination">
                        <button onClick={() => this.prevPage()}>1</button>
                        <button onClick={() => this.nextPage()}>2</button>
                    </div>
                </footer>
            </div>
        );
    }
}
