const urlLocal = 'http://localhost:1337';
const urlExternal = 'http://192.168.3.121:1337';
const urlMockup = 'http://localhost:3000';
const mockupsEndPoints = {
  users: '/user',
  houses: '/houses',
  findUser: '/user?email='
}

const endPoints= {
  registro: '/api/registro',
  login: '/api/autenticacao',
}

export { urlLocal, urlExternal, urlMockup, endPoints, mockupsEndPoints}
