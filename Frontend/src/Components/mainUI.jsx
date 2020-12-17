// import React from 'react'
// import ReactDOM from 'react-dom'
// import axios from "axios";

// const root = document.getElementById('root');

// class App extends React.Component {

//     state = {
//         location: "",
//         command: "",
//         output: "",
//         tab: true,
//         panel: true,
//     }

//     handleSubmit = () => {

//         const setting = {
//             method: "GET",
//             headers: { 'Content-Type': 'application/json' },
//         };

//         // http://localhost:5000/
//         // http://192.168.43.81:5000/
//         axios.get(`http://localhost:5000/run/?command=${this.state.command}&&location=${this.state.location}`, setting)
//             .then(res => {
//                 console.log(res.data);
//                 this.setState({ output: res.data.op.text });
//             })
//             .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <div className="main" >

//                 {/* <div className="container-md frm" >
//                     <input
//                         type="text"
//                         id="location"
//                         name="location"
//                         placeholder="Type Location"
//                         onChange={(e) => { this.setState({ location: e.target.value }) }}
//                     ></input>
//                     <button className="btn btn-success" onClick={() => this.handleSubmit()} >Run</button>
//                     <button className="btn btn-primary"
//                         onClick={() => this.setState({ output: "" })}>
//                         Clear
//                     </button>
//                 </div>

//                 <div className="container-md panel" >
//                     <nav className="nav" >
//                         <li className={this.state.panel ? "active-tab" : ""} onClick={this.setState({ tab: true })} >Cmd</li>
//                         <li className={this.state.panel ? "" : "active-tab"} onClick={this.setState({ tab: false })} >File editor</li>
//                     </nav>
//                     <div>
                        
//                     </div>
//                 </div> */}


//                 <div className="container-md op" ><pre> {this.state.output} </pre> </div>
//             </div>
//         );
//     }
// }


// ReactDOM.render(<App />, root);


// // {
// //     this.state.tab ?
// //         <textarea
// //             type="text"
// //             id="command"
// //             name="command"
// //             placeholder="Type Command"
// //             onChange={(e) => { this.setState({ command: e.target.value }) }}
// //             // onKeyPress={(e) => {
// //             //     if (e.key == "Enter" && !e.shiftKey) {
// //             //         this.handleSubmit();
// //             //         e.target.value = "";
// //             //     }
// //             // }}
// //             className="container-sm"
// //             rows={4}
// //         ></textarea> :
// //         <div>hi</div>
        
// // }