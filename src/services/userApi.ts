import api from "./api"

const signInByEmailAndPassword = ({email,password}: {email: string,password: string}) => {
    return api.post(`${api.url.users}`,{email,password}).then((res) => res.data);
}
const usersService = {
    signInByEmailAndPassword,
}
export default usersService;