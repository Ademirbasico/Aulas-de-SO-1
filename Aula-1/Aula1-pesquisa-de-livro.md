
## 🔹 1. O que é um Sistema Operacional (SO)

* É o **software intermediário** entre hardware e usuário/programas.
* Gerencia:

  * **CPU**
  * **Memória**
  * **Dispositivos de E/S**
  * **Sistema de arquivos**
* Objetivos principais:

  * **Facilitar o uso do hardware**
  * **Usar recursos de forma eficiente**
  * **Garantir proteção e justiça entre programas**

---

## 🔹 2. Evolução histórica dos Sistemas Operacionais

### 🟤 Primeira geração (1945–1955) — **Válvulas**

* Não existia sistema operacional.
* Programação:

  * Em **linguagem de máquina**
  * Conexões físicas (painéis, cabos).
* Um único programa por vez.
* Totalmente manual.

---

### 🔵 Segunda geração (1955–1965) — **Transistores**

* Surgem os **sistemas em lote (batch)**.
* Programas eram:

  * Escritos em **FORTRAN ou Assembly**
  * Inseridos via **cartões perfurados**
* SO simples:

  * Apenas carregava, executava e finalizava programas.
* Muito tempo ocioso de CPU.

---

### 🟢 Terceira geração (1965–1980) — **Circuitos Integrados**

Aqui surgem os conceitos fundamentais dos SO modernos:

#### 📌 Multiprogramação

* Vários programas ficam **na memória ao mesmo tempo**.
* Enquanto um espera E/S, outro usa a CPU.
* Aumenta drasticamente o uso da CPU.

#### 📌 Spooling

* E/S lenta (impressoras, fitas) é desacoplada da execução.
* Dados vão para disco e são processados depois.
* Exemplo clássico: impressão.

#### 📌 Time-sharing (compartilhamento de tempo)

* Muitos usuários conectados simultaneamente.
* CPU é dividida em **fatias de tempo**.
* Base dos sistemas interativos.

#### 📌 Surgimento do UNIX

* Criado a partir do MULTICS.
* Filosofia:

  * Simplicidade
  * Pequenos programas
  * Interface por **shell**
* Extremamente influente.

---

### 🟣 Quarta geração (1980–presente) — **Computadores pessoais**

* Popularização dos **microprocessadores**.
* Surgem:

  * **CP/M**
  * **MS-DOS**
  * **Windows**
  * **UNIX/BSD**
  * **Linux**
* Interfaces gráficas (GUI) tornam o SO acessível ao usuário comum.

---

### 🟠 Quinta geração (1990–presente) — **Mobilidade e redes**

* Sistemas operacionais para:

  * Smartphones
  * Tablets
  * Sistemas embarcados
* Forte presença de:

  * **Distribuição**
  * **Redes**
  * **Computação em nuvem**
* Exemplos:

  * Android (base Linux)
  * iOS (base UNIX)

---

## 🔹 3. MULTICS

* Sistema **ambicioso e complexo**.
* Objetivo:

  * Centenas de usuários simultâneos
  * Alta segurança
* Comercialmente fracassou, mas:

  * Influenciou profundamente o UNIX.
* Introduziu conceitos modernos:

  * Proteção
  * Compartilhamento
  * Hierarquia de arquivos

---

## 🔹 4. UNIX e POSIX

* UNIX se espalhou por universidades e empresas.
* Muitas variantes → caos de compatibilidade.
* Surge o **POSIX**:

  * Define uma **interface padrão**
  * Garante portabilidade entre sistemas UNIX-like.
* Hoje:

  * Linux, macOS, BSD seguem POSIX (total ou parcialmente).

---

## 🔹 5. Processos e uso da CPU

* Programas alternam entre:

  * **Processamento**
  * **Espera por E/S**
* SO precisa:

  * Escalonar tarefas
  * Evitar CPU ociosa
* Base do escalonamento moderno.

---

## 🔹 6. Memória

* Inicialmente:

  * Uma tarefa por vez.
* Evolução:

  * Partições fixas
  * Multiprogramação
* Conceito essencial:

  * Vários processos residindo na memória simultaneamente.

---

## 🔹 7. Sistemas distribuídos

* Vários computadores interligados.
* Usuário vê como **um único sistema**.
* Desafios:

  * Comunicação
  * Sincronização
  * Consistência

---

## 🔹 8. Arquiteturas modernas

* Arquitetura **x86 / x86-64**
* Múltiplos núcleos
* Execução paralela
* SO precisa lidar com:

  * Concorrência
  * Paralelismo
  * Escalonamento avançado

---

## 🔹 9. Ideia central que o livro reforça

> **Sistemas Operacionais existem para esconder a complexidade do hardware e maximizar eficiência, justiça e confiabilidade.**

---
