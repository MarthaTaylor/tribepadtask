import axios from 'axios';

/* create our own axios server from which we can send the request too
axios create our own axios server that we can send the 
requests to and then export this one throughout our entire app
baseUrls: is going to be part of api add i am always using in every request i make
create is a func of axios
*/

export default axios.create({
    baseUrl: "https://bbc.uat-tribepad.com/members/oauth/api/job/search.json&pageNum=1",
})
   

   