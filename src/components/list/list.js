import ListGroup from 'react-bootstrap/ListGroup';
import {AccordionContext} from '../dashboard/dashboard'
import { useContext } from 'react';


const List = (props) => {
  const accordionData = useContext(AccordionContext);
  console.log('data is ', accordionData);

  return (
    <ListGroup>
      <ListGroup.Item>{accordionData.value}</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
}

export default List;