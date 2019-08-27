var siteName;
var siteUrl;
var sites;
if(JSON.parse(localStorage.getItem('marks')) == null)
{
    sites=[];

}
else{

    sites =JSON.parse(localStorage.getItem('marks'));
    displaySites();
}

document.getElementById("submit").addEventListener("click",function(){


addSite();

});
function addSite()
{
    var valid = true;
    var alert1="";
    var alert2="";

    var regex = /^(www.).{1,30}(.com|.eg|.net)$/
 siteName=document.getElementById("nameIn").value;
 siteUrl=document.getElementById("urlIn").value;
 document.getElementById("alert1").innerHTML ="";
 document.getElementById("alert2").innerHTML ="";

 if(siteName == "")
 {
    valid =false;
    alert1 ="Name IS REQUIRED";

 }
 if(regex.test(siteUrl) == false)
 {
     valid = false;
     alert2 ="INVALID URL,      VALID : www.example.com ";
 }
 if(valid == true)
 {
    var site={name:siteName,url:siteUrl};
    sites.push(site);
    displaySites();
    localStorage.setItem("marks",JSON.stringify(sites));
 }
else{
    if(alert1 != ""){document.getElementById("alert1").innerHTML='<div class="alert alert-danger" role="alert"> '+alert1+'</div>'
    alert1="";}
 if(alert2 != "")
 {document.getElementById("alert2").innerHTML='<div class="alert alert-danger" role="alert"> '+alert2+'</div>'
 alert2="";}
 
 

}


}
function displaySites()
{
    var marks="";
    for(var i=0;i<sites.length;i++)
    {
        marks+='<div class="container "><div class="row"><div class="col-xs-2 col-sm-6 col-md-9  bits mb-3 p-3"><div class="name">'+sites[i].name+'</div></div>'+'<div class="col-xs-10 col-md-3  col-sm-6 bits mb-3 p-3"><div class="btns"><button onclick="visit('+i+')" class="btn btn-primary" id="visit">visit</button><button onclick="deleted('+i+')" class="btn btn-danger">delete</button></div></div>'
    }
    document.getElementById("bookmarks").innerHTML=marks;
}
function deleted(index)
{
    sites.splice(index,1);
    displaySites();
    localStorage.setItem('marks',JSON.stringify(sites));

}
function visit(index)
{
    window.open('https://'+sites[index].url ,"_newtab");
}
const mq=window.matchMedia("(max-width:380px)");
if(mq.matches)
{
    document.getElementById("nameIn").placeholder="";
    document.getElementById("urlIn").placeholder="";


}
else{
    document.getElementById("nameIn").placeholder="Bookmark name";
    document.getElementById("urlIn").placeholder="Bookmark url";
}