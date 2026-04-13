📚 Sistemas Operacionais — Capítulo 1

🚀 1. Processos (O Coração da Execução)
Um processo é definido como um programa em execução. Ele não é apenas o código, mas todo o contexto necessário para que ele rode.

Composição: Espaço de endereçamento, registradores da CPU, contador de programa e pilha.

Tabela de Processos: Estrutura onde o SO salva o estado de um processo quando ele é interrompido para que possa ser retomado exatamente de onde parou.

Multiprogramação: A capacidade do SO de alternar a CPU entre vários processos ativos, criando a ilusão de execução simultânea.

Comunicação (IPC): Processos precisam interagir via sinais, compartilhamento de dados ou mensagens.

🧠 2. Gerenciamento de Memória
O SO gerencia como os programas acessam a memória física e protege o sistema de acessos indevidos.

Espaço de Endereçamento: Cada processo vê um intervalo de memória (ex: de 0 a um valor máximo) isolado de outros processos.

Memória Virtual: Técnica que utiliza o disco como extensão da memória RAM, permitindo rodar programas maiores que a capacidade física do hardware.

Proteção: O hardware impede que um processo comum altere dados do sistema operacional ou de outros usuários.

📂 3. Sistema de Arquivos e E/S
O SO abstrai a complexidade do hardware (discos, SSDs, USBs) através de uma estrutura lógica.

Abstração: Arquivos e diretórios permitem organizar dados sem que o usuário precise saber onde os bits estão fisicamente.

Arquivos Especiais: No Unix, dispositivos de hardware (como teclados ou discos) são representados como arquivos de caractere ou bloco.

Pipes: Ferramenta poderosa para comunicação, permitindo que a saída de um processo seja a entrada de outro (ex: cat arq | sort).

🛡️ 4. Proteção e Segurança
Mecanismos para garantir que apenas usuários autorizados acessem recursos específicos.

UID/GID: Identificação de Usuário e Grupo para controle de acesso.

Permissões Unix: O clássico sistema de 9 bits (rwx) que define quem pode Ler (Read), Escrever (Write) ou Executar (Execute).

🐚 5. Shell (A Interface)
O Shell não é o sistema operacional em si, mas o interpretador de comandos que serve de ponte entre o usuário e o núcleo (kernel).

Gerencia a criação de processos filhos.

Permite o redirecionamento de entrada/saída (> , < ) e execução em segundo plano (&).

📈 6. Evolução Tecnológica
O conceito de "Ontogenia recapitula a Filogenia" na computação explica que as tendências de hardware e software costumam se repetir. Ideias que eram usadas em Mainframes antigos (como virtualização e proteção) reapareceram nos minicomputadores e, posteriormente, nos microcomputadores modernos conforme sua potência aumentava.

💡 Partes Mais Importantes (Destaque)
Se você estiver estudando para uma prova ou entrevista, foque nestes 3 pilares:

A abstração de Processo: Como o SO alterna tarefas e salva estados na Tabela de Processos.

Memória Virtual: O desacoplamento entre o endereço que o programa usa e a memória física real.

Sistema de Arquivos: Como o SO padroniza o acesso a diferentes hardwares através de arquivos e diretórios.

Resumo gerado para fins acadêmicos..