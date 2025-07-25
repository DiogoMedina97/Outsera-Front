import { Card } from "react-bootstrap";

// --------------------------------------------------

interface PageCardProps {
  readonly title: string;
  readonly children: Children;
}

const PageCard = ({ title, children }: PageCardProps) => (
  <Card className="border-0">
    <Card.Body className="shadow-sm">
      <h6>{title}</h6>
      {children}
    </Card.Body>
  </Card>
);

// --------------------------------------------------

export default PageCard;
