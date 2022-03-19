import React from "react";
import {connect} from "react-redux";
import NewsPage from "./NewsPage";

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPage);

export default NewsPageContainer;