import styled from "@emotion/styled"
export default function Navbar(){

    const Nav = styled.nav`
      background: #fff;
      min-height: 70px;
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

     
      const Logo = styled.h1`
        font-weight: 600;
        font-size: 30px;
      
        
      `


    return(
        <Nav>
      <NavItem>
         <div>
          <Logo>
            <a href="/">Addis Music</a>
          </Logo>
         </div>
         <div>
          <button className="bg-accent px-3 py-2 mt-4 text-white rounded-md">
            <a href="/dashboard">Dashboard</a>
          </button>
         </div>
  
</NavItem>

        </Nav>
    )
}