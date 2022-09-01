import { Outlet, NavLink } from "react-router-dom";
import { Container, Header, Logo, Link, Footer } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        
        <NavLink to="/">
          <Logo>
              <span role="img" aria-label="computer icon"> 
                <img src="./images/flower-color.jpg" alt="" width="20px"/> 
              </span>{" "}
            <h4 className="appName" style={{marginLeft: '5px'}}>Моя квіточка</h4> 
          </Logo>
        </NavLink>
          
       
      
        <nav>
          <Link to="/">Головна</Link>
          <Link to="/about">Про нас</Link>
          <Link to="/products">Портфоліо</Link>
          <Link to="/gallery">Мої роботи</Link>
          <Link to="/posts">Відгуки</Link>
        </nav>
      </Header>
      <Outlet />
      <Footer> <
        div> All Rights Reserved 2022</div>
      </Footer>
    </Container>
  );
};
