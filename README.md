# Mongo-Image-Converter
This package helps you convert the images files you need to upload to mongoDB ((without)) GRIDfs or MULTER


# Installation
npm i --save mongo-image-converter

# Note on using with MONGOOSE

Please feel Free to use Grid-fs if you need to store files greater than (16mb) to MongoDB

Please use the middleware "body-parser" !!

example:

        const express = require('express');
        const app = express();
        const bodyParser = require('body-parser')

        app.use(bodyParser.json({limit: '16mb', extended: true}));     // Make sure you add these two lines
        app.use(bodyParser.urlencoded({limit: '16mb', extended: true}))    //Make sure you add these two lines

        mongoose.connect(uri,{          // pay attention to URI
            dbName:'Blog-Name',        // pay attention here
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        }).then(()=>{
        console.log('connected-to-DB');
        }).catch(err=>{
        console.log(err.message);
        })

// the main reason to use them is to prevent limiting the upload constrains

# Data Format
The data Format used in this module is ((data:image/png;base64)) and (( data:image/jpeg;base64 ))

-- The format will be so long to copy and paste, so please use React-Hooks or dynamic assigns in Angular to assign them to Image sources 

Please follow below for examples

# Adding the Converter in REACT

To pull the Converter in react 

        import {Convert} from 'mongo-image-converter';

# Creating the Helper function  [ add them in the desired place in REACT and Angular ]

It is important that you should use the function only with async and await !!

example:

    const convertImage = async (event) => {
        try {
        const convertedImage = await Convert(imageFile)
        if( convertedImage ){
        console.log(convertedImage);
        } else{
            console.log('The file is not in format of image/jpeg or image/png')
        }
    } 
    catch (error) {
        console.warn(error.message)
        }
    }


# Using in react
        
Get your input as a file and store the file using state, You can also use the useState method

example:

        import React, {useState} from 'react';

        const [imageFile, setImageFile] = useState('');

        function App() {
                const convertImage = async (event) => {
                try {
                        const convertedImage = await Convert(imageFile)
                        if( convertedImage ){
                                console.log(convertedImage);
                                // after this pass it to the backend using your fav API,
                        } else{
                                console.log('The file is not in format of image/jpeg or image/png')
                         }
                        }       
                catch (error) {
                        console.warn(error.message)
                        }
                        }
        
            return(
            <input type = 'file' onChange = {(e) => setImageFile( e.target.files[0] ) } />
            <button onClick = { convertImage } > Submit </ button>
        )}

        export default App;

# Uploading to MongoDB

You must declare the Mongoose Schema with a place for Image with type of "String"

this code below will get you started, you can add additional data if required

example: 
        const mongoose = require('mongoose')

        const schemaName = new mongoose.Schema({
            Image : {
                type : String,
                required: true
            }
        })

        module.exports = mongoose.model('schemaName', Schema)

# Uploading

The rest of all the process reamins the same, now you can upload Images and also retrive them as the regular method using "MONGOOSE", It will work the same way 

# Using the retrived data

The retrived data from the DataBase should be filtered for the correct field and set as a source to an image

        and set them to the source of an Image using the regular Methods in REACT and ANGULAR

        < img src = {The data pulled and filtered pointing the dataURL of the image} >





