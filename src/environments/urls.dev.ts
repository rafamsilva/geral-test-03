const urlLocal = 'http://localhost:0034';
const urlExternal = 'http://192.168.3.121:0034';
const urlMockup = 'http://localhost:3000';
const mockupsEndPoints = {
  users: '/user',
  houses: '/houses',
  findUser: '/user?email='
}

const endPoints= {
  registro: '/api/registro',
  login: '/api/users/authenticate',
}

export { urlLocal, urlExternal, urlMockup, endPoints, mockupsEndPoints}
