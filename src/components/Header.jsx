import logo from '../assets/logo.jpg';

export default function Header({ cartClick }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>reactfood</h1>
      </div>
      <button onClick={cartClick}>Cart (0)</button>
    </header>
  );
}
