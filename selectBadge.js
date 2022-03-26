const licensePicked= (license)=>{
    switch(license) {
           case   'MIT License': 
           return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
           break;
           case 'Mozilla Public License 2.0':
           return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'; 
          
         }
    }

    

    module.exports = {
      licensePicked
     
    };
    
    

