const {app,BrowserWindow,Menu} = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({ 
    frame:false,
    width:800,
    height:500,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false,
      enableRemoteModule:true
  }
   });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  win.on("closed", () => {
    app.quit();
  });
  //win.removeMenu();
}

app.on("ready", createWindow);
