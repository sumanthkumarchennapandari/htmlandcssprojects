// Write a code which can give grades to the students according to their scores

let grade = prompt("Enter the Grade that you have got : ");
if(grade <=100 && grade >80) 
    {
        document.write("Congrats you have got A grade in your examination");
    } else if(grade <= 80 && grade >70)
        {
            document.write("Congrats you have got B grade in your examination");
        } else if(grade <= 70 && grade >60)
            {
                document.write("Congrats you have got C grade in your examination");
            } else if(grade <= 60 && grade >50)
                {
                    document.write("Congrats you have got D grade in your examination");
                } else if(grade < 50)
                    {
                        document.write("you have Failed in your examination");
                    }