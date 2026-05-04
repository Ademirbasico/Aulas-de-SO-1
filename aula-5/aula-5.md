
# 🌐 Introdução à Virtualização

A virtualização é uma tecnologia fundamental que permite a abstração do hardware físico, possibilitando que múltiplos sistemas operacionais funcionem simultaneamente em uma única máquina.

---

## 1. Definição e Princípios
A virtualização cria uma camada de software sobre o hardware real para simular ambientes computacionais isolados.
* **Execução Simultânea:** Permite rodar diferentes SOs (Windows, Linux, macOS) ao mesmo tempo no mesmo computador.
* **Isolamento:** Cada ambiente virtualizado (Máquina Virtual) é independente; falhas em uma VM não afetam o sistema hospedeiro ou outras VMs.
* **Simulação de Hardware:** O software simula componentes como CPU, memória, disco e placa de rede para o sistema convidado.

---

## 2. Vantagens da Virtualização
A adoção desta tecnologia traz benefícios estratégicos para desenvolvedores e empresas:
* **Economia de Hardware:** Redução de custos ao consolidar vários servidores em um único equipamento físico.
* **Segurança para Testes:** Ambiente ideal para executar softwares não testados ou suspeitos sem risco para o sistema principal.
* **Snapshots e Recuperação:** Facilidade de "congelar" o estado de uma máquina e retornar a ele instantaneamente em caso de erro.
* **Portabilidade:** Máquinas virtuais podem ser facilmente movidas ou copiadas para outros computadores físicos.



---

## 3. Conceito de Máquina Virtual (VM)
Uma **Máquina Virtual** é um arquivo de computador que se comporta como um computador real.
* **Host (Hospedeiro):** O sistema operacional principal que está rodando diretamente no hardware físico.
* **Guest (Convidado):** O sistema operacional que está rodando dentro da máquina virtual.
* **Hypervisor (VMM):** O software responsável por gerenciar as VMs e distribuir os recursos de hardware entre elas.

---

## 4. Oracle VirtualBox
O material destaca o **VirtualBox** como uma das ferramentas de virtualização mais populares e acessíveis.
* **Multiplataforma:** Roda em Windows, Linux e macOS.
* **Código Aberto:** Gratuito e com vasta documentação.
* **Funcionalidades:** Suporte a aceleração de hardware, pastas compartilhadas e dispositivos USB.



---

## 5. Aplicações Práticas
* **Laboratórios de Estudo:** Instalação de diferentes distribuições Linux para aprendizado.
* **Desenvolvimento:** Testar aplicações em diferentes versões de sistemas operacionais.
* **Legado:** Executar softwares antigos que não são mais compatíveis com os SOs modernos.

---

### 💡 Destaque da Atividade
A virtualização eficiente exige um equilíbrio no uso de recursos. Ao criar uma VM, deve-se considerar:
1.  **Memória RAM:** Reservar o suficiente para a VM sem travar o Host.
2.  **Armazenamento:** Uso de discos virtuais dinamicamente alocados (consomem espaço conforme o uso) ou de tamanho fixo.
3.  **Rede:** Configuração de modos como *NAT* (compartilha IP do host) ou *Bridge* (VM aparece como um novo dispositivo na rede).

---
*Referência: Baseado no material de aula "Introdução à Virtualização" (Prof. Me. Deivison S. Takatu).*