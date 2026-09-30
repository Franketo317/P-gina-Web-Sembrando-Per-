const fs = require('fs');

const cssPath = '/home/danna/Documentos/S1/P-gina-Web-Sembrando-Per-/src/pages/BlogPage.css';
let css = fs.readFileSync(cssPath, 'utf8');

const headerCSS = `
/* =========================
   HEADER
========================= */

.blog-header {
  position: relative;
  z-index: 5;
  height: 113px;
  display: flex;
  align-items: center;
  background: #02734d;
}

.blog-header__brand {
  position: absolute;
  inset: 0 auto 0 0;
  width: 222px;
  display: grid;
  place-items: center;
  background: #e8f5e9;
}

.blog-header__brand img {
  width: 132px;
  height: 104px;
  object-fit: contain;
}

.blog-navigation {
  height: 100%;
  display: flex;
  align-items: center;
  gap: clamp(18px, 2.95vw, 57px);
  margin-left: 17.5%;
}

.blog-navigation a {
  position: relative;
  color: #fff;
  font-family: var(--font-display);
  font-size: 32px;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
}

.blog-navigation__active img {
  position: absolute;
  right: 0;
  bottom: -12px;
  left: 0;
  width: 90px;
  height: 2px;
}

.blog-header__language {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-left: auto;
  padding: 0 22px;
  color: #fff;
  font-size: 17px;
  white-space: nowrap;
}

.blog-header__language span:first-child {
  font-size: 23px;
}

.blog-header__donate,
.blog-navigation__donate {
  min-width: 195px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9a22f;
  color: #fff;
  font-family: var(--font-display);
  font-size: 36px;
  text-decoration: none;
}

.blog-navigation__donate {
  display: none !important;
}

.blog-header__menu-toggle {
  display: none;
}

@media (max-width: 1000px) {
  .blog-navigation {
    gap: 18px;
    margin-left: 20%;
  }

  .blog-navigation a {
    font-size: 23px;
  }

  .blog-header__language {
    display: none;
  }
}

@media (max-width: 760px) {
  .blog-header {
    height: 82px;
    justify-content: flex-end;
  }

  .blog-header__brand {
    width: 112px;
  }

  .blog-header__brand img {
    width: 88px;
    height: 74px;
  }

  .blog-header__menu-toggle {
    position: absolute;
    z-index: 6;
    top: 22px;
    right: 17px;
    width: 40px;
    height: 38px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 5px;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .blog-header__menu-toggle span {
    width: 28px;
    height: 2px;
    background: #fff;
  }

  .blog-navigation {
    position: absolute;
    top: 82px;
    right: 0;
    left: 0;
    height: auto;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin: 0;
    padding: 10px 22px 20px;
    background: #006445;
  }

  .blog-navigation--open {
    display: flex;
  }

  .blog-navigation a {
    padding: 14px 0;
    border-bottom: 1px solid rgb(255 255 255 / 20%);
    font-size: 25px;
  }

  .blog-navigation__active img {
    display: none;
  }

  .blog-navigation__donate {
    min-width: 0;
    height: 46px;
    display: flex !important;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 12px;
    padding: 0 16px !important;
    border: 0 !important;
    border-radius: 3px;
    font-size: 22px !important;
  }

  .blog-navigation__donate img {
    width: 16px;
    height: 16px;
  }

  .blog-header__donate {
    display: none;
  }
}
`;

// Also replace .blog-masthead to have background image
css = css.replace('.blog-masthead {', '.blog-masthead {\n  background-color: #02734d;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  isolation: isolate;\n');
// We remove background: #f3f4f1;
css = css.replace('  background: #f3f4f1;\n', '');
// And make sure h1 has white color
css = css.replace('.blog-masthead h1 {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 0;\n  font-family: var(--font-league);\n  font-size: 64px;\n  font-weight: 700;\n  line-height: 1.05;\n}', '.blog-masthead h1 {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  margin: 0;\n  color: #fff;\n  font-family: var(--font-league);\n  font-size: 64px;\n  font-weight: 700;\n  line-height: 1.05;\n}');
// And change text align of h1 in .blog-masthead h1

// add headerCSS at the top after blog-page
css = css.replace('.blog-page {\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n  background: #ffffff;\n  color: #191c1d;\n  font-family: var(--font-avenir);\n}', '.blog-page {\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n  background: #ffffff;\n  color: #191c1d;\n  font-family: var(--font-avenir);\n}\n' + headerCSS);

fs.writeFileSync(cssPath, css);
console.log('CSS patched!');
