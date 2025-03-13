// components/Stack.tsx
interface StackProps {
    children: React.ReactNode;
    direction?: 'horizontal' | 'vertical';
    gap?: string;
    className?: string;
  }
  
  const Stack: React.FC<StackProps> = ({ children, direction = 'vertical', gap = "0", className}) => {
    const style: React.CSSProperties = {
      display: 'flex',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      gap: gap,
    };
  
    return <div className={className} style={style}>{children}</div>;
  };
  
  export default Stack;