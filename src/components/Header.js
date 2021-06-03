// import React, { useState } from "react";
// import styled from "styled-components";
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";

// function Header() {
//   const [burgerMenu, setBurgerMenu] = useState(false);

//   return (
//     <Container>
//       <div>
//         <img src="./image/SpaceX-Logo.png" alt="" />
//       </div>
//       <Menu>
//         <p>
//           <a href="#">Falcon 9</a>
//         </p>
//         <p>
//           <a href="#">Falcon Heavy</a>
//         </p>
//         <p>
//           <a href="#">Dragon</a>
//         </p>
//         <p>
//           <a href="#">StarShip</a>
//         </p>
//         <p>
//           <a href="#">Human Spacelight</a>
//         </p>
//         <p>
//           <a href="#">RideShare</a>
//         </p>
//       </Menu>
//       <RightMenu>
//         <p>Shop</p>
//         <CustomMenu onClick={() => setBurgerMenu(true)} />
//       </RightMenu>

//       <BurgerNav show={burgerMenu}>
//         <CloseWrapper>
//           <CustomClose onClick={() => setBurgerMenu(false)} />
//         </CloseWrapper>

//         <li>
//           <a href="#">Existing Inventory</a>
//         </li>
//         <li>
//           <a href="#">Used Inventory</a>
//         </li>
//         <li>
//           <a href="#">Trade-in</a>
//         </li>
//         <li>
//           <a href="#">Cybertruck</a>
//         </li>
//         <li>
//           <a href="#">Roadastar</a>
//         </li>

//         <li>
//           <a href="#">Charging</a>
//         </li>
//         <li>
//           <a href="#">Commercial Energy</a>
//         </li>
//       </BurgerNav>
//     </Container>
//   );
// }

// const Container = styled.div`
//   min-height: 60px;
//   top: 0;
//   left: 0;
//   right: 0;
//   position: fixed;
//   padding: 0 30px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   img {
//     width: 150px;
//     height: 90px;
//     object-fit: contain;
//   }
// `;

// const Menu = styled.div`
//   margin-left: 40px;
//   display: flex;
//   align-items: center;
//   flex: 1;

//   a {
//     font-size: 13px;
//     font-weight: 400;
//     text-transform: uppercase;
//     padding: 0 15px;
//     color: white;
//     cursor: pointer;
//   }

//   @media (max-width: 750px) {
//     display: none;
//   }
// `;

// const RightMenu = styled.div`
//   display: flex;
//   align-items: center;

//   p {
//     font-size: 13px;
//     font-weight: 400;
//     text-transform: uppercase;
//     padding: 0 10px;
//     color: white;
//   }
// `;

// const CustomMenu = styled(MenuIcon)`
//   cursor: pointer;

//   .MuiSvgIcon-root {
//     color: white !important;
//   }
// `;

// const BurgerNav = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   background: black;
//   width: 300px;
//   z-index: 10;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   text-align: start;
//   transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
//   transition: transform 0.3s ease-in-out;
//   li {
//     list-style: none;
//     padding: 15px 0;
//     border-bottom: 1px solid rgba(0, 0, 0, 0.2);

//     a {
//       font-weight: 600;
//       text-transform: uppercase;
//     }
//   }
// `;

// const CustomClose = styled(CloseIcon)`
//   cursor: pointer;
// `;

// const CloseWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;
// export default Header;

import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <Container>
      <a>
        <img src="./image/SpaceX-Logo.png" alt="" />
      </a>
      <Menu>
        <p>
          <a href="#">Falcon 9</a>
        </p>
        <p>
          <a href="#">Falcon Heavy</a>
        </p>
        <p>
          <a href="#">Dragon</a>
        </p>
        <p>
          <a href="#">StarShip</a>
        </p>
        <p>
          <a href="#">Human Spacelight</a>
        </p>
        <p>
          <a href="#">RideShare</a>
        </p>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <CustomMenu onClick={() => setBurgerMenu(true)} />
      </RightMenu>

      <BurgerNav show={burgerMenu}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerMenu(false)} />
        </CloseWrapper>

        <li>
          <a href="#">Falcon 9</a>
        </li>
        <li>
          <a href="#">Falcon Heavy</a>
        </li>
        <li>
          <a href="#">Dragon</a>
        </li>
        <li>
          <a href="#">StarShip</a>
        </li>
        <li>
          <a href="#">Human Spacelight</a>
        </li>

        <li>
          <a href="#">RideShare</a>
        </li>
        <li>
          <a href="#">Mission</a>
        </li>
        <li>
          <a href="#">Launches</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Updates</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  img {
    width: 140px;
    height: 80px;
    object-fit: contain;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 50px;

  a {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 10px;
    color: white;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 10px;
    color: white;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: white !important;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  width: 300px;
  z-index: 10;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: end;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    a {
      font-weight: 300;
      text-transform: uppercase;
      color: white;

      &:hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  color: white !important;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default Header;
