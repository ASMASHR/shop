
var express = require('express');
var Messageroute = express.Router();
const Message=require('../Models/Message');
const nodemailer = require("nodemailer");
hogan = require('hogan.js'),
inlineCss = require('inline-css');
        fs = require('fs'),
// Save Messages
Messageroute.post('/SendMessage', async(req, res) => {
    let {Name,useremail,MessageTxt}=req.body
    let msg={userName:Name,UserEmail:useremail,MessageText:MessageTxt,isOpened:false,isDeleted:false} 
try {
 let NewMsg= new Message(msg)
 NewMsg.save()
   res.status(200).send({msg : "the message is sent" , NewMsg})
} catch (error) {
  res.status(500).send({error: 'Could not send the Msg '})
}

});
// All messages
Messageroute.get('/AllMessages', async(req, res) => {
try {
 let allMsg=await Message.find().sort('-createdAt')
   res.status(200).send({msg : "All Messages" , allMsg})
} catch (error) {
  res.status(500).send({error: 'Could not get Msg '})
}

});



// 
// send Message
Messageroute.post('/confirmationMail', async(req, res) => {
   let {userInfo,CmdInfo}=req.body
      //  answer will be like:
  let transporter = nodemailer.createTransport({
          service: 'gmail',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            // put your email and your pass word to respond messages 
                  user: "asmasahraouisites12@gmail.com", 
                pass: "admin.123"
            },
            tls:{rejectUnauthorized: false}
    })

    try {
        
        //Load the template file
         const templatebody = fs.readFileSync(__dirname+"/template/Confirmcommand.html");
        //Load and inline the style
        const templateStyled = await inlineCss(templatebody.toString(), {url: "file://"+__dirname+"/template/"});
        //Inject the data in the template and compile the html
        const templateCompiled = hogan.compile(templateStyled);
         console.log("TotalProducts",CmdInfo.TotalProducts)
        const templateRendered = templateCompiled.render({userInfo:userInfo,CmdInfo:CmdInfo,TotalProducts:CmdInfo.TotalProducts});
        const emailData = { 
            to: userInfo.email, 
            from: "asmasahraouisites12@gmail.com", 
            subject: "Confirmation de la commande ",
            html: templateRendered 
        };
	
    	//Send the email
        transporter.sendMail(emailData, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
          res.send(info)
        }})
        
    } 
    catch(e){
        console.error(e);
    }      
})

Messageroute.post('/sendUserInfo', async(req, res) => {
   let {userInfo,newpass}=req.body
    
    let transporter = nodemailer.createTransport({
          service: 'gmail',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            // put your email and your pass word to respond messages 
                  user: "asmasahraouisites12@gmail.com", 
                pass: "admin.123"
            },
            tls:{rejectUnauthorized: false}
    })

    

   
    try {
        
        //Load the template file
         const templatebody = fs.readFileSync(__dirname+"/template/templateAuth.html");
        //Load and inline the style
        const templateStyled = await inlineCss(templatebody.toString(), {url: "file://"+__dirname+"/template/"});
        //Inject the data in the template and compile the html
        const templateCompiled = hogan.compile(templateStyled);
        
        const templateRendered = templateCompiled.render({userInfo:userInfo,newpass:newpass});

        const emailData = { 
            to: userInfo.email, 
            from: "asmasahraouisites12@gmail.com", 
            subject: "Bienvenue!",
            html: templateRendered 
        };
	
    	//Send the email
        // await transporter.sendMail(emailData);
            transporter.sendMail(emailData, function(err, info) {
         if (err) {
           console.log(err)
         } else {
           console.log(info);
           res.send(info)
         }})
        
    } 
    catch(e){
        console.error(e);
    }      
})

// Make message opened
Messageroute.put('/ReadMessage/:_id', async(req, res) => {
  let {_id} = req.params;
try {
  let messg=await Message.findByIdAndUpdate({_id},{isOpened:true})
  res.status(200).send({msg : "message saved as readed" , messg})
} catch (error) {
  res.status(500).send({error: 'Could not update message '})
}

});

Messageroute.put('/SendToTrash/:_id', async(req, res) => {
  let {_id} = req.params;
try {
  let messg=await Message.findByIdAndUpdate({_id},{isDeleted:true},{new: true})
  res.status(200).send({msg : "message saved as deleted" , messg})
} catch (error) {
  res.status(500).send({error: 'Could not update message '})
}

});

Messageroute.put('/DeleteMessage/:_id', async(req, res) => {
  let {_id} = req.params;
try {
  let messg=await Message.findByIdAndDelete({_id})
  res.status(200).send({msg : "message deleted" , messg})
} catch (error) {
  res.status(500).send({error: 'Could not delete message '})
}

});



// answer Message
Messageroute.post('/AnswerMessage', async(req, res) => {
   let {useremail,MessageText,ResponseTxt}=req.body
  //  answer will be like:
   let rep="<div><b>MyClAsS Response</b>"+"<p>"+ResponseTxt+"</p>"+"<div>"+ "<div><b> The Message Content </b>"+"<p>"+MessageText+"</p>"+"<div>" 
  let transporter = nodemailer.createTransport({
          service: 'gmail',
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            // put your email and your pass word to respond messages 
                user: "asmasahraouisites12@gmail.com", 
                pass: "admin.123"
                 
            },
            tls:{rejectUnauthorized: false}
    })
    let msg = {
        from: "asmasahraouisites12@gmail.com",
        to: useremail,
        subject: "response Mail",
        html: rep
        
    }
    transporter.sendMail(msg, function(err, info) {
         if (err) {
           console.log(err)
         } else {
           console.log(info);
         }})

});


module.exports = Messageroute
