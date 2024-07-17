function numbers_F(corp_phone, corp_mobile, corp_fax, corp_email) {
    var myArray = new Array();
    var numbers;
    var numberson;
    var checkOne;
    var checkTwo;
    var checkThree;
    var corp_phone;
    var corp_mobile;
    var corp_fax;
    var corp_email;

    if (corp_phone != "") {
        corp_phone = "Phone " + corp_phone;
        myArray.push(corp_phone)
    }

    if (corp_mobile != "") {
        corp_mobile = "Mobile " + corp_mobile;
        myArray.push(corp_mobile)
    }

    if (corp_fax != "") {
        corp_fax = "FAX " + corp_fax;
        myArray.push(corp_fax)
    }

    if (corp_email != "") {
        corp_email = "Email " + corp_email;
        myArray.push(corp_email)
    }


    if (myArray.length == 4) {
        checkOne = myArray.toString();
        checkTwo = checkOne.replace(",", " | ");
        checkThree = checkTwo.replace(",", " \n")
        numberson = checkThree.replace(",", " | ");
    } else if (myArray.length == 3) {
        checkOne = myArray.toString();
        checkTwo = checkOne.replace(",", " | ");
        numberson = checkTwo.replace(",", " \n")
    } else if (myArray.length == 2) {
        checkOne = myArray.toString();
        numberson = checkOne.replace(",", " | ");
        //    } else if (myArray.length == 1) {
    } else {
        checkOne = myArray.toString();
        numberson = checkOne;
    }

    numbers = numberson;
    return numbers;
}

