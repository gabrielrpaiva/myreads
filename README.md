├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.  
    ├── If.js # A comparative component that return a children elements according to the past variable. 
    ├── RelatedBooks.js # Component that render the releted books
    ├── SearchBooks.js # Component that render the specific searched books
    ├── setupTests.js # Setup for the test
    ├── Shelfs.js # Component that render the books shelfs    
    ├── icons # Helpful images
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
    └──common
            └──components
                        ├── ListBooks.js # Component that render the books
                        ├── ShelfOptions.js # Component that render the books shelf options
    util
       ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.  
    _tests__
        ├── # Contain the tests for the app. Pages that makes reference to the api, have not beeing tested.