import styled from "@emotion/styled"
export default function Navbar(){

    const Nav = styled.nav`
      background: #fff;
      min-height: 80px;
      width: 100%;
      position: fixed;
      z-index: 1;
      top: 0;

     

    `
    const NavItem  = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
    
 

    `
    const Button = styled.button`
     background: #6E4B4C;
color: #fff;
padding: 15px 5px;
margin: 0;
outline: none;
border-radius: 5px;
border: none;
font-size: 15px;
font-family: 'Poppins';
font-weight: 600;
      
      `
      const Logo = styled.h1`
        font-weight: 600;
        
      `


    return(
        <Nav>
<NavItem>
         <div>
          <Logo>Addis Music</Logo>
         </div>
         <div>
          <Button>Dashboard</Button>
         </div>
  
</NavItem>

        </Nav>
    )
}