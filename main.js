const {app,BrowserWindow,Menu} = require('electron');
const url = require('url');
const path = require('path');

//While ready for production mode
// uncomment this 
// process.env.NODE_ENV = 'production'

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
            enableRemoteModule:false
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol:'file:',
        slashes:true
    }));
    //Quit app when closed
    mainWindow.on('closed',function(){
        app.quit();
    })
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu)
})


const menuTemplate = [
    {
        label:'profile',
    },
    {
        label:'Settings',
    }
];

if(process.env.NODE_ENV!=='production'){
    menuTemplate.push({
        label:'DevTools',
        submenu:[{
           label:'toggle Devtools',
           accelerator:process.platform =='darwin'?'Command+Shift+I':'Ctrl+Shift+I',
            click(item,focusedWindow){
                focusedWindow.toggleDevTools();
            }
            
        },
        {
            role:'reload'
        }]
    })
}