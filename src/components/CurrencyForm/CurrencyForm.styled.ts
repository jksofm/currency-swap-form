import { Button, Form } from "antd";
import styled from "styled-components";

const SwapWrapper = styled.div`
cursor: pointer;
background: #f0f2f5;
border-radius: 8px;
max-width: 40px;
margin: 20px auto 10px;
display: flex!important;
align-items: center;
justify-content: center;
padding: 12px;
&>span{
    display: block!important;
}
`

const AmountWrapper = styled(Form.Item)`
 margin: 20px 0!important;

`

const ExChangeRateWrapper = styled.div`

background: #f0f2f5;
padding: 8px;
border-radius: 8px;
margin: 20px 0!important;

`

const ConvertedAmout = styled(Form.Item)`

background-color: #f0f2f5;
padding: 8px;
border-radius: 8px;
`

const ConvertBtn = styled(Button)`
 width: 100%!important;
 padding: 30px!important;
 display: flex;
 align-items: center;
 border-radius: 8px;
 justify-content: center;
 span{
    display: block!important;
 }
`

export default  {
    SwapWrapper,
    AmountWrapper,
    ExChangeRateWrapper,
    ConvertedAmout,
    ConvertBtn
}