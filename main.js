// const { app, BrowserWindow, Menu, ipcMain } = require("electron");
// const url = require("url");
// const path = require("path");

// //While ready for production mode
// // uncomment this
// //process.env.NODE_ENV = 'production'

// let mainWindow;

// app.on("ready", function () {
//   mainWindow = new BrowserWindow({
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//       enableRemoteModule: false,
//     },
//   });
//   mainWindow.loadURL(
//     url.format({
//       pathname: path.join(__dirname, "index.html"),
//       protocol: "file:",
//       slashes: true,
//     })
//   );
//   //Quit app when closed
//   mainWindow.on("closed", function () {
//     app.quit();
//   });
//   mainWindow.removeMenu();
//   const mainMenu = Menu.buildFromTemplate(menuTemplate);
//   Menu.setApplicationMenu(mainMenu);
// });
// ipcMain.on("item:add", function (e, age, gender) {
//   var python = require("child_process").spawn("python", ["ml.py", age, gender]);
//   python.stdout.on("data", function (data) {
//     console.log(data.toString("utf8"));
//     mainWindow.webContents.send("msg", data.toString("utf8"));
//   });
// });

// const menuTemplate = [
//   {
//     label: "profile",
//   },
//   {
//     label: "Settings",
//   },
// ];

// if (process.env.NODE_ENV !== "production") {
//   menuTemplate.push({
//     label: "DevTools",
//     submenu: [
//       {
//         label: "toggle Devtools",
//         accelerator:
//           process.platform == "darwin" ? "Command+Shift+I" : "Ctrl+Shift+I",
//         click(item, focusedWindow) {
//           focusedWindow.toggleDevTools();
//         },
//       },
//       {
//         role: "reload",
//       },
//     ],
//   });
// }

console.log("main working");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow();
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true,
    })
  );
  win.on("closed", () => {
    win = null;
  });
  win.removeMenu();
  win.setBackgroundColor("red");
}

app.on("ready", createWindow);
