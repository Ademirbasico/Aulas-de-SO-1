# 📚 Sistemas Operacionais — Capítulo 1  
## Introdução e Fundamentos Teóricos

---

# 1. Introdução

## 1.1 Definição Formal

Um Sistema Operacional (SO) é um software fundamental que atua como intermediário entre o hardware e os programas aplicativos.

Ele fornece uma camada de abstração que simplifica o uso dos recursos físicos da máquina, permitindo que desenvolvedores e usuários não precisem lidar diretamente com detalhes elétricos ou arquiteturais do hardware.

---

## 1.2 Objetivos Principais

Os principais objetivos de um Sistema Operacional são:

- Abstração do hardware
- Gerenciamento eficiente de recursos
- Controle de concorrência
- Segurança e proteção
- Compartilhamento controlado
- Estabilidade do sistema

---

## 1.3 O Sistema Operacional como Gerenciador de Recursos

O SO gerencia diversos recursos do sistema, incluindo:

- Processador (CPU)
- Memória principal (RAM)
- Dispositivos de entrada e saída
- Armazenamento secundário
- Interfaces de rede

O gerenciamento adequado desses recursos é essencial para garantir desempenho e confiabilidade.

---

# 2. Estrutura Interna de um Sistema Operacional

## 2.1 Kernel

O Kernel é o núcleo do Sistema Operacional.

Ele executa em modo privilegiado e possui acesso direto ao hardware.

Funções do Kernel:

- Escalonamento de processos
- Gerência de memória
- Controle de dispositivos
- Implementação de chamadas de sistema
- Gerenciamento de interrupções

---

## 2.2 Modos de Execução

Existem dois modos principais:

### Modo Usuário
Programas comuns executam neste modo.

### Modo Kernel
O SO executa neste modo com acesso total ao hardware.

Essa separação aumenta a segurança e estabilidade.

---

## 2.3 Chamadas de Sistema

Chamadas de sistema são mecanismos que permitem que programas solicitem serviços ao Sistema Operacional.

Exemplos:

- Criar processos
- Abrir arquivos
- Alocar memória
- Comunicar-se com dispositivos

---

# 3. Evolução Histórica dos Sistemas Operacionais

---

# 3.1 Primeira Geração (1945–1955)

## Características Gerais

- Computadores baseados em válvulas
- Programação manual
- Ausência total de Sistema Operacional
- Um único programa executado por vez

A execução era feita por meio de painéis físicos e conexões elétricas.

---

# 3.2 Segunda Geração (1955–1965)

## Avanços Tecnológicos

- Substituição de válvulas por transistores
- Introdução de linguagens de alto nível
- Cartões perfurados

## Sistemas Batch (Lote)

Os sistemas em lote permitiam que vários programas fossem executados sequencialmente sem intervenção humana constante.

Limitações:

- Sem interação em tempo real
- Baixa utilização da CPU

---

# 3.3 Terceira Geração (1965–1980)

## Circuitos Integrados

A introdução de circuitos integrados reduziu tamanho e custo dos computadores.

## Multiprogramação

Permitiu manter vários programas simultaneamente na memória.

Enquanto um processo aguardava E/S, outro utilizava a CPU.

Isso aumentou significativamente a eficiência.

---

## 3.3.1 Time-Sharing

O compartilhamento de tempo dividia a CPU em pequenas fatias.

Cada usuário recebia tempo de processamento alternado.

Isso criou sistemas interativos.

---

## 3.3.2 Spooling

Spooling separa processamento e entrada/saída.

Dispositivos lentos são desacoplados do fluxo principal de execução.

---

# 4. Conceitos Fundamentais

---

# 4.1 Processos

## Definição

Um processo é um programa em execução.

Ele possui:

- Código
- Dados
- Pilha
- Contador de programa
- Estado

---

## 4.1.1 Estados do Processo

Um processo pode estar em:

- Novo
- Pronto
- Executando
- Esperando
- Finalizado

A transição entre estados é controlada pelo escalonador.

---

# 4.2 Threads

Threads são fluxos de execução dentro de um processo.

Elas compartilham:

- Memória
- Recursos
- Arquivos abertos

Mas possuem:

- Contador de programa próprio
- Registradores próprios

---

# 5. Gerência de Memória

---

## 5.1 Funções

- Alocação
- Liberação
- Proteção
- Compartilhamento

---

## 5.2 Técnicas

### Paginação
Divide memória em páginas fixas.

### Segmentação
Divide memória em segmentos lógicos.

### Memória Virtual
Permite executar programas maiores que a memória física disponível.

---

# 6. Escalonamento

O escalonador decide qual processo utilizará a CPU.

---

## 6.1 Algoritmos Comuns

- FIFO
- Round Robin
- Prioridade
- Escalonamento por múltiplas filas

---

# 7. Sistemas de Arquivos

Organizam dados em estrutura hierárquica.

Permitem:

- Criação
- Leitura
- Escrita
- Exclusão
- Controle de permissões

---

# 8. Conclusão Parcial

A evolução dos Sistemas Operacionais acompanha diretamente o avanço do hardware.

Cada geração trouxe novos desafios e soluções.
---

# 9. MULTICS

## 9.1 Contexto Histórico

O MULTICS (Multiplexed Information and Computing Service) foi um sistema operacional desenvolvido na década de 1960.

Ele foi projetado para suportar múltiplos usuários simultaneamente com alto nível de segurança e confiabilidade.

Participaram do projeto:
- MIT
- Bell Labs
- General Electric

---

## 9.2 Objetivos do Projeto

O MULTICS buscava:

- Alta disponibilidade
- Compartilhamento eficiente
- Segurança avançada
- Estrutura modular

---

## 9.3 Contribuições Técnicas

Apesar de não ter sido um sucesso comercial, o MULTICS introduziu conceitos fundamentais:

- Hierarquia de arquivos
- Controle de acesso refinado
- Memória segmentada
- Segurança baseada em níveis

Esses conceitos influenciaram diretamente o UNIX.

---

# 10. UNIX

## 10.1 Origem

O UNIX foi desenvolvido nos laboratórios Bell por Ken Thompson e Dennis Ritchie.

Ele surgiu como uma versão simplificada e mais prática inspirada no MULTICS.

---

## 10.2 Filosofia UNIX

A filosofia UNIX é baseada em princípios claros:

- Faça uma coisa e faça bem feita
- Pequenos programas especializados
- Modularidade
- Uso de texto como interface universal

---

## 10.3 Estrutura Hierárquica

O sistema de arquivos UNIX organiza tudo em uma árvore única iniciada pela raiz:

/
├── bin
├── etc
├── home
├── usr
└── var

Tudo no UNIX é tratado como arquivo, inclusive dispositivos.

---

## 10.4 Shell

O Shell é o interpretador de comandos.

Ele permite:

- Execução de programas
- Encadeamento com pipes
- Redirecionamento de entrada e saída

---

# 11. POSIX

## 11.1 Definição

POSIX (Portable Operating System Interface) é um padrão criado para garantir compatibilidade entre sistemas UNIX-like.

---

## 11.2 Objetivos

- Padronizar chamadas de sistema
- Garantir portabilidade de software
- Reduzir incompatibilidades

---

## 11.3 Impacto

Sistemas como Linux e macOS seguem o padrão POSIX em grande parte.

Isso permite que programas escritos para um sistema funcionem em outro com poucas alterações.

---

# 12. Sistemas Distribuídos

## 12.1 Conceito

Um sistema distribuído é formado por múltiplos computadores que trabalham juntos como se fossem um único sistema.

---

## 12.2 Características

- Comunicação por rede
- Compartilhamento de recursos
- Tolerância a falhas
- Transparência ao usuário

---

## 12.3 Desafios

- Sincronização
- Consistência de dados
- Latência
- Segurança

---

# 13. Concorrência e Paralelismo

## 13.1 Concorrência

Concorrência ocorre quando múltiplos processos compartilham a CPU alternadamente.

Não necessariamente ocorre execução simultânea real.

---

## 13.2 Paralelismo

Paralelismo ocorre quando múltiplos núcleos executam tarefas ao mesmo tempo.

Requer hardware multicore.

---

## 13.3 Problemas Clássicos

- Condições de corrida
- Deadlocks
- Inanição
- Bloqueios excessivos

---

# 14. Deadlocks

## 14.1 Definição

Deadlock ocorre quando dois ou mais processos ficam esperando indefinidamente por recursos uns dos outros.

---

## 14.2 Condições Necessárias

Para ocorrer deadlock, quatro condições devem existir simultaneamente:

- Exclusão mútua
- Retenção e espera
- Não preempção
- Espera circular

---

## 14.3 Estratégias de Tratamento

- Prevenção
- Evitação
- Detecção
- Recuperação

---

# 15. Segurança em Sistemas Operacionais

## 15.1 Objetivos

- Confidencialidade
- Integridade
- Disponibilidade

---

## 15.2 Mecanismos

- Controle de acesso
- Autenticação
- Criptografia
- Isolamento de processos

---

# 16. Virtualização

## 16.1 Conceito

Virtualização permite executar múltiplos sistemas operacionais em uma única máquina física.

---

## 16.2 Hypervisors

Existem dois tipos principais:

- Tipo 1 (bare metal)
- Tipo 2 (executa sobre outro SO)

---

## 16.3 Benefícios

- Isolamento
- Otimização de hardware
- Ambientes de teste

---

# 17. Arquiteturas Modernas

## 17.1 x86-64

Arquitetura amplamente utilizada em computadores pessoais.

Permite endereçamento de grande quantidade de memória.

---

## 17.2 Multicore

Processadores modernos possuem múltiplos núcleos.

Isso exige:

- Escalonamento eficiente
- Sincronização
- Controle de concorrência

---

# 18. Tendências Modernas

- Computação em nuvem
- Containers
- Sistemas embarcados
- Edge computing

---

# 19. Comparação entre Gerações

| Geração | Característica Principal |
|----------|-------------------------|
| 1ª | Sem SO |
| 2ª | Batch |
| 3ª | Multiprogramação |
| 4ª | PCs e GUI |
| 5ª | Mobilidade e Distribuição |

---

# 20. Análise Crítica

A evolução dos sistemas operacionais demonstra uma constante busca por:

- Maior eficiência
- Melhor utilização de hardware
- Melhor experiência do usuário
- Maior segurança

Cada avanço tecnológico no hardware exige adaptações no software.

---

# 21. Conclusão Geral

O Sistema Operacional é o elemento central que transforma hardware em uma plataforma utilizável.

Ele abstrai complexidade, gerencia recursos e permite que múltiplos processos coexistam de forma organizada.

Sem Sistemas Operacionais modernos, a computação atual seria inviável.

---

# Fim do Documento