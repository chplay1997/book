import { Layout } from 'antd'
import styled from 'styled-components'
import { FacebookFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons'

const Login: React.FC = () => {
  const { Content } = Layout

  return (
    <StyledWrapper className="container demo-1">
      <Content className="content">
        <div
          id="large-header"
          className="large-header"
          style={{ backgroundImage: `url(${require('./images/banner.jpg')})` }}
        >
          <h1>Welcome!</h1>
          <div className="main-agileits">
            <div className="form-w3-agile">
              <h2>Login Now</h2>
              <form action="#" method="post">
                <div className="form-sub-w3">
                  <input type="text" name="Username" placeholder="Username " required />
                  <div className="icon-w3">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="form-sub-w3">
                  <input type="password" name="Password" placeholder="Password" required />
                  <div className="icon-w3">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                  </div>
                </div>
                <p className="p-bottom-w3ls">
                  Forgot Password?<a href="#"> Click here</a>
                </p>
                <p className="p-bottom-w3ls1">
                  New User?<a href="#"> Register here</a>
                </p>
                <div className="clear"></div>
                <div className="submit-w3l">
                  <input type="submit" value="Login" />
                </div>
              </form>
              <div className="social w3layouts">
                <div className="heading">
                  <h5>Or Login with</h5>
                  <div className="clear"></div>
                </div>
                <div className="icons">
                  <a href="#">
                    <FacebookFilled
                      style={{
                        color: '#3b5998',
                        background: '#fff',
                        fontSize: 20,
                      }}
                    />
                  </a>
                  <a href="#">
                    <TwitterSquareFilled
                      style={{
                        color: '#1da1f2',
                        background: '#fff',
                        fontSize: 20,
                      }}
                    />
                  </a>
                  <a href="#">
                    <LinkedinFilled
                      style={{
                        color: '#0077b5',
                        background: '#fff',
                        fontSize: 20,
                      }}
                    />
                  </a>
                  <div className="clear"></div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="copyright w3-agile">
            <p>
              © 2017 Clean Login Form . All rights reserved | Design by{' '}
              <a href="#" target="_blank">
                me
              </a>
            </p>
          </div>
        </div>
      </Content>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Layout)`
  /* Header */
  .large-header {
    position: relative;
    width: 100%;
    background: #333;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    z-index: 1;
  }

  .demo-1 .large-header {
    background-image: url('./images/banner.jpg');
    background-position: center bottom;
  }

  /* Header */
  .main-agileits {
    width: 30%;
    margin: 0 auto;
  }
  .form-w3-agile h2 {
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1em;
    letter-spacing: 2px;
  }
  .form-w3-agile {
    background: rgba(4, 4, 4, 0.56);
    -webkit-box-shadow: 0px 35px 44px -22px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: 0px 35px 44px -22px rgba(0, 0, 0, 0.72);
    box-shadow: 0px 35px 44px -22px #1f181b;
    padding: 60px 40px;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 45px;
    font-weight: bold;
    margin: 40px 0;
    color: #ffffff;
    letter-spacing: 4px;
    word-spacing: 4px;
    font-family: 'Sirin Stencil', cursive;
  }
  .icon-w3 i {
    color: #ffffff;
    font-size: 16px;
  }
  .icon-w3 {
    display: inline-block;
    position: absolute;
    right: 12px;
    bottom: 26px;
  }
  form {
    margin: 0 auto;
    width: 100%;
  }
  .form-sub-w3 {
    position: relative;
    margin-bottom: 20px;
  }
  .form-sub-w3 input[type='text'],
  input[type='password'] {
    outline: none;
    font-size: 15px;
    color: #ffffff;
    padding: 15px 40px 15px 10px;
    letter-spacing: 2px;
    width: 87%;
    border: none;
    border: 1px solid #dccbcf;
    -webkit-appearance: none;
    margin-bottom: 10px;
    background: transparent;
    font-family: 'Sirin Stencil', cursive;
  }
  .form-sub-w3 input[type='password'] {
    outline: none;
    font-size: 15px;
    color: #ffffff;
    padding: 15px 40px 15px 10px;
    width: 87%;
    border: none;
    border: 1px solid #dccbcf;
    -webkit-appearance: none;
    margin-bottom: 10px;
    background: transparent;
    font-family: 'Sirin Stencil', cursive;
  }
  input[type='submit'] {
    background: #fff;
    color: #000;
    outline: none;
    display: block;
    margin: 0 auto;
    border: none;
    cursor: pointer;
    padding: 7px 35px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Sirin Stencil', cursive;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -o-transition: 0.3s all;
    -ms-transition: 0.3s all;
  }
  input[type='submit']:hover {
    background: #4caf50;
    color: #ffffff;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -o-transition: 0.3s all;
    -ms-transition: 0.3s all;
  }
  .p-bottom-w3ls {
    font-size: 16px;
    color: #eee;
    margin-top: 0em;
    text-align: center;
    text-transform: none;
    float: left;
  }
  .p-bottom-w3ls1 {
    font-size: 16px;
    color: #eee;
    margin-top: 0em;
    text-align: center;
    text-transform: none;
    float: right;
  }
  .p-bottom-w3ls a,
  .p-bottom-w3ls1 a {
    color: #8bc34a;
    outline: none;
    text-decoration: none;
  }
  /*--copy-right-starts-here--*/
  .copyright p {
    margin: 0 auto;
    text-align: center;
    margin: 50px 0px;
    font-size: 14px;
    color: #fff;
    letter-spacing: 1px;
    text-transform: none;
    font-family: 'Sirin Stencil', cursive;
  }
  .copyright a {
    color: #8bc34a;
    font-weight: bold;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -o-transition: 0.3s all;
    -ms-transition: 0.3s all;
  }
  .copyright a:hover {
    color: #fff;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -o-transition: 0.3s all;
    -ms-transition: 0.3s all;
  }
  /*--copy-right-ends-here--*/
  .heading {
    float: left;
  }
  .heading h5 {
    color: #fff;
  }
  .icons {
    margin-left: 8em;
  }
  .social {
    margin: 3em 0 0;
  }
  .icons a {
    text-decoration: none;
    color: #fff;
  }

  /*--- Responsive Code ---*/
  @media screen and (max-width: 1920px) {
    .icon-w3 {
      right: 27px;
    }
    h1 {
      margin: 80px 0 40px;
    }
    .copyright p {
      margin: 50px 0px 150px;
    }
    .p-bottom-w3ls1 {
      padding-right: 15px;
    }
  }
  @media screen and (max-width: 1680px) {
    .p-bottom-w3ls1 {
      padding-right: 10px;
    }
    .icon-w3 {
      right: 20px;
    }
  }
  @media screen and (max-width: 1600px) {
    .p-bottom-w3ls1 {
      padding-right: 5px;
    }
    h1 {
      margin: 40px 0;
    }
    .copyright p {
      margin: 50px 0px;
    }
    .icon-w3 {
      right: 15px;
    }
  }
  @media screen and (max-width: 1440px) {
    .main-agileits {
      width: 33%;
    }
  }
  @media screen and (max-width: 1280px) {
    .main-agileits {
      width: 36%;
    }
  }
  @media screen and (max-width: 1080px) {
    .main-agileits {
      width: 42%;
    }
  }
  @media screen and (max-width: 1024px) {
    .main-agileits {
      width: 45%;
    }
    .form-sub-w3 input[type='text'],
    .form-sub-w3 input[type='password'] {
      width: 85.5%;
    }
  }
  @media screen and (max-width: 900px) {
    .main-agileits {
      width: 50%;
    }
  }
  @media screen and (max-width: 800px) {
    .main-agileits {
      width: 55%;
    }
  }
  @media screen and (max-width: 768px) {
    .main-agileits {
      width: 58%;
    }
  }
  @media screen and (max-width: 736px) {
    .main-agileits {
      width: 60%;
    }
    h1 {
      margin: 35px 0;
      font-size: 40px;
    }
  }
  @media screen and (max-width: 667px) {
    .main-agileits {
      width: 68%;
    }
  }
  @media screen and (max-width: 640px) {
    .main-agileits {
      width: 70%;
    }
  }
  @media screen and (max-width: 600px) {
    .main-agileits {
      width: 73%;
    }
  }
  @media screen and (max-width: 568px) {
    .main-agileits {
      width: 80%;
    }
    h1 {
      margin: 30px 0;
      font-size: 35px;
    }
  }
  @media screen and (max-width: 480px) {
    .main-agileits {
      width: 93%;
    }
  }
  @media screen and (max-width: 414px) {
    .main-agileits {
      width: 95%;
    }
    .form-w3-agile {
      padding: 30px 30px;
    }
    .p-bottom-w3ls {
      float: none;
    }
    .p-bottom-w3ls1 {
      padding-right: 0px;
      margin-top: 10px;
      float: none;
    }
    h1 {
      margin: 30px 0;
      font-size: 33px;
    }
    .copyright p {
      margin: 40px 0px;
      line-height: 28px;
    }
    .form-sub-w3 input[type='text'],
    .form-sub-w3 input[type='password'] {
      width: 85%;
    }
  }
  @media screen and (max-width: 384px) {
    .copyright p {
      margin: 40px 10px 40px;
    }
    h1 {
      margin: 20px 0;
      font-size: 30px;
    }
    i.fa.fa-facebook,
    i.fa.fa-twitter,
    i.fa.fa-linkedin,
    i.fa.fa-pinterest-p {
      padding: 0.4em;
      width: 20px;
      font-size: 16px;
    }
    .form-sub-w3 input[type='text'],
    .form-sub-w3 input[type='password'] {
      width: 82%;
      padding: 13px 40px 13px 10px;
    }
  }
  @media screen and (max-width: 375px) {
  }
  @media screen and (max-width: 320px) {
    h1 {
      margin: 20px 0;
      font-size: 27px;
      word-spacing: 4px;
      letter-spacing: 2px;
    }
    .icons {
      margin-left: 6em;
    }
    .form-w3-agile {
      padding: 30px 20px;
    }
    .copyright p {
      margin: 20px 10px 20px;
    }
    .icon-w3 {
      right: 5px;
    }
    .form-sub-w3 {
      margin-bottom: 5px;
    }
  }
`
export default Login
