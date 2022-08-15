import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import List from '../list/list';


const MyTab = (props) => {
  return (
    <Tabs
      defaultActiveKey="employee"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="employee" title="Employee">
        <List accordionData={props.accordionData} />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <List accordionData={props.accordionData} />
      </Tab>
    </Tabs>
  );
}

export default MyTab;