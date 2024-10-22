Até então, o antigo projeto API tinha todos os verbos (POST, GET, PUT, etc). 

Agora o cenário irá mudar. O novo projeto, a porta de entrada sera a pasta controllers (Porta de entrada, comunicação com o mundo externo).

O Service tem a responsabilidade de tomar ações que a controller não pode resolver. 

A Service nao faz ideia de quem é o banco -> repositories (sabe conversar com o banco)

