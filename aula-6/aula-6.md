
# 🏢 Estudo de Caso I: Reestruturação de Infraestrutura (DevStore)

Este estudo de caso aborda os desafios de escalabilidade e segurança de uma startup de desenvolvimento de sites, propondo uma solução baseada em conceitos modernos de sistemas operacionais e infraestrutura.

---

## 1. Cenário Atual e Desafios
A startup **DevStore** enfrenta limitações críticas que impedem seu crescimento sustentável:
* **Falta de Padronização:** Uso de servidores locais sem uma configuração uniforme.
* **Pipeline Ineficiente:** Desenvolvimento de aplicações feito diretamente nas máquinas dos desenvolvedores, sem uso de versionamento ou testes.
* **Escalabilidade Limitada:** Dificuldade em expandir os serviços para acompanhar o aumento da demanda.
* **Segurança Frágil:** Infraestrutura vulnerável e processos de implantação manuais e suscetíveis a erros.

---

## 2. Objetivos da Nova Arquitetura
A proposta visa transformar a infraestrutura da empresa focando em quatro pilares:
* **Escalabilidade:** Capacidade de crescer conforme a necessidade do negócio.
* **Isolamento:** Uso de virtualização para criar ambientes de testes seguros.
* **Padronização:** Implementação de containers para garantir que a aplicação rode da mesma forma em qualquer ambiente.
* **Automação:** Integração de ferramentas de computação em nuvem e versionamento.

---

## 3. Estratégias Técnicas Propostas

### Virtualização
Uso de máquinas virtuais (VMs) para isolar ambientes de homologação.
* **Finalidade:** Criar cópias fiéis do ambiente de produção para testes sem riscos.
* **Controle:** Monitoramento rigoroso do consumo de recursos (CPU, RAM e Disco).



### Containerização (Docker)
Adoção de containers para empacotar as aplicações e suas dependências.
* **Vantagem:** Garante que o software funcione perfeitamente desde a máquina do desenvolvedor até o servidor final.
* **Eficiência:** Containers são mais leves que máquinas virtuais tradicionais, permitindo maior densidade de serviços.

### Computação em Nuvem (AWS)
Migração da infraestrutura local para a nuvem.
* **Serviços:** Uso de instâncias elásticas e armazenamento gerenciado.
* **Disponibilidade:** Redução de tempo de inatividade e facilidade de backup.

---

## 4. Planejamento de Implantação e Manutenção
O projeto deve incluir um plano detalhado contendo:
* **Decisões Técnicas:** Justificativa para a escolha de cada ferramenta (ex: Docker vs. VMs puras).
* **Estratégia de Expansão:** Como novos servidores serão adicionados automaticamente.
* **Manutenção:** Processos de atualização de segurança e monitoramento de logs.

---

## 5. Ferramentas e Referências Recomendadas
O estudo incentiva a exploração de ecossistemas modernos:
* **Versionamento:** Git e GitHub para controle de código.
* **Containerização:** Docker e documentação oficial.
* **Cloud:** Documentação da AWS para serviços de infraestrutura escalável.

---

### 💡 Conclusão do Estudo
A modernização da DevStore não é apenas uma troca de hardware, mas a implementação de uma **cultura de infraestrutura como código**, onde o isolamento (via virtualização) e a padronização (via containers) garantem a segurança e a agilidade necessárias para uma startup competitiva.

---
*Referência: Baseado no material "Estudo de Caso I - Sistemas Operacionais" (Prof. Me. Deivison S. Takatu).*