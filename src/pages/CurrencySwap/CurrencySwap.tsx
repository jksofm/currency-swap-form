
import { CurrencyForm } from "../../components"
import S from "./CurrencySwap.styled"
import {  Row } from 'antd'

export function CurrencySwap() {

  return (
    <S.Container>
     <Row style={{height: '100%'}}>
       
            <S.TitleWrapper span={12}>
            <S.TitleText  level={1}>Effortlessly Exchange Currency with Our User-Friendly Form</S.TitleText>


            </S.TitleWrapper>

       
        <S.FormWrapper span={12}>
            <S.TitleFormWrapper level={2}>Currency Swap</S.TitleFormWrapper>
     <CurrencyForm />

        </S.FormWrapper>

     </Row>
    </S.Container>
  )
}
