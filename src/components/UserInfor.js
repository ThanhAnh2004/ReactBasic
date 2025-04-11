import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Thanh Anh',
        age: 21,
        address: 'Lam Dong'
    };


    handleOnChangeName(event) {
        this.setState({
            name: event.target.value,
        })
    }
    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault() //Avoid reload page
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    <button>Submit</button>

                    <label>Your age </label>
                    <input
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default UserInfor
