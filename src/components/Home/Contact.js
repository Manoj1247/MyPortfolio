import { Form, Input, Button, Checkbox } from "antd";
function Contact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Ping me!</h2>
          <p>
            Any Questions about my line of work, guidance or even just to get to
            know me? Send me a message or get in touch with me in any one of
            those mediums on the footer :)
          </p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="Email"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="Phone"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input placeholder="Phone" />
          </Form.Item>
          <Form.Item name={["user", "introduction"]}>
            <Input.TextArea placeholder="Message" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Contact;
