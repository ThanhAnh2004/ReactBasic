// class component
// fuction component

import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponet extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Hoi dan IT", age: 30 },
            { id: 2, name: "Eric", age: 16 },
            { id: 3, name: "Hary Pham", age: 32 },
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log("Check from parent ", userObj)
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter((item) => item.id !== userId);
        this.setState({
            listUser: listUserClone
        })
    }

    // JSX
    render() {
        //DRT: Don't repeat yourself

        return (
            <>
                <div className='a'>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /> <br />
                    <DisplayInfor
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className='b'></div>
            </>

        );
    }
}

export default MyComponet;