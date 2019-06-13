if(process.env.NODE_ENV) {
    module.exports = {mongoURI: 
        "mongodb+srv://Buchi:rAE3JJ34qkEGgsyv@shopper-pmuji.mongodb.net/test?retryWrites=true&w=majority"} 
 } else {
     module.exports = { mongoURI:'mongodb://localhost/shopper-dev' }
 }


