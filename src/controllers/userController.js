import userService from '../services/userService';

let handleLogin = async (req, res) => {    //xoa async
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        // if ((email !== email) || (password !== password)) {
        // || (password = (password === '' || password === null || password === 'undefined'))) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })

    }
    let userData = await userService.handleUserLogin(email, password);
    return res.status(200).json({
        userData
    })


}

module.exports = {
    handleLogin: handleLogin
}