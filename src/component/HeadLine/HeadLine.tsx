import './HeadLine.css';  // Import file CSS

interface HeadlineProps {
  children: React.ReactNode;
}

const HeadLine: React.FC<HeadlineProps> = ({ children }) => {
  return (
    <div className="headline">
      {children}
    </div>
  );
}

export default HeadLine;
