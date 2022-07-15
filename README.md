# everyday-utilz

**everyday-utilz** is an open source, library of **Javascript** utils to reduce development time and make development easier.

It look's like :

> `const text = ucAllFirst("we are here")`
> `console.log(text)`

# Install

      npm i everyday-utilz

# Usage

🔴**IMPORTANT**❗
Importing selected functions into your **project**

     import { isEmail, isEmptyString } from "everyday-utilz";

Applying it to your code!!!

     const [email, setEmail] = useState("")
     const [emailError, setEmailError] = useState(false)
     const [userName, setUserName] = useState("")
     const [userNameError, setUserNameError] = useState(false)

     const validateForm = () => {
             if(!isEmail(email)){
    	             setEmail("not a valid email")
    	            }
    	     if(isEmptyString()) {
    	            setUserName("username required")
    	            }
    	   }



## Contributions

The main goal is to get developers to add up their everyday javascript utility functions to speed up development time and help other developers.

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/ayotunde-codes/everyday-utilz)

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

- [github/ayotunde-codes](https://github.com/ayotunde-codes)
- [twitter/ayotundeObasa](https://twitter.com/ayotundeObasa)
