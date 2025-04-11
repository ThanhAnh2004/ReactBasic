import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowListUsers: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })

    }

    render() {
        //console.log(this.props)
        const { listUser } = this.props // Object 
        // const listUsr = this.props.listUser
        // console.log(listUser)
        return (
            <div>

                <div>
                    <span onClick={() => this.handleShowHide()}>
                        {this.state.isShowListUsers === true ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUsers &&
                    <div>
                        {listUser.map((user) => {
                            //console.log(user);
                            return (

                                <div key={user.id} className={user.age > 19 ? "green" : " red"}>
                                    <div>My name is {user.name}</div>
                                    <div>I'm {user.age}</div>
                                    <hr />
                                </div>
                            )

                        })}
                    </div>
                }
            </div>
        );
    }
}

export default DisplayInfor