# CRUD_BusinessIntelligence
 
Repositório do front-end de um projeto CRUD, uma aplicação muito simples mas com a idéia de ser completa.

A aplicação é capaz de manipular carros para venda (Create, Read, Update, Delete) e também manipular as vendas desses carros (Create, Read, Update, Delete). Além de possuir um dashboard com o resumo dos dados, feito em PowerBI.

Esse CRUD utiliza duas API's:

  API de recursos, feita em Node e SQL 
      REPOSITÓRIO: [https://github.com/HebertMoraes/API-NODE.JS-MVC-com-SQL-Server]

  API de Autenticação de usuário, feita em Node e utilizando um fake database em formato json.
      REPOSITÓRIO: [https://github.com/HebertMoraes/AuthenticationServer-Basic]
      

A página para ver o dashboard dos dados, fica no botão "Ver Dashboard" no ícone do usuário, onde é mostrado um iframe embed de um arquivo do PowerBI. E por se tratar de um recurso oficial da miscrosoft, é necessário logar com uma conta da Microsoft real para poder visualizar o dashboard. Nele, é apresentado um resumo sobre todas as vendas e os carros para vender, de modo geral, o faturamento total. O arquivo pode ser encontrado em uma pasta chamada "Arquivo_PowerBI" na pasta raiz deste repositório.

Porém este arquivo do PowerBI também obtém os dados da API de recursos, e como todas as requisições da API de recursos está com uma proteção de token JWT, é sempre necessário passar um Bearer token no header de authorization, coisa que esse front-end está fazendo, e então para fazer isso no arquivo do Power BI siga estes passos:
  ...
  
Depois que foi feita toda a auteração desejada no arquivo do PowerBI, é necessário publicá-lo, um recurso da microsoft. Para fazer isto, siga estes passos: 
  ...
