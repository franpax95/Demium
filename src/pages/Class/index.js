import React from 'react';
import ReactPlayer from 'react-player';

import Commentary from '../../components/Commentary';

import { MdArrowDropDown } from 'react-icons/md';

import './Class.css';

const Class = () => {


    return (
        <div className="Class">
            <div className="body">
                <div className="left">
                    <h1 className="title">
                        The table of number five
                    </h1>
                    <ReactPlayer url="https://www.youtube.com/watch?v=T6WCkz_GZYA" style={{ width: '100%', height: 'auto'}} />
                </div>
                <div className="right">
                    <div className="form-group">
                        <input type="text" placeholder="Leave a message..." />
                        <button>Publicate</button>
                    </div>
                    <div className="total">
                        4 comments
                    </div>
                    <div className="options">
                        <button className="active">
                            Comments
                            <MdArrowDropDown size="90px" />
                        </button>
                        <button>Contributions</button>
                    </div>
                    <Commentary 
                        name = 'Pedro Stone'
                        date = '2 days ago'
                        role = 'student'
                        message = 'I enjoyed a lot! This professor is good, too.'
                        likes = {8}
                    />
                    <hr />
                    <Commentary 
                        name = 'Illescas'
                        date = '10 days ago'
                        role = 'student'
                        message = 'I didnt understand... Can you repeat, please?'
                        likes = {'+1M'}
                    />
                    <hr />
                    <Commentary 
                        name = 'Rafa Las Heras'
                        date = '11 days ago'
                        role = 'professor'
                        message = 'I can explain better! Visit my tutorial instead of this. I use games :)'
                        likes = {0}
                    />
                    <hr />
                    <Commentary 
                        name = 'Juan Antonio'
                        date = '2 months ago'
                        role = 'student'
                        message = 'At last I learned to multiply 3 x 7!!! Thanks a lot!!!'
                        likes = {14}
                    />
                </div>
            </div>
        </div>
    );
}

export default Class;