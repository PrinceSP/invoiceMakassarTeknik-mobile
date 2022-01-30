const url = 'https://charlie-invoice.herokuapp.com/api/auth/login'
export const handleLogin = async(username,password,dispatch)=>{

  const name=username.current
  const pass=password.current
  console.log(name,pass);

  dispatch({ type: "LOGIN_START" });
  try {
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username:name,password:pass})
    }
    const res = await fetch(url, options).then(res=>res.json()).then(res=>console.log(res.datas))
    dispatch({ type: "LOGIN_SUCCESS", payload: res });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
}
