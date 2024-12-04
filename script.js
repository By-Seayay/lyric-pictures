window.onload = function () {
  fetch('image_links.txt')
  .then(response => response.text())
  .then(text => {
      // 将文本按行分割成数组
      const lines = text.split('\n');
      // 过滤掉空行（可能存在的情况）
      const validLines = lines.filter(line => line.trim()!== '');
      // 随机选择一行（获取一个随机索引）
      const randomIndex = Math.floor(Math.random() * validLines.length);
      const randomLink = validLines[randomIndex];
      // 进行页面跳转
      window.location.href = randomLink;
    })
  .catch(error => {
      console.error('读取文件出错:', error);
    });
};
