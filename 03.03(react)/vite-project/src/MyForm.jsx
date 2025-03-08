import { Button, Form, Input } from 'antd';

export default function MyForm() {
    const [form] = Form.useForm()
    const onFish = (values)=> console.log("Form values:", values);

    
    return (
        <Form
        form={form}
        onFish={onFish}
        name='login'
        initialValues={{remember: true}}
        >

            <Form.Item label="Username" name={'username'} rules={[{required: true, message:'Please write'}]}>
                <Input />

            </Form.Item>

            <Form.Item>
            <Input.Password />

            </Form.Item>
            <Form.Item>

            <Button > Submit </Button>
            </Form.Item>
        </Form>
    );
}