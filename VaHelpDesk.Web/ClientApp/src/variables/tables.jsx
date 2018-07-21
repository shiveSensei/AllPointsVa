// ##############################
// // // javascript library for creating tables
// #############################

// ##############################
// // // Hardware Table
// #############################

const hardwaresTable = {
    metadata: {
        name: "Hardwares",
        subtext: "Here are the hardwares deployed",
        color: "success"
    },
    head:["Serial", "Name", "Facility", "Warranty"]

};


// ##############################
// // // Facility Table
// #############################

const facilitiesTable = {
    metadata: {
        name: "Facilities",
        subtext: "All Facilities",
        color: "success"
    },
    head: ["Name", "Address Line 1", "Address Line 2", "City", "State", "Zip"]

};

module.exports = {
  hardwaresTable,
  facilitiesTable
  
};
