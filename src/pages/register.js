import React, { Component } from 'react'
import '../login.css';
import { Form, Input,message, Button } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';

class Register extends Component {
    //propType是用来帮你检测参数类型是不是指定格式的
    // contextTypes是用来检测上下文参数的
    //注：不推荐用context
    static propTypes = {
        history: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    handleSubmit = e => {
        const that = this;
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values);
                if(values.confirm != values.password){
                    message.error('密码与确认密码不相同，请重新输入！');
                }
                axios.get('https://www.apiopen.top/createUser', {
                    params: {
                        key: '26eafefc8e9e8593950f2d50c0e6f35a',
                        phone: values.nickname,
                        passwd: values.password
                    }
                })
                    .then(function (response) {
                        console.log(response.data);
                        if (!response.data.data) {
                            message.error(response.data.msg);
                        } else {
                            message.success('注册成功！');
                            that.props.history.goBack();
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div className="login">
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="昵称">
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: '请输入昵称!' }],
                        })(<Input />)
                        }
                    </Form.Item>
                    <Form.Item label="密码">
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请设置密码!',
                                },{
                                    pattern:/^[0-9A-Za-z]{6,12}$/,
                                    message:'密码必须为6~12位字母或数字组成'
                                }

                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="确认密码">
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: '请确认密码!',
                                }
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button block type="primary" htmlType="submit"> 注册 </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create({ name: 'normal_login' })(Register);