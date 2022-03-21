package com.springrest2.Application;


import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class UserValidationController
{
    @RequestMapping(value = "/validate/{username}/{password}",method = RequestMethod.GET)
    public String validateUser(@PathVariable String  username, @PathVariable String password)
    {
        if(username.equals("RISHABH") && password.equals("GANGWAR@1234"))
            return "Valid User";
        else
            return "Invalid User";
    }
}


