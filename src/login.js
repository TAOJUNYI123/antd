import React, {Component} from 'react'
import './login.css';
import {Form, Icon, Input, Button, message} from 'antd';
import axios from 'axios';
/*在之前的版本之中，我们可以通过React.PropTypes这个API访问React内置的
一些类型来检查props，在15.5.0版本中，这一API被独立成了一个新的包 prop-types*/
import PropTypes from 'prop-types';

class Login extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    //调用登录接口
    login() {
        axios.get('https://www.apiopen.top/login', {
            params: {
                key: '26eafefc8e9e8593950f2d50c0e6f35a',
                phone: this.state.username,
                passwd: this.state.password
            }
        })
            .then(function (response) {
                console.log(response.data);
                if (!response.data.data) {
                    message.error(response.data.msg);
                } else {
                    message.success('登录成功！');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //点击登录
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.setState({
                    username: values.username,
                    password: values.password
                }, () => {
                    this.login();
                })

            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <div className="login-form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <a href="" className='register'>还没有账号？立即注册</a>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        );
    }
}

// Login.contextTypes = {
//     router: PropTypes.object.isRequired
// }

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(Login);
export default WrappedNormalLoginForm;
