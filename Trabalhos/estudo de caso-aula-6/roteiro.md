
### 👤 Integrante 1: O Arquiteto de Virtualização e Sistemas
**Foco:** A base da infraestrutura e o isolamento dos ambientes.

* **Fundamentos de SO e Kernel:** Pesquisar as diferenças entre o ambiente atual (servidores locais bagunçados) e um sistema padronizado (Linux vs Windows Server).
* **Virtualização (Hypervisors):** Pesquisar como o **Oracle VirtualBox** ou **VMware** podem criar ambientes de teste isolados.
* **Planejamento de Recursos:** Como definir a quantidade de CPU, RAM e Disco para cada VM sem travar o servidor principal.
* **Snapshots e Recuperação:** Como usar a virtualização para criar "pontos de restauração" antes de atualizações críticas.

### 👤 Integrante 2: O Especialista em Containers e Padronização
**Foco:** Resolver o problema do "na minha máquina funciona" e agilizar o pipeline.

* **Introdução ao Docker:** O que são containers e por que eles são mais leves que máquinas virtuais.
* **Dockerize a Aplicação:** Como empacotar as aplicações web da DevStore em imagens padronizadas.
* **Versionamento de Código:** Pesquisar o uso do **Git e GitHub** para que a equipe pare de programar diretamente no servidor.
* **Pipeline de Deploy:** Como o código sai do computador do desenvolvedor, passa pelo container e vai para a nuvem de forma automática.

### 👤 Integrante 3: O Engenheiro de Nuvem (Cloud) e Segurança
**Foco:** Disponibilidade, escalabilidade e a migração para o ambiente externo.

* **Fundamentos de Cloud (AWS):** Pesquisar serviços como **EC2** (servidores elásticos) e **S3** (armazenamento de arquivos).
* **Escalabilidade Elástica:** Como a AWS permite aumentar o número de servidores automaticamente quando o site tem muitos acessos.
* **Segurança e Backup:** Estratégias de backup na nuvem e proteção de dados para evitar os problemas de segurança atuais da DevStore.
* **Manutenção e Expansão:** Como monitorar os logs dos servidores e planejar o crescimento futuro da infraestrutura na nuvem.

---

### 🚀 Como juntar tudo coerentemente (Roteiro do Trabalho)

Para que o texto final não pareça "retalhado", sigam esta estrutura de tópicos para o documento final:

1.  **Diagnóstico do Problema:** (Todos contribuem) Breve resumo dos erros atuais da DevStore.
2.  **Solução de Desenvolvimento:** (Integrante 2) Introdução do Git e Docker no dia a dia.
3.  **Solução de Homologação:** (Integrante 1) Como as Máquinas Virtuais serão usadas para testar o que foi desenvolvido.
4.  **Solução de Produção:** (Integrante 3) Como o projeto final será hospedado na nuvem (AWS) para os clientes acessarem.
5.  **Plano de Manutenção:** (Integrante 3 e 1) Como cuidar da segurança e expansão.
6.  **Conclusão:** (Todos) Como essa nova arquitetura resolve a falta de padronização e escalabilidade.

---

### 💡 Dica de Ouro para o Grupo:
Utilizem uma ferramenta como o **Google Docs** ou **Notion** para escreverem simultaneamente. Como vocês estão baseando o repositório em Markdown, vocês podem criar um arquivo `PROJETO.md` e cada um vai preenchendo sua seção. 

**Pergunta de guia para vocês:** Vocês já definiram qual sistema operacional (ex: Ubuntu Server) será a base oficial para os containers e máquinas virtuais da DevStore?