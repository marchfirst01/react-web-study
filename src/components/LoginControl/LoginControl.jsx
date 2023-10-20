import React from 'react';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div>
          {isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick} />
          ) : (
            <LoginButton onClick={this.handleLoginClick} />
          )}
        </div>
        <div>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>
      </div>
    );
  }
}

function UserGreeting() {
  return (
    <h1
      style={{
        margin: '0',
        color: 'white',
        whiteSpace: 'nowrap',
        paddingLeft: '10px',
      }}
    >
      환영합니다!
    </h1>
  );
}

function GuestGreeting() {
  return (
    <h1
      style={{
        margin: '0',
        color: 'white',
        whiteSpace: 'nowrap',
        paddingLeft: '10px',
      }}
    >
      로그인 해주세요!
    </h1>
  );
}

function LoginButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '80px',
        height: '30px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '20px',
      }} // 버튼 크기 조정
    >
      로그인
    </button>
  );
}

function LogoutButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '80px',
        height: '30px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '20px',
      }} // 버튼 크기 조정
    >
      로그아웃
    </button>
  );
}

export default LoginControl;
