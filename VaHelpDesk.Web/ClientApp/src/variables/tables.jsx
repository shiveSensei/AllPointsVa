// ##############################
// // // javascript library for creating tables
// #############################

// ##############################
// // // Hardware Table
// #############################

const hardwaresTable = {
    metadata: {
        name: "Hardwares",
        subtext: "Add a device",
        color: "success"
    },
    head:["Serial", "Name", "Warranty End Date"]

};


// ##############################
// // // Facility Table
// #############################

const facilitiesTable = {
    metadata: {
        name: "Facilities",
        subtext: "Add a Facility",
        color: "success"
    },
    head: ["Name", "Address"]

};

module.exports = {
  hardwaresTable,
  facilitiesTable
  
};
