import Icon from "@ant-design/icons/lib/components/Icon";

const SVGComponent = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12.5" r="12" fill="#ECEFF0"/>
<path d="M11.9979 4L11.8887 4.37185V15.1622L11.9979 15.2714L16.9964 12.3107L11.9979 4Z" fill="#333333"/>
<path d="M11.9985 4L7 12.3107L11.9985 15.2714V10.0341V4Z" fill="#8C8C8C"/>
<path d="M11.999 16.9009L11.9375 16.9761V20.8198L11.999 20.9999L17.0005 13.9418L11.999 16.9009Z" fill="#333333"/>
<path d="M11.9985 20.9999V16.9009L7 13.9418L11.9985 20.9999Z" fill="#8C8C8C"/>
<path d="M11.998 15.2714L16.9965 12.3108L11.998 10.0342V15.2714Z" fill="#141414"/>
<path d="M7 12.3108L11.9984 15.2714V10.0342L7 12.3108Z" fill="#383838"/>
</svg>

);

export const ETH = () => {
  return <Icon component={SVGComponent} />;
};
