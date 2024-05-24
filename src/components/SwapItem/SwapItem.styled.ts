import { Form, Typography } from "antd";
import styled from "styled-components";

const {Text} = Typography
const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color:#f8f8f8;
padding: 20px;
border-radius: 8px;
`

const NumberText = styled(Text)`
font-size: 28px;
font-weight: bold;
color : "#333"

`
const FormItemWrapper = styled(Form.Item)`

width: 130px;

`

const OptionWrapper = styled.div`
display: flex;
align-items: center;
gap: 12px;

`

export default {
    Container,
    NumberText,
    OptionWrapper,
    FormItemWrapper
}