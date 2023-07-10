import { Button, Card, Form, Input,message} from "antd";
import "./index.scss"
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
function Registry() {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [phoneNumber,setPhoneNumber]=useState("");
    const [code,setCode]=useState("");
    const onFinish = (values) => {
        console.log(values);
        console.log(code);
        if (code=="123456") {
          console.log('注册成功');
          messageApi.success('注册成功！');
        } else {
          console.log('注册失败');
          messageApi.error("注册失败！");
        }
    }
    return (
        <div className="registry">
            {contextHolder}
            <Card className="card">
                <p>用户注册</p>
                <Form className="form" onFinish={onFinish} validateTrigger={[]}>
                    <Form.Item name="username" className="input_item" rules={[
                        {
                            required: true,
                            message: '请输入你的用户名!',
                        }, {
                            max: 6,
                            message: "用户名最长6位"
                        }, {
                            pattern: /^(?:\d+|[a-zA-Z]+|[a-zA-Z0-9]+)$/,
                            message: "用户名只能为纯数字，纯英文字母或者数字英文组合"
                        },
                    ]}>
                        <Input placeholder="请输入用户名"></Input>
                    </Form.Item>
                    <Form.Item name="phoneNumber"
                        rules={[
                            { required: true, message: '请输入手机号码' },
                            { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式不正确' },
                        ]}>
                        <Input placeholder="请输入手机号" onChange={(e)=>{setPhoneNumber(e.target.value);}}></Input>
                    </Form.Item>
                    <Form.Item name="code">
                        <Input placeholder="请输入验证码" value={code} onChange={(e)=>setCode(e.target.value)}></Input>
                        <Button className="btnCode" type="primary" disabled={phoneNumber==''}>获取验证码</Button>
                    </Form.Item>
                    <Form.Item name="password" rules={[
                        {
                            required: true,
                            message: '密码不能为空',

                        }, { min: 6, message: "密码最少6位" }, {
                            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?]).+$/,
                            message: "至少包含1个大写字母，1个小写字母，1个数字，1个特殊字符"
                        }
                    ]}>
                        <Input.Password placeholder="请输入密码" ></Input.Password>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="button">立即注册</Button>
                    </Form.Item>
                    <div className="form_footer">
                        <div className="left" onClick={() => navigate("/forget")}>忘记密码</div>
                        <div className="right">已有账号?<div onClick={() => navigate("/login")}>马上登录</div></div>
                    </div>
            
                </Form>
           
            </Card>
        </div>
    )
}
export default Registry;