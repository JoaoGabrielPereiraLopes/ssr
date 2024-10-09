function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, content) => {
      if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Erro ao carregar o arquivo.');
      } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
      }
  });
}
function retorno_imagem(res,nomearquivo){
  serveFile(res,`../logo/${nomearquivo}`,'image/jpeg',function (err, data){
    return data
  });
}
function css(res,nomearquivo){
  serveFile(res,`../htmls/${nomearquivo}`,'text/css',function (err, data){
    if(err){
      console.log(err)
    }
    return data
  });
}
else if (nomearquivo.endsWith('.jpeg')) {
  retorno_imagem(res,q.pathname)
}
else if (nomearquivo.endsWith('.css')) {
  css(res,q.pathname)
}
