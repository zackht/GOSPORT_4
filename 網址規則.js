// 網址規則

// 首頁
<Route path="/gosport/index" component={Handya} />;

// 租場地
<Route path="/gosport/rent" component={} />;                    //場地清單
<Route path="/gosport/rent/side" component={rentside_more} />;  //場地內容

// 交流區
<Route path="/gosport/communicate/search" component={} />;      //搜尋
<Route path="/gosport/communicate/search/:id" component={} />;  //場地or零打 詳細內容
<Route path="/gosport/communicate/create" component={} />;      //新建

// 會員 
<Route path="/gosport/user" component={Selfpage} />;            //會員個人頁
<Route path="/gosport/user/settings" component={Selfalter} />;  //會員設定
<Route path="/gosport/user/activity" component={Selfactive} />; //會員活動歷程

// 球隊
<Route path="/gosport/user/myteam" component={Myteam} />;       //會員的球隊
<Route path="/gosport/user/myteam/detail" component={} />;      //球隊的各項編輯畫面

// QA
<Route path="/gosport/qa" component={} />;

// 後台-會員
<Route path="/Back/user" component={} />;
// 後台-場地
<Route path="/Back/side" component={} />;
// 後台-文章
<Route path="/Back/article" component={Backarticle} />;
// 後台-QA
<Route path="/Back/qa" component={backqa} />;
