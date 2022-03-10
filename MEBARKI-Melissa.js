var arr=[-3,8,7,6,5,-4,3,2,1];
var copieArr=[];
var min=arr[0];
var pos;
var maval=arr[0];
for (i=0; i<arr.length; i++)
{
        if (maval<arr[i]) maval=arr[i];
}

for (var i=0;i<arr.length;i++)
{
        for (var j=0;j<arr.length;j++)
        {
                if (arr[j]!="val")
                {
                        if (min>arr[j]) 
                        {
                                min=arr[j];
                                pos=j;
                        }
                }
        }
        copieArr[i]=min;
        arr[pos]="val";
        min=maval;
}
console.log(copieArr);