import React ,{ useEffect , useState } from 'react';
import Cookies from 'js-cookie';
import Axios from "axios";
import Selfbuild from './selfbuild';
import Selfalter from './selfalter';

const Selfsettings = () => {
    // 讀取個人資料
    const userid = Cookies.get('id');
    const [linkToBuild,setB] = useState(false);
    useEffect(() => {
        Axios.post("http://localhost:3001/self", {
            userid: userid,
        }).then((response) => {
            console.log("self", response.data[0]);
            if(response.data[0].activeTime === null){
                setB(true)
            }
        });
    }, [userid]);
    if (linkToBuild === true) {
        return <Selfbuild></Selfbuild>
    } else{
        return <Selfalter></Selfalter>
    }
}
export default Selfsettings;