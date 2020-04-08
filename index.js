let json2ts = require("json2ts");
var fs = require('fs');

var path = require('path');
//输入文件路径
let inDir = path.join(__dirname, 'data/TeaGameData.json');
//输出文件路径
let outDir = path.join(__dirname, 'interface/TeaData.ts');

let TsContent = '';


// 异步读取
fs.readFile(inDir, function (err, data) {
  if (err) {
    return console.error(err);
  }

  let json = JSON.parse(data.toString())
  for (const key in json) {
    console.log(key);
    let jsonItem = json[key][0];
    jsonItem = JSON.stringify(jsonItem)
    let res = exportInterFace(jsonItem, key)
    TsContent += res
    TsContent += "\n"
  }
  creatOutFile()
  writeTs()
});

/**
 * 
 * @param {string} content  内容
 * @param {string} name 接口名称
 * @param {string} isExport 是否导出 可选 export declare
 */
function exportInterFace(content, name, isExport = '') {
  let result = json2ts.convert(content, name, isExport);
  console.log(result);
  return result;
}
function creatOutFile() {
  fs.exists(outDir, function (exists) {
    if (exists) {
      console.log("文件存在")
    }
    if (!exists) {
      fs.mkdir(outDir, function (error) {
        if (error) {
          return console.log(error);
        }
        console.log('创建目录成功');
      })
    }
  })
}

function writeTs() {
  fs.writeFile(outDir, TsContent, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile(outDir, function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
    });
  });
}