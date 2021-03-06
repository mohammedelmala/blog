import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

class UserHeader extends React.Component {


    componentDidMount() {
        //this.props.fetchUser(this.props.userId);
    }

    render() {

        const { user } = this.props;

        if (!user) {
            return null;
        }
        //console.log(user.name);

        return (
            <div className="header">
                {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, myProps) => {
    return {
        user: state.users.find((user) => user.id === myProps.userId)
    }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);