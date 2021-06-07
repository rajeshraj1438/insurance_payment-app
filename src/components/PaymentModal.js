import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRefPayment } from "../redux/PaymentReducer";

export function PaymentModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefPayment({}));
  };

  return (
    <Modal show={state.payment.refemp.id} onHide={() => updateRefObj()}>
      <Modal.Header closeButton>
        <Modal.Title>Payment Status {state.payment.success}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>Amount- {state.payment.refemp.amount}</ListGroup.Item>
          <ListGroup.Item>Date - {state.payment.refemp.date}</ListGroup.Item>

          {/* <ListGroup.Item>Password - {"*********"}</ListGroup.Item>
          <ListGroup.Item>Email - {"******@gmail.com"}</ListGroup.Item>
          <ListGroup.Item>
            Mobile - {state.payment.refemp.mobile}
          </ListGroup.Item> */}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => updateRefObj()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
