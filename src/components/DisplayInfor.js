import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

// class DisplayInfor extends React.Component {

//     state = {
//         isShowListUsers: true
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowListUsers: !this.state.isShowListUsers
//         })

//     }

//     render() {
//         //console.log(this.props)
//         const { listUser } = this.props // Object 
//         // const listUsr = this.props.listUser
//         // console.log(listUser)
//         return (
//             <div className="display-infor-container">
//                 <img src={logo} alt="logo" />
//                 <div>
//                     <span onClick={() => this.handleShowHide()}>
//                         {this.state.isShowListUsers === true ? "Hide list users" : "Show list users"}
//                     </span>
//                 </div>
//                 {this.state.isShowListUsers &&
//                     <div>
//                         {listUser.map((user) => {
//                             //console.log(user);
//                             return (

//                                 <div key={user.id} className={user.age > 19 ? "green" : " red"}>
//                                     <div>My name is {user.name}</div>
//                                     <div>I'm {user.age}</div>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     <hr />
//                                 </div>

//                             )

//                         })}
//                     </div>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props // Object 
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    //     this.state = {
    //         isShowHideListUser : true
    //     }

    const handleShowHideListUser = () => {
        // this.setState({
        //     isShowHideListUser: true
        // })
        setShowHideListUser(!isShowHideListUser);
    }

    return (
        <div className="display-infor-container">
            <img src={logo} alt="logo" />
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user" : "Show list user"}
                </span>
            </div>

            {isShowHideListUser &&
                <>
                    {listUser.map((user) => {
                        //console.log(user);
                        return (

                            <div key={user.id} className={user.age > 19 ? "green" : " red"}>
                                <div>My name is {user.name}</div>
                                <div>I'm {user.age}</div>
                                <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                <hr />
                            </div>

                        )

                    })}
                </>
            }
        </div>
    );

}

export default DisplayInfor