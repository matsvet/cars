import React from "react";
import {connect} from "react-redux";
import NotesPage from "./NotesPage";

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NotesPage);

export default NewsPageContainer;