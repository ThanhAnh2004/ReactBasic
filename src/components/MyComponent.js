// class component
// fuction component

import React, { useEffect, useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

// class MyComponet extends React.Component {

// state = {
//     listUser: [
//         { id: 1, name: "Hoi dan IT", age: 30 },
//         { id: 2, name: "Eric", age: 16 },
//         { id: 3, name: "Hary Pham", age: 32 },
//     ]
// }

// handleAddNewUser = (userObj) => {
//     console.log("Check from parent ", userObj)
//     this.setState({
//         listUser: [userObj, ...this.state.listUser]
//     })
// }

// handleDeleteUser = (userId) => {
//     let listUserClone = this.state.listUser;
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//         listUser: listUserClone
//     })
// }

// // JSX
// render() {
//     //DRT: Don't repeat yourself

//     return (
//         <>
//             <div className='a'>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <br /> <br />
//                 <DisplayInfor
//                     listUser={this.state.listUser}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//             <div className='b'></div>
//         </>

//     );
// }
// }

const MyComponet = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Hoi dan IT", age: 30 },
            { id: 2, name: "Eric", age: 16 },
            { id: 3, name: "Hary Pham", age: 32 },
        ]
    )

    const handleAddNewUser = (userObj) => {
        console.log("Check from parent ", userObj)
        setListUsers([userObj, ...listUsers])
        // this.setState({
        //     listUser: [userObj, ...this.state.listUser]
        // })
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter((item) => item.id !== userId);
        setListUsers(listUsersClone);


        // let listUserClone = this.state.listUser;
        // listUserClone = listUserClone.filter((item) => item.id !== userId);
        // this.setState({
        //     listUser: listUserClone
        // })
    }
    console.log('>>Call me Render');
    useEffect(
        () => {
            if (listUsers.length === 0)
                alert('You deleted all users')
            setTimeout(() => { document.title = "Hoi Dan IT" }, 3000);
            console.log('>>Call me UseEffect');

        }, [listUsers]
    )
    return (
        <>
            <div className='a'>
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br /> <br />
                <DisplayInfor
                    listUser={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className='b'></div>
        </>
    )
}

export default MyComponet;