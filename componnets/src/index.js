import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                        author = "Sam" 
                        timeAgo = "Today at 4:45PM"
                        content = "first content"
                        avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
                
            <ApprovalCard>
                <CommentDetail 
                    author = "Alex"
                    timeAgo = "Today at 2:00AM"
                    content = "second content"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author = "Jane"
                    timeAgo = "Today at 12:00AM"
                    content = "third content"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));