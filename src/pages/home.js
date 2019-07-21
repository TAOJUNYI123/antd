import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Home extends Component {
    static  propTypes = {
        history: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                首页  
            </div>
        );
    }
}

export default Home;
