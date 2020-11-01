/**
 * GDriveのファイルのURLを得る.
 * @param id ファイルID
 * @return return URL
 */
function doGet() {
  //var html = HtmlService.createHtmlOutputFromFile('index');
  var html = HtmlService.createTemplateFromFile('team1');
  return html.evaluate();
}
function getFileUrl(id){
  var url = DriveApp.getFileById(id).getDownloadUrl();
  return url + '&access_token=' + ScriptApp.getOAuthToken();
}