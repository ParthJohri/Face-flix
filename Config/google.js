
const googleStrategy=require("passport-google-oauth2").Strategy;
require("dotenv").config()
 

module.exports=function(passport){
    passport.use(new googleStrategy({
        clientID:process.env.clientId,
        clientSecret:process.env.clientSecret,
        callbackURL:process.env.callbackURL,
        passReqToCallback:true
    },function(request,accessToken,refreshToken,profile,done){
        
        return done(null,profile)
    }))

    passport.serializeUser(function(user,done){
       
        done(null,user);
    })

    passport.deserializeUser(function(user,done){
        
        done(null,user);
    })
}
