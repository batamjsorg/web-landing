import Link from 'next/link'

const Menu = ({href, label}) => (
  <span>
    <Link href={href}><a>{label}</a></Link>
    <style jsx>{`
        {
          padding: 6px 4px;
        }
      `}</style>
  </span>
)

export default ({children}) => (
  <div>
    <header>
      <div className="header scrolled">
        <div className="header__content">
          <a href="/">
            <img src="../static/batamjs.svg" alt="" width="180" />
          </a>
          <nav>
            <Menu href={'/'} label={'HOME'} />
            {
              ['events', 'contact'].map(m => (
                <Menu
                  key={m}
                  href={"/" + m}
                  label={m.toUpperCase()}
                />
              ))
            }
          </nav>
          <div className="header__right">
            <a href="">
              <img src="../static/facebook-outline-icon.png" />
            </a>
            <a href="">
              <img src="../static/github-outline-icon.png" />
            </a>
          </div>
        </div>
      </div>
    </header> 
    <main>
      <div>
        {children}
      </div>
    </main>
    <style global jsx>{`
      body {
        background-image:url('../static/bg-heroku-trans.png');
        background-repeat:no-repeat;
        background-position:0 0;
        background-opacity:0.2;
        background-size:100% auto;
      }
    `}</style>
  </div>
)
