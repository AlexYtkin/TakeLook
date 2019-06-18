import React from 'react';
import './../../../style.css';
import { Modal, Form, InputGroup, Col, Button} from 'react-bootstrap';

const MakePlaceModal = (props) => {
  return(
      <Modal className="make_place_modal" {...props}>
        <Modal.Header closeButton>
          <Modal.Title>
            Бронирование
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col}>
              <Form.Label controlId="formBasicEmail">Email<span style={{color: "red"}}>*</span></Form.Label>
              <Form.Control
                  placeholder="Введите электронную почту"
                  type="email"
                  required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Имя<span style={{color: "red"}}>*</span></Form.Label>
              <Form.Control
                  placeholder="Введите имя"
                  type="text"
                  required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Фамилия<span style={{color: "red"}}>*</span></Form.Label>
              <Form.Control
                  placeholder="Введите фамилию"
                  type="text"
                  required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Телефон<span style={{color: "red"}}>*</span></Form.Label>
              <Form.Control
                  placeholder="Введите телефон"
                  type="text"
                  required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Данные карты<span style={{color: "red"}}>*</span></Form.Label>
              <Form.Control
                  placeholder="Номер карты"
                  type="text"
                  required
              />
              <InputGroup>
                <Form.Control
                    placeholder="Срок действия"
                    type="text"
                    required
                />
                <Form.Control
                    placeholder="CVV"
                    type="text"
                    required
                />
              </InputGroup>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check
                    variant="danger"
                    type="checkbox"
                    label=" Я согласен с пользовательским соглашением и публичной офертой" />
              </Form.Group>
            </Form.Group>
            <Button variant="danger" type="submit" className="make_button">
              Забронировать
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
  )
}
export default MakePlaceModal;
