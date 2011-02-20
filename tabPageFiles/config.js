/*
 * Config.js, an integral part of the BANTP package. All settings are stored here.
 * @package: Bad Ass New Tab Page
 * @author: Pierce Moore
 */

// First, a versioning variable for later checking. 
var currentVersion = "0.1"; // Version 0.1, working version

// Let's check if the extension was just installed
isFirstInstall(currentVersion);

// Once installed, let's build an object of all our important data.
var data = parseDatabase();

// Now, we set a few handy session variables..
var debug = data.dataPrefs.developerMode;

// A little awareness for those of us curious about debug state.
console.log("Global debug set to " + debug + ".");

// Let the developers out there see what we have stored in the data object...
if(debug) { console.log(data); } 
// Let's check to see if the user has databases set up...
//if(!checkDatabases()) { alert("Unable to initialize Bad Ass New Tab Page extension for Google Chrome. Please try reinstalling this extension."); }
