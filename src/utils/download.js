/*
 * @Author: your name
 * @Date: 2021-09-06 13:50:29
 * @LastEditTime: 2021-09-06 13:58:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tianAnd:\work\project\isearch\src\utils\download.js
 */
export const downloadFile = (content, fileName) => {
  const blob = new Blob([content]);
  const a = document.createElement("a");
  const url = window.URL.createObjectURL(blob);
  const filename = fileName;
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

 