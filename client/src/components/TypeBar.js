import React, { useContext } from 'react'
import { Context } from '..';
import {observer} from "mobx-react-lite";
import { ListGroup } from 'react-bootstrap';

function TypeBar() {
    const {device} = useContext(Context)
  return (
    <ListGroup>
        {device._types.map(type => 
           <ListGroup.Item
           style={{cursor: 'pointer'}}
           key={type.id}
           onClick={() => device.setSelectedType(type)}
           active={type.id === device.selectedType.id}
           >
                {type.name}
           </ListGroup.Item> )}
  </ListGroup>
  );
}

export default observer(TypeBar);