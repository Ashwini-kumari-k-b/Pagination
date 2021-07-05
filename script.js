var lowlimit=document.getElementById('script').getAttribute("lowlimit");
var uplimit=document.getElementById('script').getAttribute("uplimit");
fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then
(res=>{
res.json().then(
    data=>{
        console.log(data);
        if (data.length > 0){
            var temp = "";
            var count = 1;
            
            data.forEach((element) => {
                  if(count <= uplimit && count > lowlimit)
                  {
                         temp += "<tr>";
                temp += "<td>" + element.id + "</td>";
                temp += "<td>" + element.name + "</td>";
                temp += "<td>" + element.email + "</td>";
                temp += "</tr>";
                  }
               count++;
                  
            });
            document.getElementById("data").innerHTML = temp;
        }
      
            
        }

    
)
}
)
