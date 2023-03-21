//Converting XLSX file to Json

var XLSX =require('xlsx');

var fs = require('fs')

//Create a work book Object

var workbook = XLSX.readFile('spreadsheets/userData.xlsx');

// Create worksheet

var worksheet = workbook.Sheets['Sheet1']

//Convert xlsx to Json Object

var user_data = XLSX.utils.sheet_to_json(worksheet)

console.log(user_data);

fs.writeFile('cypress/fixtures/module1/user_data.json', JSON.stringify(user_data), (err) =>{

    if(err){

        console.log(err)
        return
    }
})


//cy.exec(node )
// cy.parseXlsx('cypress/fixtures/downloads/'+month+"_"+year+'_sitestatistics.xlsx').then( (jsonData) =>{
//     cy.fixture('siteStatisticsTemplate').then((siteStatisticsrel) => {
//     expect(jsonData[0].data[0]).to.deep.equal(siteStatisticsrel.siteHeading)
//    expect(jsonData[0].data[1]).includes("File generated on " +help.getUTCTimeDate())
//     expect(jsonData[0].data[4]).to.contain(month)
//     var countKey = Object.keys(jsonData[0].data[5]).length;
//     for(var index=1;index<countKey;index++){
//      expect(jsonData[0].data[5][index]).to.deep.equal(siteStatisticsrel.Invoicecolumns[index])
//     if(jsonData[0].data[4][index]!=null){
//      expect(jsonData[0].data[4][index]).to.deep.equal(siteStatisticsrel.months[index])}
//        }
//     })})
//     cy.reportLogKV("Site Feature","Invoice Report")
//------ Validate the Invoice Data