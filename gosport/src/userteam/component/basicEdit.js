import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import basicEdit from './basicEdit.module.css';

export default function BasicEdit(params) {
    
    // 上傳照片
    const inputFile = useRef();
    const upLoadImg=()=>{
        inputFile.current.click();
    }

    return(
        <>
            <form action="" className={basicEdit.bForm}>
                <div onClick={upLoadImg}>
                    <input type='file' ref={inputFile}></input>
                </div>
                
                <div>隊名</div>
                <input type="text"/>

                <div>常打場館</div>
                <input type="text"/>

                <div>週期</div>
                <select name="" id="">
                    <option value="星期一">星期一</option>
                    <option value="星期二">星期二</option>
                    <option value="星期三">星期三</option>
                    <option value="星期四">星期四</option>
                    <option value="星期五">星期五</option>
                    <option value="星期六">星期六</option>
                    <option value="星期日">星期日</option>
                </select>

                <div>時段</div>
                <select name="" id="">
                    <option value="9">09:00</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                    <option value="14">14:00</option>
                    <option value="15">15:00</option>
                    <option value="16">16:00</option>
                    <option value="17">17:00</option>
                    <option value="18">18:00</option>
                    <option value="19">19:00</option>
                    <option value="20">20:00</option>
                    <option value="21">21:00</option>
                </select>
                <div className={basicEdit.fTimeTo}>至</div>
                <select name="" id="">
                    <option value="9">09:00</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                    <option value="14">14:00</option>
                    <option value="15">15:00</option>
                    <option value="16">16:00</option>
                    <option value="17">17:00</option>
                    <option value="18">18:00</option>
                    <option value="19">19:00</option>
                    <option value="20">20:00</option>
                    <option value="21">21:00</option>
                </select>

                <div>羽球</div>
                <select name="" id="">
                    <option value="羽球">羽球</option>
                    <option value="桌球">桌球</option>
                    <option value="網球">網球</option>
                </select>
                <select name="" id="" className={basicEdit.formDegree}>
                    <option value="新手">新手</option>
                    <option value="初階">初階</option>
                    <option value="高手">高手</option>
                </select>

                <div>零打費用</div>
                <input type="text"/>

                <div>描述</div>
                <textarea name="" id="" maxlength="100"></textarea><br/>

                {/* <button>取消</button> */}
                <Link to={`/gosport/user/myteam/basic`}>取消</Link>
                <input type="submit" value="儲存"/>
            </form>
        </>
    )
};


                    
                    