import Icon from "@ant-design/icons/lib/components/Icon";

const SVGComponent = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#E50571"/>
    <path d="M17.3186 15.6694C16.0463 15.6694 15.0168 14.638 15.0168 13.3676V9.9207H17.9856V7.91579H15.0168V4.59998L12.742 5.81449V7.91579H8.42761C5.42024 7.91579 4.62984 11.5401 6.9432 12.8895L9.29512 14.4703C9.81562 14.8559 9.60356 15.6656 8.871 15.6656H5.67085V17.6897H8.871C11.8976 17.6897 12.6688 14.0655 10.3554 12.716L8.02277 11.1352C7.50226 10.7497 7.69504 9.9207 8.42761 9.9207H12.742V13.3946C12.742 16.0164 14.5541 17.6917 17.2916 17.6917H17.9856V15.6694H17.3186Z" fill="white"/>
    </svg>
    
    
);

export const STRD = () => {
  return <Icon component={SVGComponent} />;
};
