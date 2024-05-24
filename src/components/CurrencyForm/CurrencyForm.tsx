import  { useState } from 'react';
import { Form, Input } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import { currencyData } from '../../constants/exchangeRate';
import { SwapItem } from '../SwapItem';
import S from "./CurrencyForm.styled"


interface TableDataProps {
  fromCurrency: string;
  toCurrency: string;
  amount: number;

}
export const CurrencyForm = () => {
  const [form] = Form.useForm();
  const [convertedAmount, setConvertedAmount] = useState<null | number>(null);
  const [exchangeRate, setExchangeRate] = useState<null | number>(null);



  const computeExchangeRate = (fromCurrency: number, toCurrency: number,amount : number) => {
  

    if (fromCurrency && toCurrency) {
      const rate = fromCurrency / toCurrency;
    
      setConvertedAmount(rate*amount);
    }
  }

  const onFinish = (values:TableDataProps) => {
  
    computeExchangeRate(Number(values.fromCurrency), Number(values.toCurrency),values.amount);
  };

  const onSwap = () => {
    const fromCurrency = form.getFieldValue('fromCurrency');
    const toCurrency = form.getFieldValue('toCurrency');
    if(toCurrency && fromCurrency) {
    form.setFieldsValue({
      fromCurrency: toCurrency,
      toCurrency: fromCurrency,
    });
    setExchangeRate(toCurrency / fromCurrency);
    if(form.getFieldValue('amount')) {
      computeExchangeRate(Number(toCurrency), Number(fromCurrency),form.getFieldValue('amount'));
    }
   
  }}
   const selectOptions = currencyData.map((token)=>{
    return {
      value: token.price,
      label: token.currency,
      icon : token.icon
    }
   })

   const onChange = ()=>{
       const fromCurrency = form.getFieldValue('fromCurrency');
       const toCurrency = form.getFieldValue('toCurrency');
       if(fromCurrency && toCurrency) {
        setExchangeRate(fromCurrency / toCurrency);
       }
   }
  return (
    <Form  form={form} layout="vertical" onFinish={onFinish}>
     <SwapItem amount={form.getFieldValue('amount')} name='fromCurrency' onChange={onChange} messageError='fromCurrency is required' label="From" selectOptions={selectOptions} />


        <S.SwapWrapper onClick={onSwap}>
        <SwapOutlined />

        </S.SwapWrapper>


   <SwapItem amount={convertedAmount} name='toCurrency' onChange={onChange} label="To" messageError='toCurrency is required' selectOptions={selectOptions} />

     
   
   

      <S.AmountWrapper rules={[{ required: true }]} name="amount" label="Amount">
          <Input type="number" />
        </S.AmountWrapper>

   {!!exchangeRate &&  <S.ExChangeRateWrapper>Exchange Rate : {exchangeRate}</ S.ExChangeRateWrapper>}
     


  

      
       
      <S.ConvertBtn type="default" htmlType="submit">Convert</S.ConvertBtn>
    </Form>
  );
}

