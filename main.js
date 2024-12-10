const {app, BrowserWindow: browserWindow, screen} = require('electron'); // Maintain camel case consistency


function createAppWindow() {
   const {width, height} = screen.getPrimaryDisplay().workAreaSize; // Store device screen's available area
   const appWindow = new browserWindow({width, height, frame: false, webPreferences: {nodeIntegration: true}});
   appWindow.loadFile('content.html'); // Handle HTML window page conversion here; cannot create another JS
   /* Erm, what the sigma? */
}


app.whenReady().then(() => {
   createAppWindow(); // TBU
   app.on('activate', () => {if (browserWindow.getAllWindows().length === 0) {createAppWindow();}}); // TBU
}); app.on('window-all-closed', () => {if (process.platform !== 'darwin') {app.quit();}}); // MacOS default
