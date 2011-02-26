/**

Copyright (c) 2011 Pierce Moore, RefreshedWeb.com, and NerdTraining.info
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the names of Pierce Moore, RefreshedWeb.com, NerdTraining.info,  nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

**/

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