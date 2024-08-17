import * as React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Container, Row, Col } from "reactstrap";
import TextField from '@mui/material/TextField';  
import '../../styles/date-time.css'

export default function DateTime() {
    const [startDate, setStartDate] = useState(dayjs());
    const [ setEndDate] = useState(dayjs());

    const now = dayjs();
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container>
                <Row>
                    <Col lg='6' md='4' sm='2'>
                        <DateTimePicker className= "date-time"
                            label="Fecha y Hora de Recogida"
                            name="startDateTime"
                            onChange={(date) => setStartDate(date)}
                            minDateTime={now}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Col>

                    <Col lg='6' md='4' sm='2'>
                        <DateTimePicker className= "date-time"
                            label="Fecha y Hora de Devolucion"
                            name="startDateTime"
                            onChange={(date) => setEndDate(date)}
                            minDateTime={startDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Col>
                </Row>
            </Container>
        </LocalizationProvider>
    );
}
