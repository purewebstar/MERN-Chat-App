/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
// setting cookies
export const setCookie = (name, value , duration) =>{
    var expires = "";
    if (duration) {
        var date = new Date();
        date.setTime(date.getTime() + (duration));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
// getting cookies
export const getCookie = (name) =>{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;    
}
// deleting cookie
export const deleteCookie = (name) =>{   
    document.cookie = name+'=; Max-Age=-99999999;';  
}