import React from "react";
import { connect } from "react-redux";

import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";


class PostsList extends React.Component {


    componentDidMount() {
        this.props.fetchPostsAndUsers();

    }



    renderList() {

        return this.props.posts.map((p, index) => {

            return (

                <div className="item" key={index}>

                    <i className="large middle icon aligned user" />

                    <div className="content">

                        <div className="description">

                            <h2>{p.title}</h2>
                            <p>{p.body}</p>

                        </div>
                        <UserHeader userId={p.userId} />
                    </div>

                </div>

            );
        }

        )


    }


    render() {
        console.log(this.props.posts.length);

        return (
            <div className="ui relaxed divided list" >
                { this.renderList()}
            </div >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostsList);