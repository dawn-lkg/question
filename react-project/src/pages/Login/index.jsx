import { Card, Button, Checkbox, Form, Input } from "antd";
import "./index.scss"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [form]=Form.useForm();
    const onFinish = (values) => {
        console.log(values);
        console.log('Success:', values);
        if (values.username === 'admin' && values.password === '123456') {
             dispatch({ type: 'LOGIN', payload: values });
             localStorage.setItem('userData', JSON.stringify(values));
             form.resetFields();
           } else {
             alert('请输入正确账号密码');
           }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login">
            <Card className="Card">
                <h1>登录 </h1>
                <Form
                    name="basic"
                    className="form"
                    form={form}
                    style={{
                        maxWidth: 1000,
                    }}
                   validateTrigger={[]}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                    className="input_item"
                        name="username"
                        
                        rules={[
                            {
                                required: true,
                                message: '请输入你的用户名!',
                            },{
                                max:6,
                                message:"用户名最长6位"
                            },{
                                pattern:/^(?:\d+|[a-zA-Z]+|[a-zA-Z0-9]+)$/,
                                message:"用户名只能为纯数字，纯英文字母或者数字英文组合"
                            },
                        ]}
                    >
                        <Input placeholder="请输入用户名!" />
                    </Form.Item>

                    <Form.Item
                        className="input_item"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '',
                                
                            },{min:6,message:"密码最少6位"},{
                                pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?]).+$/,
                                message:"至少包含1个大写字母，1个小写字母，1个数字，1个特殊字符"
                            }
                        ]}
                    >
                        <Input.Password placeholder="请输入密码!" />
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit" size="large" style={{width:"100%"}}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
                <div className="form_footer">
                   <div className="left" onClick={ ()=> navigate('/forget')}>忘记密码</div>
                    <div className="right">没用账号？<div onClick={()=>navigate("/registry")}>快速注册</div></div>
                </div>
            </Card>
        </div>
    )
}
export default Login;