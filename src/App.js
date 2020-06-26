import React, {Component} from 'react';
import MyComponent from "./MyComponent";
import Say from "./Say";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

// const App = () => {
//
//
//     return (
//         <div>
//             <ScrollBox/>
//             <button onClick={() => ScrollBox.scrollToBottom()}>맨밑으로</button>
//         </div>
//     )
// }

class App extends Component {
    render() {
        return (
            // <div>
            //     <ScrollBox ref={(ref) => this.scrollBox = ref}/>
            //     <button onClick={()=>this.scrollBox.scrollToBottom()}>맨밑으로</button>
            // </div>
            <IterationSample/>
        );
    }

}

export default App;
