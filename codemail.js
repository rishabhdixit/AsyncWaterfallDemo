var mailer = require('nodemailer');
var fs = require('fs');
mailer.SMTP = {
    host: 'smtp.gmail.com',
    use_authentication: true,
    user: 'rishabh.dixit@intelligrape.com',
    pass: 'abcde12345'
};

fs.readFile("./waterfalldemo.js", function (err, data) {
    mailer.send_mail(
        {   sender: 'rishabh',
            to: 'sakshi@intelligrape.com',
            subject: 'Attachment!',
            body: 'this is the content of waterfall file',
            attachments: [
                {'filename': 'waterfalldemo.js', 'contents': data}
            ]
        }, function (error, success) {
            if(err)
            console.log("there is some error: "+err);
            else
            console.log(success);
        });
});


