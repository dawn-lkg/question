import { Button, Card, Form, Input,message } from "antd"
import "./index.scss"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"

function Forget(){
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()
    const [phoneNumber,setPhoneNumber]=useState('');
    const [code,setCode]=useState('');
    const onFinish=(value)=>{
        if(code=='123456'){
            messageApi.success("找回密码成功");
        }else{
            message.error("找回密码失败")
        }
    }
    return (
        <div className="forget">
        <Card className="card">
            <h1>找回密码</h1>
            {contextHolder}
            <Form className="form" validateTrigger={[]} onFinish={onFinish}>
                <Form.Item name="phoneNumber" rules={[
                            { required: true, message: '请输入手机号码' },
                            { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式不正确' },
                        ]}>
                    <Input placeholder="请输入手机号" onChange={(e)=>setPhoneNumber(e.target.value)}></Input>
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
                    <Input placeholder="请输入验证码" onChange={(e)=>setCode(e.target.value)} rules={[{required:true,message:"请输入验证码"}]}></Input>
                    <Button type="primary" className="btnCode" disabled={phoneNumber==''}>获取验证码</Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="button" >确定</Button>
                </Form.Item>
                <div className="form_footer">
                        <div className="left" onClick={()=>navigate("/login")}>立刻登录</div>
                        <div className="right">已有账号?<div onClick={()=>navigate("/registry")}>快速注册</div></div>
                </div>
            </Form>
        </Card>
        </div>
    )
}
export default Forget;