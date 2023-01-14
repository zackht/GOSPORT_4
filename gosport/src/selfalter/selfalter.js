import React, { useRef, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Axios from "axios";

// import star from "./icon/star1.svg";
import alterImgbackIcon from './icon/Vector.svg';
// import notice from './icon/notice.svg'
// import user from './icon/user.svg'
import "./selfalter.css"
const Selfalter = () => {
    // input的value同時設定以及渲染
    const [username, setUsername] = useState('準備中')
    function nameChange(e) {
        setUsername(e.target.value)
    }
    const [email, setEmail] = useState('')
    function emailChange(e) {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState('')
    function passChange(e) {
        setPassword(e.target.value)
    }
    const [tel, setTel] = useState('')
    function telChange(e) {
        setTel(e.target.value)
    }
    const [describe, setDescribe] = useState('')
    function describeChange(e) {
        setDescribe(e.target.value)
    }

    // 點擊外層div同點擊input 
    const inputFile = useRef();
    function upLoadpic() {
        inputFile.current.click();
    }


    // 讀取個人資料

    // useEffect(()=>{
    // },[])
    const userid = Cookies.get('id');
    const [selfInfo, setSelf] = useState({ userimg: { data: '' } });
    const [selfBadge, setSelfBadge] = useState([{ badgeid: '', badgeurl: '/images/yellowstar.svg' }]);
    useEffect(() => {

        Axios.post("http://localhost:3001/self", {
            userid: userid,
        }).then((response) => {
            console.log("self", response.data[0]);
            setSelf(response.data[0])
            console.log(selfInfo)
            setEmail(response.data[0].email)
            setPassword(response.data[0].password)
            setUsername(response.data[0].username)
            setTel(response.data[0].tel)
            setDescribe(response.data[0].userdescribe)
            setBdegree(response.data[0].badminton)
            setTdegree(response.data[0].tabletennis)
            setVdegree(response.data[0].volleyball)
            let badge = JSON.parse(response.data[0].usebadge)
            setSelectedImages(badge)
        });
        Axios.post("http://localhost:3001/selfbadge", {
            userid: userid,
        }).then((response) => {
            console.log('baddge', response.data);
            setSelfBadge(response.data)
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userid]);

    // 照片自資料庫讀取
    const [imageSrc, setImageSrc] = useState('');
    const [photoBack, setBack] = useState('block')
    const [showPhoto, setPhoto] = useState('none')

    useEffect(() => {
        // console.log(selfInfo)
        var u8Arr = new Uint8Array(selfInfo.userimg.data);
        var blob = new Blob([u8Arr], { type: "image/jpeg" });
        var fr = new FileReader;
        fr.onload = function () {
            setImageSrc(fr.result);
            if (imageSrc) {
                setBack('none')
                setPhoto('block')
            }
        };
        fr.readAsDataURL(blob);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selfInfo])


    // 相片inputfile onchange 同時顯示加取資料 
    const [picSourse, setPicSourse] = useState();
    const handleOnPreview = (event) => {
        setPicSourse(event.target.files[0])
        const file = event.target.files[0];
        console.log(event.target.files[0])
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            // convert image file to base64 string
            setImageSrc(reader.result)
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
        setBack('none')
        setPhoto('block')

    };
    // 上傳更新
    let update = (e) => {
        e.preventDefault();
        if (!picSourse) {

            Axios.post("http://localhost:3001/selfalterwithoutpic", {
                usebadge:badge,
                email: email,
                password: password,
                username: username,
                tel: tel,
                userdescribe: describe,
                badminton:Bdegree,
                volleyball:Vdegree,
                tabletennis:Tdegree,
                userid:userid
            }).then((response) => {
                console.log(response);
                window.location = '/gosport/user';
            })

        } else {
            const data = new FormData();
            data.append('usebadge', badge);
            data.append('image', picSourse);
            data.append('email', email);
            data.append('password', password);
            data.append('username', username);
            data.append('tel', tel);
            data.append('userdescribe', describe);
            data.append('volleyball', Vdegree);
            data.append('badminton', Bdegree);
            data.append('tabletennis', Tdegree);
            data.append('userid', userid)
            Axios.post("http://localhost:3001/selfalter", data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then((response) => {
                // console.log(response.data);
                window.location = '/gosport/user';
            });
        }
    }
    // 程度
    const [Bdegree, setBdegree] = useState('新手');
    const BdegreeCh = (e) => {
        setBdegree(e.target.value)
    }
    const [Tdegree, setTdegree] = useState('新手')
    const TdegreeCh = (e) => {
        setTdegree(e.target.value)
    }
    const [Vdegree, setVdegree] = useState('新手')
    const VdegreeCh = (e) => {
        setVdegree(e.target.value)
    }
    // 徽章
    const [selectedImages, setSelectedImages] = useState([{ badgeurl: '#' }]);
    const badge = JSON.stringify(selectedImages)
    const [clickCount,setClickCount] = useState(0);
    const chuseStar = (item) => {
        // console.log(badge)
        return () => {
            setClickCount(pre => pre+1)
            setSelectedImages(prevSelected => {
                if(clickCount === 0) {
                    prevSelected.splice(0,prevSelected.length)
                }
                // 當目前選中的圖片重選時移除
                if (prevSelected.includes(item)) {
                    return prevSelected.filter(i => i !== item);
                }
                // 當目前選中的圖片數量小於 3 個時加入新的圖片
                if (prevSelected.length < 3) {
                    return [item, ...prevSelected];
                }
                // 當目前選中的圖片數量等於 3 個時，移除最後一個圖片，並加入新的圖片
                return [item, ...prevSelected.slice(0, 2)];
            });
        }
    }
    return (
        <React.Fragment>
            {/* 主體 */}
            <div className='alter_'>
                <div className="selfalter">
                    <form className='alter_form' onSubmit={update}>
                        <div>
                            <div className="alter_PicPla">
                                <div id="picFile" onClick={upLoadpic}>
                                    <div id="picFile_backT" style={{ textAlign: "center", color: "#AAAAAA", display: photoBack }}>
                                        <embed src={alterImgbackIcon} /> <br />上傳相片
                                    </div>
                                    <input id="oploadPic" type="file" targetid="preview_img" onChange={handleOnPreview} ref={inputFile}
                                        accept="image/gif, image/jpeg, image/png" />
                                    <img id="preview_img" src={imageSrc} alt="" style={{ display: showPhoto }} />

                                </div>
                                <div id="alter_showStar">
                                    {selectedImages.map((item, index) => <embed src={item.badgeurl} key={index} type="" />)}
                                    {/* <embed src={star} type="" />
                                    <embed src={star} type="" />
                                    <embed src={star} type="" /> */}
                                </div>
                            </div>
                            <div style={{ paddingLeft: "40px" }}>
                                <label className='alter_label' htmlFor="alter_name">姓名</label><br />
                                <input type="text" className='alter_input' id="alter_name" value={username} onChange={nameChange} /><br />
                                <label className='alter_label' htmlFor="alter_email">註冊信箱</label><br />
                                <input type="text" className='alter_input' id="alter_email" value={email} onChange={emailChange} /><br />
                                <label className='alter_label' htmlFor="alter_psw">密碼</label><br />
                                <input type="password" className='alter_input' id="alter_psw" value={password} onChange={passChange} /><br />
                                <label className='alter_label' htmlFor="alter_tel">電話</label><br />
                                <input type="tel" className='alter_input' id="alter_tel" value={tel} onChange={telChange} /><br />
                                <label className='alter_label'>我的程度</label><br />
                                <div className="alter_degree">
                                    <div>羽球</div>
                                    <input type="radio" name="Badmin" id="newB" value="新手" checked={Bdegree === '新手'} onChange={BdegreeCh} /><label htmlFor="newB">新手</label>
                                    <input type="radio" name="Badmin" id="nomalB" value="初階" checked={Bdegree === '初階'} onChange={BdegreeCh} /><label htmlFor="nomalB">初階</label>
                                    <input type="radio" name="Badmin" id="highB" value="高手" checked={Bdegree === '高手'} onChange={BdegreeCh} /><label htmlFor="highB">高手</label>
                                </div>
                                <div className="alter_degree">
                                    <div>桌球</div>
                                    <input type="radio" name="Ttennis" id="newT" value="新手" checked={Tdegree === '新手'} onChange={TdegreeCh} /><label htmlFor="newT">新手</label>
                                    <input type="radio" name="Ttennis" id="nomalT" value="初階" checked={Tdegree === '初階'} onChange={TdegreeCh} /><label htmlFor="nomalT">初階</label>
                                    <input type="radio" name="Ttennis" id="highT" value="高手" checked={Tdegree === '高手'} onChange={TdegreeCh} /><label htmlFor="highT">高手</label>
                                </div>
                                <div className="alter_degree">
                                    <div>排球</div>
                                    <input type="radio" name="Vodi" id="newV" value="新手" checked={Vdegree === '新手'} onChange={VdegreeCh} /><label htmlFor="newV">新手</label>
                                    <input type="radio" name="Vodi" id="nomalV" value="初階" checked={Vdegree === '初階'} onChange={VdegreeCh} /><label htmlFor="nomalV">初階</label>
                                    <input type="radio" name="Vodi" id="highV" value="高手" checked={Vdegree === '高手'} onChange={VdegreeCh} /><label htmlFor="highV">高手</label>
                                </div>
                                <label className='alter_label'>我的徽章</label>
                                <div className="alter_mark">
                                    {selfBadge.map(item => <img key={item.badgeid} alt={item.badgeid} onClick={chuseStar(item)} src={item.badgeurl} className={selectedImages.includes(item) ? 'selectedstars' : ''}></img>)}
                                </div>
                                <label className='alter_label' htmlFor="account_describe">描述</label><br />
                                <textarea className='alter_textarea' id="account_describe" value={describe} onChange={describeChange}></textarea><br />
                            </div>
                        </div>
                        <div className="alter_yesOrNot">
                            <a href="/selfpage">
                                <span className="alter_backself">取消</span>
                            </a>
                            <input type="submit" value="儲存" />
                        </div>
                    </form>
                </div>
            </div>

        </React.Fragment>
    );
}
export default Selfalter;