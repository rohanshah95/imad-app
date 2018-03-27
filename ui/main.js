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
