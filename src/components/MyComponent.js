// class component
// fuction component

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponet extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Hoi dan IT", age: 30 },
            { id: 2, name: "Eric", age: 16 },
            { id: 3, name: "Hary Pham", age: 32 },
        ]
    }

    // JSX
    render() {
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        );
    }
}

export default MyComponet;