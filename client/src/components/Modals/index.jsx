import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import {authUser, createUser} from "../../redux/features/Auth";

import Alert from 'react-bootstrap/Alert'

const Modals = () => {
  const dispatch = useDispatch();
  const modalShow = useSelector((state) => state.auth.modalShow);
  const signing = useSelector(state => state.auth.signing)
  const error = useSelector(state=> state.auth.error)
  const token = useSelector(state => state.auth.token)
  const successSingUp = useSelector(state => state.auth.successSingUp)

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [changeModal, setChangeModal] = useState(false);

  const handleChangeLogin = (ev) => {
    setLogin(ev.target.value);
  };

  const handleChangePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = () => {
    dispatch(createUser(login, password));
    setLogin("");
    setPassword("");
  };

  const handleAuth = async () => {
    await dispatch(authUser(login, password));
    if (token){
      dispatch({ type: "modalShow/changeFalse" })
    }
    setLogin("");
    setPassword("");
  };

  const handleChangeModal = () => {
    setChangeModal(!changeModal);
    dispatch({type: 'auth/reloadError'})
  };

  const handleClose = () => dispatch({ type: "modalShow/changeFalse" });

  return (
    <>
      {changeModal ?
        <Modal show={modalShow} onHide={handleClose} centered="true">
          <Modal.Header closeButton>
            <Modal.Title>Авторизация</Modal.Title>
          </Modal.Header>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{marginTop: "8px"}}>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Login"
              value={login}
              onChange={handleChangeLogin}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
            {error}
          </Form.Group>
          <Modal.Footer>
            <Button
              variant="secondary"
              disabled={signing}
              onClick={handleChangeModal}
            >
              Вы не зарегистрированы?
            </Button>
            <Button variant="primary" onClick={handleAuth}>
              Авторизоваться
            </Button>
          </Modal.Footer>
        </Modal>
        : //==========================================================================================================
        <Modal show={modalShow} onHide={handleClose} centered="true">
          <Modal.Header closeButton>
            <Modal.Title>Регистрация</Modal.Title>
          </Modal.Header>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{marginTop: "8px"}}>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Login"
              value={login}
              onChange={handleChangeLogin}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
            {error && <Alert style={{marginTop: '7px'}} variant='danger'>{error}</Alert>}
            {successSingUp && <Alert style={{marginTop: '7px'}} variant='success'>Вы успешно зарегистрировались</Alert>}
          </Form.Group>
          <Modal.Footer>
            <Button
              variant="secondary"
              disabled={signing}
              onClick={handleChangeModal}
            >
              Вы уже зарегистрированы?
            </Button>
            <Button variant="primary" onClick={login !== '' && password !== '' && handleSubmit}>
              Зарегистрироваться
            </Button>
          </Modal.Footer>
        </Modal>
      }

    </>
  );
};

export default Modals;
