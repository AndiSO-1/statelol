import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import login from './login';
import App from '../App';
import Login from './login';

test('loads login', async() =>{
  render(<Login/>);
  const container = document.getElementById("app");
  const loginButton = document.getElementById("btnLogin");
  const ForgotPassword = document.getElementById("ForgotPassword");
  expect(container).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(ForgotPassword).toBeInTheDocument();

  //oui

});
