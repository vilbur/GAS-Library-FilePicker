function onOpen() 
{
  SpreadsheetApp.getUi().createMenu('Google Picker')
      .addItem('Folder Picker', 'showFolderPicker')
      .addItem('File Picker', 'showFilePicker')
      .addToUi();
}


function showFolderPicker()
{
  
  showPicker('Browse a folder',{
    mimeTypes:'application/vnd.google-apps.folder', // List of mimetypes: https://developers.google.com/drive/api/v3/mime-types
    IncludeFolders:true,
    SelectFolderEnabled:true,
    GRID: false,

  })

}


function showFilePicker()
{
  
  showPicker('Browse a file',{
    mimeTypes:'application/vnd.google-apps.file',
    IncludeFolders:false,
    SelectFolderEnabled:false,
    GRID: true,
    
  })

}


//
///**
// * Displays an HTML-service dialog in Google Sheets that contains client-side
// * JavaScript code for the Google Picker API.
// */
//function showPicker() {
//  var html = HtmlService.createHtmlOutputFromFile('picker.html')
//      .setWidth(600)
//      .setHeight(425)
//      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
//  SpreadsheetApp.getUi().showModalDialog(html, 'Select Folder');
//}
/**
 * Displays an HTML-service dialog in Google Sheets that contains client-side
 * JavaScript code for the Google Picker API.
 */
function showPicker(title, config) 
{  
  var html_template = HtmlService.createTemplateFromFile('picker.html')
  
  html_template.config = config;
  
   var html =  html_template
                     .evaluate()
                     .setWidth(600)
                     .setHeight(425) 
                     .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
  SpreadsheetApp.getUi().showModalDialog(html,title );
}


function getOAuthToken() {
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}