let mockMoralisUser = null;

class User {
  constructor() {
    this.name = "Username";
    this.bio = "User Bio Blah Blah Blah";
    this.imageProfile = null;
  }

  save(){
  }

  get(str) {
    return this[str];
  }

  set(str, val) {
    this[str] = val;
  }
}

var MockMoralisFunctions = {
  initMoralis: function() {
    // blank function
  },
  initUser: async function() {
    return mockMoralisUser;
  },
  disconnect: async function() {},
  connectWallet: async function() {
    mockMoralisUser = new User();
    return mockMoralisUser;
  },
  isConnect: async function() {
    return mockMoralisUser !== null;
  },
  uploadFile: function(name, file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  },
};

export { MockMoralisFunctions as default };
