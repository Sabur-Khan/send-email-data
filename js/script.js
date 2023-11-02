const btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    console.log("ami asi");
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const body = 'Name: ' + name + '<br/>' + 'Phone: ' + phone + '<br/>' + 'Message: ' + message + '<br/>'

    if(name === '' | phone === '' | email === '' | message === '' ){
        alert("please give a value")
        return
    }else {
        Email.send({
            SecureToken: "aec68dc2-8bd5-48b3-a24f-ff07f227a137",
            To: 'soburkhan210@gmail.com', //Ai email ta holo ami jetate user ar data neta cacce sai email ta deta hobe
            From: "soburkhan.dev@gmail.com", // elasticemail.com ar account ar email
            Subject: "Contact Message",
            Body: body
        }).then(
            message => alert("Email sent")
        );
    }



})