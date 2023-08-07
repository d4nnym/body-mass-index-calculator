import {svgLogo} from '../../data/mediadata'

export default function Header() {
  return (
    <>
      <header className="body-container">
        <nav className="navbar mt-9 mt-5-md">
        <a href="#" className="brand" aria-label="home page logo">
          <svgLogo.SvgComponent />
        </a>
        </nav>
      </header>
    </>
  );
}
