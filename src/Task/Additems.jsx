

// import React, { Component } from "react";

// class AddItems extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: "", 
//       items: []
//     };
//   }

//   handleAddItems = (e) => {
//     this.setState({ show: e.target.value }); 
//   };

//   handleAdd = () => {
//     // if (this.state.show.trim() !== "") { 
//       this.setState((prevState) => ({
//         items: [...prevState.items, prevState.show], 
//         show: "" 
//       }));
//     // }
//   };

//   render() {
//     return (
//       <>
//         <h1>Add Items:</h1>
//         <input
//           type="text"
//           placeholder="Add items"
//           value={this.state.show} 
//           onChange={this.handleAddItems}
//         />
//         <button onClick={this.handleAdd}>Add</button>
//         <div>
//           {this.state.items.map((item, index) => ( 
//             <div key={index}>{item}</div>
//           ))}
//         </div>
//       </>
//     );
//   }
// }

// export default AddItems;


import React, { Component } from "react";

class AddItems extends Component{

    constructor() {
        super()
        this.state = {
            text: "",
            items: []
        }
    }

    handelChange = (e) => {
        this.setState({
            text: e.target.value
        })

    }

    handleadd = () => {
        this.setState({
            items: [...this.state.items, this.state.text]
        })

    }
    render() {
        return (
            <>
                <input
                    type="text"
                    placeholder="additems"
                    onChange={this.handelChange}
                />

                <button onClick={this.handleadd}>Add</button>

                <div>
                    {this.state.items.map((items, index) => (
                        <>
                            <div key={index}>{items}</div>
                        </>

                    ))}
                </div>
            </>
        )
    }

}

export default AddItems;