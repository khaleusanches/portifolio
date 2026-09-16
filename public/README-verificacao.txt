google1bf3ffc9c7639e06.html é o arquivo de verificação do Google Search Console.

Não apague: o Search Console reconfere periodicamente, e sem o arquivo a propriedade
é desverificada e o site some dos relatórios.

Ele precisa responder no caminho exato, com a extensão .html e sem redirecionamento —
é por isso que o vercel.json não usa `cleanUrls`, que transformaria
/google1bf3ffc9c7639e06.html em um 308 para /google1bf3ffc9c7639e06.
