import React, { useContext } from 'react'
import { Context } from '..';
import {observer} from "mobx-react-lite";
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';

function DeviceList() {
    const {device} = useContext(Context)
  return (
    <Row className="d-flex">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
  );
}

export default observer(DeviceList);