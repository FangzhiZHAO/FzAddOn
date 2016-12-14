// var divs = document.getElementsByTagName('div');
// for (var i = 0; i < divs.length; i++) {
// 	var ranclr = '#'+Math.floor(Math.random()*16777215).toString(16);	
// 	divs[i].style.backgroundColor = ranclr;	
// 	divs[i].style.color = ranclr;
// }


// // Object way
// var transDic = {
//     Academics:{
//     	en: "Academics",
//     	ch: "学术"
//     }
// };
// document.body.innerHTML = document.body.innerHTML.replace(transDic.Academics.en , transDic.Academics.ch );
// document.body.innerHTML = document.body.innerHTML.replace(/Finances/g, '财务');
// document.body.innerHTML = document.body.innerHTML.replace(/Self Service/g, '自助服务');




//Array way
// var transEn = new Array("Academics","Finances","Self Service", "Search" , "Home" , "Plan" , "Page" ,"Schedule" ,"Enroll" , "Advisor");
// var transCh = new Array("学术","财务","自助服务","搜索" , "家庭" , "计划", "页面" ,"日程","注册" , "导师");
// for (var i = 0; i < transEn.length; i++) {
// 	document.body.innerHTML = document.body.innerHTML.replace(transEn[i] , transCh[i] );
// };


win0divDERIVED_SSS_SCL_SS_ACAD_INFO_LINKGP

//Id translation way
var transDicArr = [
{id:"ptpgltlbl_A_SS_HOMEPAGE" , ch: "自助服务首页", en:""},
{id:"ptpgltlbl_MENU" , ch: "菜单", en:""},
{id:"win0divDERIVED_SSS_SCL_SS_ACAD_INFO_LINKGP" , ch: "学术" , en: ""},
{id:"win0divDERIVED_SSS_SCL_SS_MNG_FIN_LINKGP" , ch: "财务" , en: ""},
{id:"win0divDERIVED_SSS_SCL_SSS_PERSONAL_INFOGP" , ch: "个人信息" , en: ""},
{id:"win0divDERIVED_SSS_SCL_LS_PORT_HOLDS_LINKGP" , ch: "暂留" , en: ""},
{id:"win0divDERIVED_SSS_SCL_LS_PORT_TODO_LINKGP" , ch: "待办" , en: ""},
{id:"win0divDERIVED_SSS_SCL_SS_ENRL_APP_LINKGP" , ch: "注册日期" , en: ""},
{id:"win0divDERIVED_SSS_SCL_SS_ADVISOR_LINKGP" , ch: "导师" , en: ""},
{id:"win0divDERIVED_SSS_SCL_SSS_SC_LNK1_NAMEGP" , ch: "学生财务服务" , en: ""},
{id:"win0divDERIVED_SSS_SCL_SSS_SC_LNK2_NAMEGP" , ch: "重要贷款信息" , en: ""},
{id:"win0divDERIVED_SSS_SCL_SSS_SC_LNK3_NAMEGP" , ch: "其他" , en: ""},
{id:"pthdr2home" , ch: "首页" , en: ""},
{id:"pthdr2atf" , ch: "加入收藏" , en: ""},
{id:"pthdr2logout" , ch: "登出" , en: ""},
{id:"DERIVED_SSS_SCL_SSS_GO_4$83$" , ch: "搜索课程" , en: ""},
{id:"" , ch: "" , en: ""},
{id:"" , ch: "" , en: ""},
{id:"" , ch: "" , en: ""},
{id:"" , ch: "" , en: ""},
{id:"" , ch: "" , en: ""},
{id:"" , ch: "" , en: ""}v


];

ptpgltlbl_MENU

document.getElementById("DERIVED_SSS_SCL_TITLE1$78$").innerHTML = "学生中心";



for (var i = 0; i < transDicArr.length; i++) {
	document.getElementById(transDicArr[i].id).innerHTML = transDicArr[i].ch;
	
};

// var transDic = {
// 	"admissions" : "入学"
// };

// document.getElementById("admissions").innerHTML = transDic.admissions ;



document.body.style.border = "10px solid grey";
// window.alert("The page has been translated. Thanks for using this add-on!");