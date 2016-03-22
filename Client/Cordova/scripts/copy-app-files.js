module.exports = function(context) {
	var fs = require('fs');
	var platforms = context.opts.platforms;
	var folderNamesToCopy = [
		'images',
		'scripts',
		'styles',
		'views'];

	var fileNamesToCopy = [
		{
			from: 'Material/bower.json',
			to: 'bower.json'
		},
		{
			from: 'Material/package.json',
			to: 'package.json'
		},
		{
			from: 'Material/app/index.html',
			to: 'index.html'
		}
	];

	var folderNamesToSkip = [
		'node_modules'];

	function copyDir(from, to) {
		if (!fs.existsSync(to)) {
			console.log("creating " + to);
			fs.mkdirSync(to);
		}
		var items = fs.readdirSync(from);
		for (var i in items) {
			var path = from + '/' + items[i];
			var dstPath = to + '/' + items[i];
			var stats = fs.statSync(path);
			if (stats.isDirectory()) {
				if (folderNamesToSkip.indexOf(items[i]) == -1) {
					copyDir(path, dstPath);
				}
			} else {
				copyFile(path, dstPath);
			}
		}
	}

	function copyFile(from, to) {
		console.log("copying " + from + " to " + to);
		fs.createReadStream(from).pipe(fs.createWriteStream(to));
	}
	
	function deleteFolderRecursive(path) {
		if (fs.existsSync(path)) {
			fs.readdirSync(path).forEach(function(file, index){
				var curPath = path + "/" + file;
				if(fs.lstatSync(curPath).isDirectory()) { //recurse
					deleteFolderRecursive(curPath);
				} else { //delete file
					fs.unlinkSync(curPath);
				}
			});
			fs.rmdirSync(path);
		}
	};

	//deleteFolderRecursive("www");
	//fs.mkdirSync("www");
	function copyContent(copyTo) {
		for (var folderNameInd in folderNamesToCopy) {
			copyDir("../app/" + folderNamesToCopy[folderNameInd], copyTo + "/" + folderNamesToCopy[folderNameInd]); //root begins from config.xml
		}
		copyFile("../app/index.html", copyTo + "/index.html");
		copyFile("../bower.json", copyTo + "/bower.json");
		copyFile("../package.json", copyTo + "/package.json");
	}
	
	for (var i in platforms) {
		switch (platforms[i]) {
		case "android":
			copyContent("www");
			break;
		case "browser":
			copyContent("www");
			break;
		case "ios":
			break;
		default:
			throw "unknown platform";
		}
	}
}