const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const btnSubmit = document.querySelector('#login')




class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    
    static userBase = [];

    addToUserBase() {
        User.userBase.push(this);
    }

    static verifyUsername(digitedUser){
        for(let i = 0; i < User.userBase.length; i++){
            if(User.userBase[i].username == digitedUser.username && User.userBase[i].password == digitedUser.password) {
                console.log('Seu login foi feito com sucesso.')
            }
        }
    }


}

const edgardMendes = new User ('EdgardMendes', '707070', 'edgardmendesoliveira@gmail.com');
const anaQueiroz = new User ('AnaQueiroz', '696969','ana.queiroz551@gmail.com' )
edgardMendes.addToUserBase()
anaQueiroz.addToUserBase()


btnSubmit.addEventListener('click', () => {
    const digitedUser = new User(usernameInput.value, passwordInput.value, 'edgardmendesoliveira@gmail.com');
    const usernameExist = User.verifyUsername(digitedUser);
})

