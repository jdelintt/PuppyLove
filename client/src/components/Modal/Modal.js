import React from "react"
import { ModalDialog, ModalHeader, ModalTitle, ModalBody, Button, ModalFooter } from "react-bootstrap"

function Modal() {
    return(
<ModalDialog>
  <ModalHeader closeButton>
    <ModalTitle>Modal title</ModalTitle>
  </ModalHeader>

  <ModalBody>
    <p>Modal body text goes here.</p>
  </ModalBody>

  <ModalFooter>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </ModalFooter>
</ModalDialog>

    )   
}

export default Modal;