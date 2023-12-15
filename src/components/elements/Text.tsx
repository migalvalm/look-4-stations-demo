interface TextProps {
  children: any;
  className: string;
}

export const Text: React.FC<TextProps> = ({ children, className }) => {
  return <p className={`text-left ${className}`}>{children}</p>;
};
 
export default Text;