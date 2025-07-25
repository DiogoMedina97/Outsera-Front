import { Row, Col } from "react-bootstrap";

import { PageCard } from "@shared/components";

import {
  TableMaxMinWin, TableMultipleWinners, TableTopStudios, TableWinnersByYear,
} from "./components";

// --------------------------------------------------

const Dashboard = () => (
  <>
    <Row>
      <Col className="mb-3" xl={6}>
        <PageCard title="List years with multiple winners">
          <TableMultipleWinners />
        </PageCard>
      </Col>
      <Col className="mb-3" xl={6}>
        <PageCard title="Top 3 studios with winners">
          <TableTopStudios />
        </PageCard>
      </Col>
    </Row>
    <Row>
      <Col className="mb-3" xl={6}>
        <PageCard title="Producers with longest and shortest interval between wins">
          <TableMaxMinWin />
        </PageCard>
      </Col>
      <Col className="mb-3" xl={6}>
        <PageCard title="List movie winners by year">
          <TableWinnersByYear />
        </PageCard>
      </Col>
    </Row>
  </>
);

// --------------------------------------------------

export default Dashboard;
