import React from "react";

class DisplayInfor extends React.Component {

    render() {
        //console.log(this.props)
        const { listUser } = this.props // Object 
        // const listUsr = this.props.listUser
        // console.log(listUser)
        return (
            <div>
                {listUser.map((user) => {
                    //   console.log(user);

                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>I'm {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default DisplayInfor