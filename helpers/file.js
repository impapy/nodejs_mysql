class PassFile {
  constructor(files) {
    this.files = files;
  }

 

  static passFiles(files) {
    const filesPath = [];
files.forEach(element => {
  
      filesPath.push(element.path);
  });

  return filesPath
  }
 
}
module.exports = PassFile;
