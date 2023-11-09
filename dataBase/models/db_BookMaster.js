const mongoose = require("mongoose");

const db_BookMasterSchema = new mongoose.Schema({
    bookName:{
        type:String,
        require:true

    },
    Auther: {
    type: String,
  },
  genre:{
    type:String
  }
});

const db_BookMaster = mongoose.model("db_BookMaster", db_BookMasterSchema);

module.exports = db_BookMaster;