const fs=require('fs-extra')

function DateTimestampS(){
    var date=new Date()
    var dateTimestamp  = date.getDate()+'_'+(date.getMonth()+1)+'_'+date.getFullYear()+'_'+date.getHours()+'hh_'+date.getMinutes()+'mm_'+date.getSeconds()+'ss_'+date.getMilliseconds()+'ms'
    return dateTimestamp
}

var src='C:/Users/pc/Documents/Cypress_workspace/cypress/reports/index.html'
var dest = 'C:/Archeived_Reports/'+'index_'+DateTimestampS()+'.html'

//fs.moveSync(src,dest,{overwrite:true})
fs.copyFileSync(src,dest,fs.constants.COPYFILE_FICLONE)