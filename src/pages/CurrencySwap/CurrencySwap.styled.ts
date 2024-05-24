import { Col, Typography } from "antd";
import styled from "styled-components";
const {Title} = Typography

const Container = styled.div`
height: 100vh;



`

const TitleText= styled(Title)`
color: white!important;
letter-spacing: 2px

`
const TitleWrapper = styled(Col)`
height: 100%;
background-image: url('https://i.pinimg.com/564x/a0/21/55/a0215503fdf14269746280bda7137d9c.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
padding: 0 100px;
`
const FormWrapper = styled(Col)`
padding: 80px 100px;
`
const TitleFormWrapper = styled(Title)`
text-align: center;
margin-bottom: 40px!important;

`

export default {
    Container,
    TitleWrapper,
    FormWrapper,
    TitleText,
    TitleFormWrapper
}