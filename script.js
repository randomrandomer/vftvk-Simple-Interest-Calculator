//function that calculates the interest generated from the users chosen parameters
function compute()
{
    //following code obtains the values for the variables from the html input
    var principal = document.getElementById("principal").value;
    //this conditional statement validates the user's input for the principal field
    if (principal <= 0) {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
      }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //finally, print the following result to the span named "result"
    //includes both the variables required and the HTML tagging,
    //which has been achieved using \ as escape sequences
    document.getElementById("result").innerHTML=`
    \<br\>\<br\>If you deposit \<mark\>${principal}\</mark\>,
    \<br\>at an interest rate of \<mark\>${rate}\</mark\>.
    \<br\>You will receive an amount of \<mark\>${interest}\</mark\>,  
    \<br\>in the year \<mark\>${year}\</mark\>.
    `;
}
//updates the shown interest rate on the webpage to provide live feedback
//takes the value of the rate from the range input feature,
//writes that value to the span which displays the rate.        
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}