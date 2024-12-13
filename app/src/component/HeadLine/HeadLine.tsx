import './HeadLine.css'; 

interface HeadlineProps {
  children: React.ReactNode;
}

const HeadLine: React.FC<HeadlineProps> = ({ children }) => {
  return (
    <div className="headline">
      <div className="line1">{children}</div>
    </div>
  );
}

export default HeadLine;
