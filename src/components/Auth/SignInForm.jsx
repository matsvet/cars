import React, {useContext, useState} from "react";
import style from './SignInForm.module.css'
import {Form, Input, Button, Checkbox} from "antd";
import {NavLink} from "react-router-dom";
import {Context} from "../../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const SignInForm = () => {
    const {auth, firebaseApp} = useContext(Context)
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signInWithGoogle = async () => {
        const provider = new firebaseApp.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
    }
    const signWithEmail = async () => {
        await auth.signInWithEmailAndPassword(email, password)
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    if (user) {
        return <h1>Вы успешно вошли с помощью почты {user.email}</h1>
    }

    return <div className={style.signinform}>
        <h1>Вход</h1>
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
                label="Почта"
                name="username"
                rules={[{required: true, message: 'Введите почту!'}]}
            >
                <Input onChange={(e) => setEmail(e.target.value)}/>
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{required: true, message: 'Введите пароль!'}]}
            >
                <Input.Password onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" onClick={signWithEmail}>
                    Подтвердить
                </Button>
                <Button type="" onClick={signInWithGoogle}>
                    Войти с помощью Google
                </Button>
                <div>
                    Ещё не зарегистрированы?
                    <NavLink to="/signup">
                        <Button type="" htmlType="submit">
                            Зарегистрироваться
                        </Button>
                    </NavLink>
                </div>
            </Form.Item>
        </Form>
    </div>
}

export default SignInForm;