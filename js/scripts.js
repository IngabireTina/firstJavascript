   function calculate()
   { 
            var year = document.getElementById('year').value;
            var mm = document.getElementById('month').value; 
            var dd = document.getElementById('day').value; 
            var gender = document.getElementById('gender').value;  


            if( mm > 12 || mm <= 0 ) {
                alert( "Please provide a valid month!" );
                return false;
             }
            if( dd > 31 || dd <= 0 ) {
                alert( "Please provide a valid day!" );
                return false;
            }
            if( year == '' ) {
                alert( "Please provide a valid year!" );
                return false;
            }
            if( mm == '' ) {
                alert( "Please provide a valid month!" );
                return false;
            }
            if( dd == '' ) {
                alert( "Please provide a valid day!" );
                return false;
            }
        
  
            res = []; 
              
            for (var i = 0, len = year.length; i < len; i += 1) { 
                res.push(+year.charAt(i)); 
            }

            var y=0
            for (var i = 3; i>1 ; i--){
                y = 10 * y + res[i];
            }
            var yy=String(y).split("").reverse().join("");

            var cc=0;
            for (var i =0; i<2 ; i++){
                cc = 10 * cc + res[i];
                }

            var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
            day = Math.floor(day);    
            
            

            if( gender == 'female'){
                if( day == 0){
                   
                    alert("your Akan name is: Adwoa");
                   
                }
                else if( day == 1){
                   
                    alert("your Akan name is: Abenaa");
                }
                else if( day == 2){
                    
                    alert("your Akan name is: Akua");
                }
                else if( day == 3){
                   
                    alert("your Akan name is: Yaa");
                }
                else if( day == 4){
                    
                    alert("your Akan name is: Afua");
                }
                else if( day == 5){
                   
                    alert("your Akan name is: Ama");
                }
                else if( day == 6){
                   
                    alert("your Akan name is: Akosua");
                }
                else {
                    
                    alert("Invalid Day ");
                }
               
            }

            else {
                if( day == 0){
                    
                    alert("your Akan name is: Kwadwo");
                }
                else if( day == 1){
                    
                    alert("your Akan name is: kwabena");
                }
                else if( day == 2){
                    
                    alert("your Akan name is: Kwaku");
                }
                else if( day == 3){
                    
                    alert("your Akan name is: Yaw");
                }
                else if( day == 4){
                    
                    alert("your Akan name is: Kofi");
                    
                }
                else if( day == 5){
                    
                    alert("your Akan name is: Kwame");
                }
                else if( day == 6){
                    
                    alert("your Akan name is: Kwasi");
                }
                else {
                    
                    alert("Invalid Day");
                }
               
            }

       

        }




