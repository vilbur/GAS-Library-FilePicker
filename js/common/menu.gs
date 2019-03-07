function addMenu()
{
  SpreadsheetApp.getUi().createMenu('Google Picker')
      .addItem('File Picker', 'showFilePicker')
      .addItem('Folder Picker', 'showFolderPicker')
      .addToUi();
}