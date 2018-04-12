
class LoginController {
  constructor($state, authService) {
    this.state = $state;
    this.authService = authService;
  }

  login() {
    this.authService.setUser({email: 'demo@domain.com'});
    this.state.go('gene');
  }
}

export const Login = {
  template: require('./Login.html'),
  controller: LoginController
};
