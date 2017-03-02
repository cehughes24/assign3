

function MonthPayment()

{

var LoanTerm = new Number(document.getElementById("LoanTerm").value);
var PercentRate = new Number(document.getElementById("PercentRate").value);
var Borrowed = new Number(document.getElementById("Borrowed").value);
var Rate;
var Answer1; 
var Answer2;
var Answer3;
var Answer4;
var MonthPayment;
var Months;
var Interest;
var PaidPrincipal;
var NewPrincipal; 

        Rate = PercentRate / 1200;
        Months = 12 * LoanTerm;
        Answer1 = Math.pow(1 + Rate,Months);
        Answer2 = Answer1 - 1;
        Answer3 = Rate / Answer2;
        Answer4 = Answer3 + Rate;
        MonthPayment = Answer4 * Borrowed;
        
        
        document.getElementById("MonthDisplay").innerHTML = MonthPayment;  //display the month payment
        
        
        Interest = Rate * Borrowed;
        PaidPrincipal = MonthPayment - Interest;
        NewPrincipal = Borrowed - PaidPrincipal;

        
    }
    
    function Table()
    
    {
      
        var result = "<table><tr><th>Final Principal</th><th>Result</th><th>Interest Rate</th><th>Balance</th></tr>";  //Create a table header       
        var LoanTerm = new Number(document.getElementById("LoanTerm").value);
        var PercentRate = new Number(document.getElementById("PercentRate").value);
        var Borrowed = new Number(document.getElementById("Borrowed").value);
        var Rate;
        var Answer1; 
        var Answer2;
        var Answer3;
        var Answer4;
        var MonthPayment;
        var Months;
        var Interest;
        var PaidPrincipal;
        var NewPrincipal;
        var NewInterest;
        var NewPaidPrincipal;
        var FinalPrincipal;

        Rate = PercentRate / 1200;
        Months = 12 * LoanTerm;
        Answer1 = Math.pow(1 + Rate,Months);
        Answer2 = Answer1 - 1;
        Answer3 = Rate / Answer2;
        Answer4 = Answer3 + Rate;
        MonthPayment = Answer4 * Borrowed;                     
        Interest = Rate * Borrowed;
        PaidPrincipal = MonthPayment - Interest;
        NewPrincipal = Borrowed - PaidPrincipal;


		//Loop amound of times 
	 	for (var i = 0; i <= LoanTerm; i++) 
		{
            
            NewInterest = Rate * NewPrincipal;
            NewPaidPrincipal = MonthPayment - NewInterest;
            FinalPrincipal = Borrowed - NewPaidPrincipal; 
			//Add this to the results table 
         result += "<tr><td>" + (i + 1) + "</td><td>" + FinalPrincipal +  "</td><td>" + NewInterest + "</td><td>"  + NewPaidPrincipal + "</td></tr>";  //Create Table rows 		 
        }
    
        
        	result += "</table>";
            document.getElementById("TableDisplay").innerHTML = result;
        }
   

