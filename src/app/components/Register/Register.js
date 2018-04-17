
class RegisterController {
  register() {
    try{
      const {firstName, lastName, role, email, password, confirm} = this;
      if(!(firstName && lastName && role && email && password && confirm)) {
        throw('Please fill all fields.')
      }
      if(password !== confirm) {
        throw('Passwords do not match!')
      }

      const res = bioxplor_register(email, password, role, firstName, lastName);
      if(res != 'error') {
        swal('Register', 'Registered Successfully', 'success');
        this.state.go('app');
      } else {
        throw('Something went wrong!');
      }
    } catch (e) {
      swal('Register', e.toString(), 'error');
    }
  }
}

export const Register = {
  template: require('./Register.html'),
  controller: RegisterController
};
