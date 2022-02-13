import axios from 'axios';
const getUserData =  async (userId) => {

    try {
        let userInfo = {};
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
        userInfo = user;
        const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
        userInfo = {...userInfo, post};
        return userInfo;
    }
    catch(e) {
        console.log("Bir hata oluştu: ", e);
    }

};

export default getUserData;