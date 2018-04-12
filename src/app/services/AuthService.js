export class AuthService {
  constructor() {
    this.user = null;
  }
  getUser() {
    return this.user;
  }
  setUser(params) {
    this.user = params;
  }
}

