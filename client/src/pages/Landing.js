/* import main from "../assets/images/main.jpg"; */
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

export default function landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page' style={{ marginTop: 0 }}>
        {/* info */}
        <div className='info'>
          <h2>
            <b>
              stock <span className='h1-span'>automation</span> app
            </b>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            doloremque commodi sunt dolores delectus est dolorem voluptate
            dolorum at voluptates. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus aliquam culpa voluptates deserunt minima
            asperiores accusantium at doloremque aperiam ex?
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login / Register
          </Link>
        </div>
        {/* <img src={main} alt='job hunt' className='img main-img'></img> */}
      </div>
    </Wrapper>
  );
}
