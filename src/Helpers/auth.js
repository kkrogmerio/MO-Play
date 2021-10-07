import cookie from 'js-cookie';
export const setCookie=(key,value) =>{
    if(window!=='undefined'){
        cookie.set(key,value,{
            expires:1
        })
    }
};
let onceWelcome = 0;
export const getWelcome=()=>{
    return onceWelcome===3;
};
export const Welcomed=()=>{
    onceWelcome+=1;

};
export const removeCookie=key=>{
    if(window!=='undefined'){
        cookie.remove(key,{
            expires:1
        })
    }
};
export const getCookie=key=>{
    if(window!=='undefined'){
        return cookie.get(key);
    }
};
export const setLocalStorage=(key,value) =>{
    if(window!=='undefined'){
        localStorage.setItem(key,JSON.stringify(value));
    }
};
export const removeLocalStorage=key=>{
    if(window!=='undefined'){
        localStorage.removeItem(key);
    }
};
//Auth user after login
export const authenticate=(response, next)=>{

    setCookie('token',response.data.token);
    setLocalStorage('user',response.data.user);
    next();
};
export const signout=next=>{
    removeCookie('token');
    removeLocalStorage('user');
    removeLocalStorage('onceWelcome');
};

export const isAuth=()=>{
    if(window!=='undefined'){
        const cookieChecked=getCookie('token');
        if(cookieChecked){
            if(localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'))
            }
            else
            {
                return false;
            }
        }
    }
};
export const updateUser=(response,next)=>{
    if(window!=='undefined'){
        let auth=JSON.parse(localStorage.getItem('user'));
        auth=response.data;
        localStorage.setItem('user',JSON.stringify(auth));
    }
    //next();
};
