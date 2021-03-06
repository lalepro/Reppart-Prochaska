import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render() {
        if(!this.props.book){
            return <div>Select a Year to view that chapter of our life.</div>;
        }

        return (
            <div>
                <h3>Details for: {this.props.book.title}</h3>
                {/*<div>Title: {this.props.book.title}</div>*/}
                <div>Summary: {this.props.book.summary}</div>
                <div>Rating: {this.props.book.rating}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);