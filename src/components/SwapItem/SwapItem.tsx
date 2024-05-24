import { Form, Select } from "antd";
import S from "./SwapItem.styled"


interface SelectItem {
    
        value: number;
        label: string;
        icon: () => JSX.Element;
    
}
interface SwapItemProps {
    selectOptions : SelectItem[]
    onChange:  () => void
    name: string
    messageError : string
    label: string
    amount : number | null
}
export function SwapItem({selectOptions,onChange,name,messageError,label,amount}:SwapItemProps) {
    const {Option} = Select;
  return (
    <Form.Item label={label}>
      
      <S.Container>
        <S.NumberText>{amount? amount : '0'}</S.NumberText>
      <S.FormItemWrapper   name={name} rules={[{ required: true , message: messageError }]}>
       
        <Select  onChange={onChange} >
        {selectOptions.map((option)=>{
          const Icon = option.icon;
          
          return (
            <Option  value={option.value} key={option.label} label={option.label}>
              <S.OptionWrapper>
              {Icon && <Icon />} 
              {option.label} 
             
              </S.OptionWrapper>
            </Option>
          )
         })}
        </Select>
      </S.FormItemWrapper>

      </S.Container>
      </Form.Item>
  )
}
