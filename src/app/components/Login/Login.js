import swal from 'sweetalert';

class LoginController {
  constructor($state, authService) {
    this.state = $state;
    this.authService = authService;
  }

  login() {
    //const res = bioxplor_login(this.email, this.password);
    //swal("Login", res, res == "error" ? "error" : "success");
    //todo Remove below line and uncomment above after RPC connection
    initIndicationView()
  }

  initIndicationView(){
    this.authService.setUser({email: this.email});
    this.state.go('gene');
  }
}

export const Login = {
  template: require('./Login.html'),
  controller: LoginController
};
