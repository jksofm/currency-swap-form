import Icon from "@ant-design/icons/lib/components/Icon";

const SVGComponent = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1756_5849)">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3375 5L6 7.32564V16.1995L11.7615 18.2674V9.32L17.9909 7.02477L12.3375 5Z" fill="#FFC13D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2305 9.57522V14.4296L17.9934 16.4939L17.9908 7.44531L12.2305 9.57522Z" fill="#E69C00"/>
    </g>
    <defs>
    <clipPath id="clip0_1756_5849">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
);

export const BNEO = () => {
  return <Icon component={SVGComponent} />;
};
