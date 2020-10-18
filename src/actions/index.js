import jsonPlaceHolder from "../apis/jsonPlaceholder";
import _ from "lodash";


export const fetchPostsAndUsers = () => async (dispatch, getStat) => {
    console.log("about fetching posts");
    await dispatch(fetchPosts());
    console.log("fetched posts");
    _.chain(getStat().posts).map("userId").uniq().forEach((id) => dispatch(fetchUser(id))).value();

}

export const fetchPosts = () => {


    return async (dispatch) => {

        const response = await jsonPlaceHolder.get("/posts");
        //console.log(response.data.length);
        dispatch({ type: "FETCH_POSTS", payload: response.data });

    }



}


export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    console.log(response.data);
    dispatch({ type: "FETCH_USER", payload: response.data });

}

// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
// })