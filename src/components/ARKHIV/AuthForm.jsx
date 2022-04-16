import React from "react";
import style from '../Auth/SignInForm.module.css'
import {Form, Input, Button, Checkbox} from "antd";
import {NavLink} from "react-router-dom";

const AuthForm = (props) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div className={style.signinform}>
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 10}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <NavLink to={"/"+props.refer} >
                    <Button type="" htmlType="submit">
                        {props.formText}
                    </Button>
                </NavLink>
            </Form.Item>
        </Form>
    </div>
}

export default AuthForm;