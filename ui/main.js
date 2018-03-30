var button=document.getElementById('counter');
button.onclick=function()
{
    //CREATE A REQUEST
    var request=new XMLHttpRequest();
    //CAPTURE
    request.onreadystatechange=function()
    {
        if(request.readystate===XMLHttpRequest.DONE)
        {
            if(request.stature===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
  //MAKE A REQUEST
  request.open('GET', 'http://rohanshah3895rs.imad.hasura-app.io/counter',true);
  request.send(null);
};
//Submit Name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
    //Make a Request to Server and send the Name
    //Capture a list of Names & render it as a List
    var names=['name 1','name 2','name 3','name 4'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>' + names[i] + '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};