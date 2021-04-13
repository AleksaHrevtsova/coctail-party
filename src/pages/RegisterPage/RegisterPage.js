import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import operations from '../../redux/auth/operations'
import selectors from '../../redux/auth/selectors'

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.myRegister({ ...this.state })
    this.setState({ name: '', email: '', password: '' })
  }
  render() {
    console.log(this.props.isAuth)
    const { handleChange, handleSubmit } = this
    const { name, email, password } = this.state
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    )
  }
}
const mapStateToProps = (store) => ({
  isAuth: selectors.isAuthenticated(store),
})
const mapDispatchToProps = {
  myRegister: operations.register,
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)