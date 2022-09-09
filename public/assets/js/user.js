    var base_url = window.location.origin;
    var validReferral_code=5;
    $("#referral_code").keyup(function(){
        //  $("#referral_code").css("background-color", "rade");
        var referralCode =  $("#referral_code").val()
        if(referralCode==""){
            $("#referral_code").css("background-color", "#FFFFFF");
            return false
        }
        // $('referral_code').animate({'backgroundColor' : '#ffff99'});
        // $("#referral_code").css("background-color", "#FF0000");
        // console.log(x);
        $.ajax({
            url:base_url+'/order/find/'+referralCode,
            method:'GET',
            success: function(response){
                var count = response.length;
                // console.log($.isEmptyObject(response));
                //     console.log(typeof(response));
                //     console.log($.type(response));

                if(typeof(response) == "string"){
                    $("#referral_code").addClass("error-line");
                    $("#referral_code_error_text").removeClass("gu-hide");
                    // $("#referral_code").css("background-color", "#FF0000");
                    $("#user-name").text('');
                   validReferral_code=0;
                }else{
                    $("#referral_code_error_text").addClass("gu-hide");
                    $("#user-name").text( response.name);
                    $("#referral_code").removeClass("error-line");
                    validReferral_code=5;
                }

                console.log(response.name);

            }
        });
    });

    function validateForm() {

        let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }
        let y = document.forms["myForm"]["mobile"].value;
        if (y == "") {
            var element = document.getElementById("mobile");
            element.classList.add("radbox");
            var element = document.getElementById("errormobile");
            element.classList.remove("gu-hide");
            //alert("Name must be filled out");
            return false;
        }else{
            var element = document.getElementById("mobile");
            element.classList.remove("radbox");
            var element = document.getElementById("errormobile");
            element.classList.add("gu-hide");

        }
        let j = document.forms["myForm"]["tablets"].value;
        if (j == "") {

            var element = document.getElementById("tablets");
            element.classList.add("radbox");
            var element = document.getElementById("errortablets");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("tablets");
            element.classList.remove("radbox");
            var element = document.getElementById("errortablets");
            element.classList.add("gu-hide");

        }
        let k = document.forms["myForm"]["doctor"].value;
        if (k == "") {

            var element = document.getElementById("doctor");
            element.classList.add("radbox");
            var element = document.getElementById("errordoctor");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("doctor");
            element.classList.remove("radbox");
            var element = document.getElementById("errordoctor");
            element.classList.add("gu-hide");

        }
        // const checked = document.querySelector('#accept:checked') !== null;
        var referralCode =  $("#referral_code").val();
        if(validReferral_code == 0 && referralCode != ""){
            var element = document.getElementById("referral_code");
            element.classList.add("radbox");
            var element = document.getElementById("errorreferral_code");
            element.classList.remove("gu-hide");
             return false;
         }
        if (!(document.querySelector('#styled-checkbox-1:checked') !== null)) {
            var element = document.getElementById("styled-checkbox-1");
            element.classList.add("radbox");
            var element = document.getElementById("errorstyled-checkbox-1");
            element.classList.remove("gu-hide");
            return false;
            }else{
            var element = document.getElementById("styled-checkbox-1");
            element.classList.remove("radbox");
            var element = document.getElementById("errorstyled-checkbox-1");
            element.classList.add("gu-hide");
            }


    }
    function validChamber(){

        let x = document.forms["myForm"]["shop_name"].value;
        if (x == "") {
            var element = document.getElementById("shop_name");
            element.classList.add("radbox");
            var element = document.getElementById("errorshop_name");
            element.classList.remove("gu-hide");
            //alert("Name must be filled out");
            return false;
        }else{
            var element = document.getElementById("shop_name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorshop_name");
            element.classList.add("gu-hide");

        }
         let y = document.forms["myForm"]["email"].value;
        if (y == "") {
            var element = document.getElementById("email");
            element.classList.add("radbox");
            var element = document.getElementById("erroremail");
            element.classList.remove("gu-hide");
            //alert("Name must be filled out");
            return false;
        }else{
            var element = document.getElementById("email");
            element.classList.remove("radbox");
            var element = document.getElementById("erroremail");
            element.classList.add("gu-hide");

        }

        let z = document.forms["myForm"]["phone"].value;
        // console.log(z);
        if (z == "") {
            var element = document.getElementById("phone");
            element.classList.add("radbox");
            var element = document.getElementById("errorphone");
            element.classList.remove("gu-hide");

            return false;
        }
        else{
            var element = document.getElementById("phone");
            element.classList.remove("radbox");
            var element = document.getElementById("errorphone");
            element.classList.add("gu-hide");

        }
        let p = document.forms["myForm"]["shop_phone"].value;
        // console.log(z);
        if (p == "") {
            var element = document.getElementById("shop_phone");
            element.classList.add("radbox");
            var element = document.getElementById("errorshop_phone");
            element.classList.remove("gu-hide");

            return false;
        }
        else{
            var element = document.getElementById("shop_phone");
            element.classList.remove("radbox");
            var element = document.getElementById("errorshop_phone");
            element.classList.add("gu-hide");

        }
        let q = document.forms["myForm"]["password"].value;
        // console.log(z);
        if (q == "") {
            var element = document.getElementById("password");
            element.classList.add("radbox");
            var element = document.getElementById("errorpassword");
            element.classList.remove("gu-hide");

            return false;
        }
        else{
            var element = document.getElementById("password");
            element.classList.remove("radbox");
            var element = document.getElementById("errorpassword");
            element.classList.add("gu-hide");

        }
        let r = document.forms["myForm"]["address"].value;
        // console.log(z);
        if (r == "") {
            var element = document.getElementById("address");
            element.classList.add("radbox");
            var element = document.getElementById("erroraddress");
            element.classList.remove("gu-hide");

            return false;
        }
        else{
            var element = document.getElementById("address");
            element.classList.remove("radbox");
            var element = document.getElementById("erroraddress");
            element.classList.add("gu-hide");

        }


    }

    function validUser() {

        let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }
        let y = document.forms["myForm"]["mobile"].value;
        if (y == "") {
            var element = document.getElementById("mobile");
            element.classList.add("radbox");
            var element = document.getElementById("errormobile");
            element.classList.remove("gu-hide");
            //alert("Name must be filled out");
            return false;
        }else{
            var element = document.getElementById("mobile");
            element.classList.remove("radbox");
            var element = document.getElementById("errormobile");
            element.classList.add("gu-hide");

        }
        let k = document.forms["myForm"]["doctor"].value;
        if (k == "") {

            var element = document.getElementById("doctor");
            element.classList.add("radbox");
            var element = document.getElementById("errordoctor");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("doctor");
            element.classList.remove("radbox");
            var element = document.getElementById("errordoctor");
            element.classList.add("gu-hide");

        }
        // const checked = document.querySelector('#accept:checked') !== null;
        if (!(document.querySelector('#styled-checkbox-1:checked') !== null)) {
            var element = document.getElementById("styled-checkbox-1");
            element.classList.add("radbox");
            var element = document.getElementById("errorstyled-checkbox-1");
            element.classList.remove("gu-hide");
            return false;
            }else{
            var element = document.getElementById("styled-checkbox-1");
            element.classList.remove("radbox");
            var element = document.getElementById("errorstyled-checkbox-1");
            element.classList.add("gu-hide");
            }
    }
    function validAuthUser() {
        let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }

        let y = document.forms["myForm"]["city"].value;
        if (y == "") {
            var element = document.getElementById("city");
            element.classList.add("radbox");
            var element = document.getElementById("errorcity");
            element.classList.remove("gu-hide");
            //alert("Name must be filled out");
            return false;
        }else{
            var element = document.getElementById("city");
            element.classList.remove("radbox");
            var element = document.getElementById("errorcity");
            element.classList.add("gu-hide");

        }

        let k = document.forms["myForm"]["province"].value;
        if (k == "") {

            var element = document.getElementById("province");
            element.classList.add("radbox");
            var element = document.getElementById("errorprovince");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("province");
            element.classList.remove("radbox");
            var element = document.getElementById("errorprovince");
            element.classList.add("gu-hide");

        }

        let l = document.forms["myForm"]["phone"].value;
        if (l == "") {

            var element = document.getElementById("phone");
            element.classList.add("radbox");
            var element = document.getElementById("errorphone");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("phone");
            element.classList.remove("radbox");
            var element = document.getElementById("errorphone");
            element.classList.add("gu-hide");

        }
    }
    function validAuthDoctor() {
        let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }
        let k = document.forms["myForm"]["category"].value;
        if (k == "") {

            var element = document.getElementById("category");
            element.classList.add("radbox");
            var element = document.getElementById("errorcategory");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("category");
            element.classList.remove("radbox");
            var element = document.getElementById("errorcategory");
            element.classList.add("gu-hide");

        }
        let l = document.forms["myForm"]["hospital_name"].value;
        if (l == "") {

            var element = document.getElementById("hospital_name");
            element.classList.add("radbox");
            var element = document.getElementById("errorhospital_name");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("hospital_name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorhospital_name");
            element.classList.add("gu-hide");

        }

        let y = document.forms["myForm"]["referral_code"].value;
        if (y == "") {

            var element = document.getElementById("referral_code");
            element.classList.add("radbox");
            var element = document.getElementById("errorreferral_code");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("referral_code");
            element.classList.remove("radbox");
            var element = document.getElementById("errorreferral_code");
            element.classList.add("gu-hide");

        }


       

       

        let a = document.forms["myForm"]["address"].value;
        if (a == "") {

            var element = document.getElementById("address");
            element.classList.add("radbox");
            var element = document.getElementById("erroraddress");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("address");
            element.classList.remove("radbox");
            var element = document.getElementById("erroraddress");
            element.classList.add("gu-hide");

        }
    }


    function validAuthAgent() {
        let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }

        let y = document.forms["myForm"]["city"].value;
        if (y == "") {
            var element = document.getElementById("city");
            element.classList.add("radbox");
            var element = document.getElementById("errorcity");
            element.classList.remove("gu-hide");
            //alert("Name must be filled out");
            return false;
        }else{
            var element = document.getElementById("city");
            element.classList.remove("radbox");
            var element = document.getElementById("errorcity");
            element.classList.add("gu-hide");

        }

        let k = document.forms["myForm"]["province"].value;
        if (k == "") {

            var element = document.getElementById("province");
            element.classList.add("radbox");
            var element = document.getElementById("errorprovince");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("province");
            element.classList.remove("radbox");
            var element = document.getElementById("errorprovince");
            element.classList.add("gu-hide");

        }

        let l = document.forms["myForm"]["phone"].value;
        if (l == "") {

            var element = document.getElementById("phone");
            element.classList.add("radbox");
            var element = document.getElementById("errorphone");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("phone");
            element.classList.remove("radbox");
            var element = document.getElementById("errorphone");
            element.classList.add("gu-hide");

        }
    }






    function validAuthMedicine() {
        let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }

        let y = document.forms["myForm"]["description"].value;
        if (y == "") {
            var element = document.getElementById("description");
            element.classList.add("radbox");
            var element = document.getElementById("errordescription");
            element.classList.remove("gu-hide");
            //alert("Name must be filled out");
            return false;
        }else{
            var element = document.getElementById("description");
            element.classList.remove("radbox");
            var element = document.getElementById("errordescription");
            element.classList.add("gu-hide");

        }

        let k = document.forms["myForm"]["price"].value;
        if (k == "") {

            var element = document.getElementById("price");
            element.classList.add("radbox");
            var element = document.getElementById("errorprice");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("price");
            element.classList.remove("radbox");
            var element = document.getElementById("errorprice");
            element.classList.add("gu-hide");

        }

    }

    function validAuthUsers() {
        let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }

        let y = document.forms["myForm"]["email"].value;
        if (y == "") {
            var element = document.getElementById("email");
            element.classList.add("radbox");
            var element = document.getElementById("erroremail");
            element.classList.remove("gu-hide");
            //alert("Name must be filled out");
            return false;
        }else{
            var element = document.getElementById("email");
            element.classList.remove("radbox");
            var element = document.getElementById("erroremail");
            element.classList.add("gu-hide");

        }

        let k = document.forms["myForm"]["password"].value;
        if (k == "") {

            var element = document.getElementById("password");
            element.classList.add("radbox");
            var element = document.getElementById("errorpassword");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("password");
            element.classList.remove("radbox");
            var element = document.getElementById("errorpassword");
            element.classList.add("gu-hide");

        }

        let l = document.forms["myForm"]["job_title"].value;
        if (l == "") {

            var element = document.getElementById("job_title");
            element.classList.add("radbox");
            var element = document.getElementById("errorjob_title");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("job_title");
            element.classList.remove("radbox");
            var element = document.getElementById("errorjob_title");
            element.classList.add("gu-hide");

            let l = document.forms["myForm"]["job_title"].value;
        }
        let m = document.forms["myForm"]["role"].value;
        if (m == "") {

            var element = document.getElementById("role");
            element.classList.add("radbox");
            var element = document.getElementById("errorrole");
            element.classList.remove("gu-hide");
            return false;
        }else{
            var element = document.getElementById("role");
            element.classList.remove("radbox");
            var element = document.getElementById("errorrole");
            element.classList.add("gu-hide");

        }
    }

        function  validationUserDetails() {
        let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("exampleInputEmail1");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("exampleInputEmail1");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("exampleInputEmail1");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }
    }
    
    
    function  validationEditUser() {
        let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }
    }

    function validCategory()
    {
    let x = document.forms["myForm"]["name"].value;
        console.log(x);
        if (x == "") {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");

            return false;
        }
        if (!/^[a-zA-Z' '.]*$/g.test(x)) {
            var element = document.getElementById("name");
            element.classList.add("radbox");
            var element = document.getElementById("errorname");
            element.classList.remove("gu-hide");
            document.myForm.name.focus();
            return false;
        }else{
            var element = document.getElementById("name");
            element.classList.remove("radbox");
            var element = document.getElementById("errorname");
            element.classList.add("gu-hide");

        }

        // let y = document.forms["myForm"]["description"].value;
        // if (y == "") {
        //     var element = document.getElementById("description");
        //     element.classList.add("radbox");
        //     var element = document.getElementById("errordescription");
        //     element.classList.remove("gu-hide");
        //     //alert("Name must be filled out");
        //     return false;
        // }else{
        //     var element = document.getElementById("description");
        //     element.classList.remove("radbox");
        //     var element = document.getElementById("errordescription");
        //     element.classList.add("gu-hide");

        // }

 
        
    }

