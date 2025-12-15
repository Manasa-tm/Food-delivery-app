let count = 0;

function incrementCount() 
{
    count++;
    document.getElementById("button-data").innerHTML = count;
}

function decrementCount() 
{
    if (count >= 1) 
        {
        count--;
        document.getElementById("button-data").innerHTML = count;
    }
}




