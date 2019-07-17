import React, {Component} from 'react'
import '../login.css';
/*在之前的版本之中，我们可以通过React.PropTypes这个API访问React内置的
一些类型来检查props，在15.5.0版本中，这一API被独立成了一个新的包 prop-types*/
import PropTypes from 'prop-types';

class Register extends Component {
    //propType是用来帮你检测参数类型是不是指定格式的
    // contextTypes是用来检测上下文参数的
    //注：不推荐用context
    static  propTypes = {
        history: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        console.log(222)
    }

    render() {
        return (
            <div className="login">
                注册
            </div>
        );
    }
}

export default Register;
